import React, { useState } from 'react';
const cardsData = [
  {
    title: 'Mobiles',
    description: 'Discover our extensive range of mobile phones, including the latest models and classic favorites. We offer expert advice and comprehensive support for all your mobile needs, from purchasing to maintenance.',
    imageUrl: 'https://www.thetrainingco.com/wp-content/uploads/2019/01/Why-Mobile-Forensic-Is-Important.jpg',
  },
  {
    title: 'Laptops',
    description: 'Explore our selection of laptops designed for various needs, from high-performance gaming rigs to sleek, portable ultrabooks. Our sales and service team provides personalized recommendations and reliable support.',
    imageUrl: 'https://www.manchester-pc.co.uk/wp-content/uploads/2022/04/Laptop-Repair-Blackley.jpg',
  },
  {
    title: 'Watches',
    description: 'Browse our collection of stylish and functional watches. Whether you’re looking for the latest smartwatches or elegant timepieces, we offer a range of options and exceptional service to meet your needs.',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/6408827eb3d36b718ad40c38/6869275f-e7dc-49fd-95af-6c8556d50335/Loosened%20watch%20screw.jpg',
  },
];
const Card = ({ title, description, imageUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="unique-card">
      <img src={imageUrl} className="unique-card-image" alt={title} />
      <div className="unique-card-content">
        <h2 className="unique-card-heading">{title}</h2>
        <p className="unique-card-text">
          {isExpanded ? description : description.substring(0, 100) + '...'}
        </p>
        <button onClick={handleToggle} className="unique-card-button">
          {isExpanded ? 'Show Less' : 'Learn More'}
        </button>
      </div>
    </div>
  );
};
const CardContainer = () => {
  return (
    <div className="card-container">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};
export default CardContainer;
