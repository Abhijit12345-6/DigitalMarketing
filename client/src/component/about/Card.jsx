import React from 'react';

const Card = ({ icon, title, description }) => {
  return (
    <div className="max-w-sm p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="text-4xl text-indigo-600 mr-3">{icon}</div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
