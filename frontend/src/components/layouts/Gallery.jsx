import React, { useState } from 'react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState(''); // No default filter, so no images show initially

  const filterCards = (filter) => {
    setActiveFilter(filter);
  };
  const images = [
    { src: 'https://w0.peakpx.com/wallpaper/110/397/HD-wallpaper-xiaomi-android-mobile-phone-2019.jpg', name: 'Mobile', title: 'Xiaomi' },
    { src: 'https://bsmedia.business-standard.com/_media/bs/img/article/2023-08/28/full/1693216575-3418.jpg?im=FitAndFill=(826,465)', name: 'Mobile', title: 'vivo' },
    { src: 'https://w0.peakpx.com/wallpaper/362/98/HD-wallpaper-samsung-galaxy-a9-smartphones-2018-mobile-phones-close-up-samsung.jpg', name: 'Mobile', title: 'Vivo' },
    { src: 'images/car-1.jpg', name: 'cars', title: 'Retro', text: 'Lorem ipsum dolor..' },
    { src: 'images/car-2.jpg', name: 'cars', title: 'Fast', text: 'Lorem ipsum dolor..' },
    { src: 'images/car-3.jpg', name: 'cars', title: 'Classic', text: 'Lorem ipsum dolor..' },
    { src: 'images/people-1.jpg', name: 'people', title: 'Men', text: 'Lorem ipsum dolor..' },
    { src: 'images/people-2.jpg', name: 'people', title: 'Girl', text: 'Lorem ipsum dolor..' }
  ];

  return (
    <div className="container">
      {/* Gallery Button Section */}
      <div className="dropdown mt-5" style={{ position: 'relative' }}>
        <select 
          className="form-select" 
          onChange={(e) => filterCards(e.target.value)} 
          style={{
            backgroundColor: '#f8f8f8',
            border: '1px solid #ddd',
            padding: '10px 20px',
            borderRadius: '5px',
            fontSize: '16px',
            color: '#333',
            textAlign: 'left',
            width: '100%',
          }}
        >
          <option value="">Select Category</option>
          <option value="Mobile">Mobiles</option>
          <option value="cars">Laptops</option>
          <option value="people">Watches</option>
        </select>
      </div>

      {/* Filterable Images / Cards Section */}
      <div className="row px-2 mt-4 gap-3" id="filterable-cards">
        {images
          .filter(image => image.name === activeFilter)
          .map((image, index) => (
            <div
              key={index}
              className="card p-0 show"
              data-name={image.name}
              style={{
                width: 'calc(25% - 15px)',
                marginBottom: '15px',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease',
              }}
            >
              <img src={image.src} alt="img" style={{ width: '100%', height: 'auto' }} />
              <div className="card-body" style={{ padding: '10px' }}>
                <h6 className="card-title" style={{ fontFamily: 'sans-serif', fontWeight: 'bold' }}>{image.title}</h6>
                <p className="card-text" style={{ fontFamily: 'sans-serif', color: '#555' }}>{image.text}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Gallery;
