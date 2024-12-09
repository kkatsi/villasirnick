import React from 'react';
import PersonIcon from 'app/assets/icons/person.svg?react';
import BedIcon from 'app/assets/icons/bed.svg?react';
import BathIcon from 'app/assets/icons/bath.svg?react';

const Features = () => {
  return (
    <div className="flex gap-4">
      <div>
        <PersonIcon />
        <div className="flex items-end gap-1 mt-2">
          <span className="text-sm leading-4 font-medium">8 </span>
          <span className="text-xs text-gray-500">persons</span>
        </div>
      </div>
      <div>
        <BedIcon />
        <div className="flex items-end gap-1 mt-2">
          <span className="text-sm leading-4 font-medium">4 </span>
          <span className="text-xs text-gray-500">bedrooms</span>
        </div>
      </div>
      <div>
        <BathIcon />
        <div className="flex items-end gap-1 mt-2">
          <span className="text-sm leading-4 font-medium">2.5 </span>
          <span className="text-xs text-gray-500">bathrooms</span>
        </div>
      </div>
    </div>
  );
};

export default Features;
