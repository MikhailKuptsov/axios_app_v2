// src/components/Admin/BlockAllFacilitiesCards.js
import React from 'react';
import CardFacilities from '../UI/CardFacilities';

const BlockAllFacilitiesCards = ({ facilities, onSelectFacility }) => {
  return (
    <div className="row">
      {facilities.map(facility => (
        <div className="col-md-6 col-lg-4 mb-4" key={facility._id}>
          <CardFacilities
            data_id={facility._id}
            data_short_name={facility.short_name}
            data_full_name={facility.full_name}
            data_description={facility.description}
            onSelect={() => onSelectFacility(facility)}
          />
        </div>
      ))}
    </div>
  );
};

export default BlockAllFacilitiesCards;