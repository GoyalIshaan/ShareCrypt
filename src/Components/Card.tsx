import React from 'react';

interface CardProps {
  title: string;
  children: string;
}

const Card: React.FC<CardProps> = ({ title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-sm">{children}</p>
  </div>
);

export default Card;
