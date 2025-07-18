import React from 'react';
const categories = [
  {
    name: "iphone14",
    items: 1,
    image: "https://avatars.mds.yandex.net/get-mpic/4303439/img_id4014382010746334300.jpeg/orig ", 
  },
  {
    name: "Rolex watch-Men",
    items: 1,
    image: "https://i.pinimg.com/736x/f6/52/1e/f6521e6264afab983b17ab32d6b86c15--dating--rolex.jpg", 
  },
  {
    name: "Rolex watch-Women",
    items: 14,
    image: "https://remont-rolex.ru/wp-content/uploads/a/1/d/a1d5ed504a3e99cd20026780134ed2fa.jpeg", 
  },
  {
    name: "Samsung ",
    items: 6,
    image: "https://avatars.mds.yandex.net/i?id=aa39268ed6a8b1147261fb47c842fc3c681f580b5cc77f29-5240067-images-thumbs&n=13", // Replace with actual image URL
  },
  
];

const FeaturedCategories = () => {
  return (
    <div className="featured-categories">
      <h2 className="title">Featured Products</h2>
      <p className="subtitle">Visit our shop to see amazing creations from our designers.</p>
      <div className="categories">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
            <p>{category.items} items</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;
