import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { decreaseCartItemQty, increaseCartItemQty, removeItemFromCart } from '../../slices/cartSlice';

export default function Cart() {
    const { items } = useSelector(state => state.cartState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const increaseQty = (item) => {
        const count = item.quantity;
        if (item.stock === 0 || count >= item.stock) return;
        dispatch(increaseCartItemQty(item.product));
    }

    const decreaseQty = (item) => {
        const count = item.quantity;
        if (count === 1) return;
        dispatch(decreaseCartItemQty(item.product));
    }

    const checkoutHandler = () => {
        navigate('/login?redirect=shipping');
    }

    return (
        <Fragment>
            {items.length === 0 ?
                <h2 className="mt-5">Your Cart is Empty</h2> :
                <Fragment>
                    <h2 className="mt-5">Your Cart</h2>
                    <div className="cart-table">
                        <div className="cart-header">
                            <div className="cart-column">Product</div>
                            <div className="cart-column">Price</div>
                            <div className="cart-column">Quantity</div>
                            <div className="cart-column">Subtotal</div>
                        </div>
                        {items.map(item => (
                            <div className="cart-item" key={item.product}>
                                <div className="cart-column">
                                    <img src={item.image} alt={item.name} />
                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                </div>
                                <div className="cart-column">
                                    <p>₹{item.price}</p>
                                </div>
                                <div className="cart-column">
                                    <div className="quantity-controls">
                                        <button className="btn-decrease" onClick={() => decreaseQty(item)}>-</button>
                                        <input type="number" value={item.quantity} readOnly />
                                        <button className="btn-increase" onClick={() => increaseQty(item)}>+</button>
                                    </div>
                                </div>
                                <div className="cart-column">
                                    <p>₹{(item.quantity * item.price).toFixed(2)}</p>
                                    <i className="fa fa-trash btn-delete" onClick={() => dispatch(removeItemFromCart(item.product))}></i>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-actions">
                        <button className="btn-return">Return To Shop</button>
                        {/* <button className="btn-update">Update Cart</button> */}
                    </div>
                    <div className="cart-summary">
                        <h4>Cart Total</h4>
                        <div className="summary-item">
                            <p>Subtotal:</p>
                            <p>₹{items.reduce((acc, item) => (acc + item.quantity * item.price), 0).toFixed(2)}</p>
                        </div>
                        <div className="summary-item">
                            <p>Shipping:</p>
                            <p>Free</p>
                        </div>
                        <div className="summary-item">
                            <p>Total:</p>
                            <p>₹{items.reduce((acc, item) => (acc + item.quantity * item.price), 0).toFixed(2)}</p>
                        </div>
                        <button className="btn-checkout" onClick={checkoutHandler}>Proceed to checkout</button>
                    </div>
                </Fragment>
            }
        </Fragment>
    )
}
