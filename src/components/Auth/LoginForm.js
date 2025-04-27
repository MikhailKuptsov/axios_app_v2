// src/components/Auth/LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/auth';
import LoadingSpinner from '../UI/LoadingSpinner';
import ErrorAlert from '../UI/ErrorAlert';
import CheckCapsLock from '../UI/CheckCapsLock'; // Импортируем компонент

const LoginForm = () => {
    const [credentials, setCredentials] = useState({
        username_or_email: '',
        password: ''
      });
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState(null);
      const navigate = useNavigate();

      const handleChange = (e) => {
        setCredentials({
          ...credentials,
          [e.target.name]: e.target.value
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        
        try {
          const userData = await loginUser(credentials);
          sessionStorage.setItem('user_data', JSON.stringify(userData));
          navigate('/Main_page', { replace: true });
        } catch (err) {
          setError(err.message || 'Authorization failed');
        } finally {
          setIsLoading(false);
        }
      };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Authorization</h3>
            </div>
            <div className="card-body">
              {error && <ErrorAlert message={error} />}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username_or_email" className="form-label">username_or_email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username_or_email"
                    name="username_or_email"
                    value={credentials.username_or_email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                    onKeyUp={(e) => e.getModifierState('CapsLock')} // Для корректной работы в Firefox
                  />
                  <CheckCapsLock /> {/* Добавляем проверку CapsLock */}
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;