import React, { useState } from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const ClubCard = ({ clubname, clubdesc, imageSrc }) => {
  const navigate = useNavigate();

  const handleReadMore = ()=>{
    navigate(`/clubpage/${encodeURIComponent(clubname)}`);
  }
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

        <p className={`text-xs text-gray-600 mt-1 transition-all line-clamp-2`}>
          {clubdesc}
        </p>
        <div className="mt-2">
          <Button label="Read More" onClick={handleReadMore} />
        </div>
      </div>

    </div>
  );
}

export default ClubCard;
