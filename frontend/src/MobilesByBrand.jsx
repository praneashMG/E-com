import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getCategoryProducts } from './actions/productActions';
import Loader from './components/layouts/Loader';
import MetaData from './components/layouts/MetaData';
import SearchBar from './components/SearchBar'; // Import the SearchBar component

const MobilesByBrand = () => {
  const { brandName } = useParams();
  const [mobiles, setMobiles] = useState([]);
  const [filteredMobiles, setFilteredMobiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, [brandName]);

  async function getData() {
    setLoading(true);
    try {
      let data = await getCategoryProducts({ category: getCategoryFromUrl(window.location.href), brand: brandName });
      setMobiles(data.products);
      setFilteredMobiles(data.products); // Initially, filteredMobiles is the same as mobiles
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }

  function getCategoryFromUrl(url) {
    try {
      const urlObj = new URL(url);
      const params = new URLSearchParams(urlObj.search);
      return params.get('category');
    } catch (error) {
      console.error('Invalid URL:', error);
      return null;
    }
  }

  const handleSearch = (query) => {
    const searchResult = mobiles.filter((mobile) =>
      mobile.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMobiles(searchResult);
  };

  const handleAddToWishlist = (mobile) => {
    const existingWishlists = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistName = prompt('Enter Wishlist Name:');

    if (wishlistName) {
      let wishlist = existingWishlists.find(item => item.wishlistName === wishlistName);

      if (wishlist) {
        if (!wishlist.products.some(product => product._id === mobile._id)) {
          wishlist.products.push(mobile);
          localStorage.setItem('wishlist', JSON.stringify(existingWishlists));
          alert(`${mobile.name} has been added to your wishlist!`);
        } else {
          alert('This product is already in the wishlist!');
        }
      } else {
        existingWishlists.push({
          wishlistName,
          products: [mobile]
        });
        localStorage.setItem('wishlist', JSON.stringify(existingWishlists));
        alert(`${mobile.name} has been added to your wishlist!`);
      }

      navigate('/wishlist'); // Navigate to the wishlist page after adding
    }
  };

  return (
    <>
      <MetaData title={`${brandName} Mobile Phones`} />
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <h1 className="text-center mt-5">{brandName} BRANDS</h1>
          <div className="row mt-5">
            {filteredMobiles.length > 0 ? (
              filteredMobiles.map((mobile, index) => (
                <div key={index} className="col-md-3 mb-4">
                  <div className="card product-card">
                    <div className="image-container">
                      <img src={mobile.images[1].image} className="card-img-top product-img" alt={mobile.name} />
                      <div className="product-icons">
                        <button className="icon-btn" onClick={() => handleAddToWishlist(mobile)}>
                          <i className="fas fa-heart"></i>
                        </button>
                        <Link to={`/product/${mobile._id}`} className="icon-btn">
                          <i className="fas fa-eye"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{mobile.name}</h5>
                      <p className="product-price">${mobile.price} <span className="old-price">$360</span></p>
                      <div className="product-rating">
                        <span>★★★★★</span>
                        <span>(65)</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12">
                <p className="text-center">No mobiles found for the brand {brandName}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MobilesByBrand;
