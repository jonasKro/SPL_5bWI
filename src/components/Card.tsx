import React from 'react';

interface CardProps {
  name: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ name, description, imageUrl }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt={name}
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
