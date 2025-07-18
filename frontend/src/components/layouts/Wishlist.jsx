import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addCartItem } from "../../actions/cartActions";

const Wishlist = () => {
  const [wishlists, setWishlists] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedWishlists = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlists(storedWishlists);
  }, []);

  const removeFromWishlist = (wishlistName, productId) => {
    const updatedWishlists = wishlists.map(wishlist => {
      if (wishlist.wishlistName === wishlistName) {
        return {
          ...wishlist,
          products: wishlist.products.filter(item => item._id !== productId)
        };
      }
      return wishlist;
    }).filter(wishlist => wishlist.products.length > 0);

    localStorage.setItem('wishlist', JSON.stringify(updatedWishlists));
    setWishlists(updatedWishlists);
  };

  return (
    <div className="wishlist-container">
      <h1 className="wishlist-title">Wishlist ({wishlists.reduce((acc, wishlist) => acc + wishlist.products.length, 0)})</h1>
      <div className="wishlist-row">
        {wishlists.length > 0 ? (
          wishlists.map((wishlist, index) => (
            <div key={index} className="wishlist-group">
              <h2 className="wishlist-group-title">{wishlist.wishlistName}</h2>
              <div className="wishlist-items">
                {wishlist.products.length > 0 ? (
                  wishlist.products.map((item, index) => (
                    <div key={index} className="wishlist-item">
                      <div className="wishlist-card">
                        <img src={item.images[1].image} className="wishlist-image" alt={item.name} />
                        {item.discount && <span className="wishlist-discount-badge">-{item.discount}%</span>}
                        <div className="wishlist-details">
                          <h5 className="wishlist-item-title">{item.name}</h5>
                          <p className="wishlist-item-price">
                            ${item.price}
                            {item.oldPrice && <span className="wishlist-item-old-price">${item.oldPrice}</span>}
                          </p>
                          <button
                            className="wishlist-remove-btn"
                            onClick={() => removeFromWishlist(wishlist.wishlistName, item._id)}
                          >
                            <i className="fas fa-trash-alt"></i>
                          </button>
                          <button
                            type="button"
                            id="cart_btn"
                            disabled={item.stock === 0}
                            onClick={() => {
                              dispatch(addCartItem(item._id, 1));
                              toast('Cart Item Added!', {
                                type: 'success',
                                position: toast.POSITION.BOTTOM_CENTER
                              });
                            }}
                            
                            className="wishlist-add-btn"
                          >
                            <i className="fas fa-shopping-cart"></i> Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="wishlist-empty">
                    <p>No items in this wishlist.</p>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="wishlist-empty">
            <p>Your wishlist is empty</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Wishlist;
