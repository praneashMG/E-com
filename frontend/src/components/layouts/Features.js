import React from 'react';
import { FaShippingFast, FaHeadset, FaShieldAlt, FaCreditCard } from 'react-icons/fa'; // Example of using Font Awesome icons

const Features = () => {
  const features = [
    {
      icon: <FaShippingFast />,
      title: 'Fast Worldwide Shipping',
      description: 'Get free shipping over $250',
    },
    {
      icon: <FaHeadset />,
      title: '24/7 Customer Support',
      description: 'Friendly 24/7 customer support',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Money Back Guarantee',
      description: 'We return money within 30 days',
    },
    {
      icon: <FaCreditCard />,
      title: 'Secure Online Payment',
      description: 'Accept all major credit cards',
    },
  ];

  return (
    <div className="features-container">
      {features.map((feature, index) => (
        <div className="feature" key={index}>
          <div className="feature-icon">{feature.icon}</div>
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
