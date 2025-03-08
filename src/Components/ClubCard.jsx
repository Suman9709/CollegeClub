import React, { useState } from 'react';
import Button from './Button';

const ClubCard = ({ clubname, clubdesc, imageSrc }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg shadow-md flex flex-col w-64 h-auto overflow-hidden">
      <div className="h-36 w-full">
        <img
          src={imageSrc}
          alt={`${clubname} image`}
          className="h-full w-full object-cover "
        />
      </div>
      <div className="p-2 text-center">
        <h1 className="text-lg font-semibold">{clubname}</h1>
        <p className={`text-xs text-gray-600 mt-1 transition-all ${expanded ? '' : 'line-clamp-2 overflow-hidden'}`}>
          {clubdesc}
        </p>
        <div className="mt-2">
          <Button label={expanded ? 'Read Less' : 'Read More'} onClick={() => setExpanded(!expanded)} />
        </div>
      </div>

    </div>
  );
}

export default ClubCard;
