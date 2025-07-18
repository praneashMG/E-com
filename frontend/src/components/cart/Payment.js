import { QRCodeCanvas } from 'qrcode.react';
import { useElements, useStripe, CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import axios from "axios";
import { orderCompleted } from "../../slices/cartSlice";
import { createOrder } from '../../actions/orderActions';
import { clearError as clearOrderError } from "../../slices/orderSlice";

export default function Payment() {
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);  // State for loading indicator
    const orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'));
    const { user } = useSelector(state => state.authState);
    const { items: cartItems, shippingInfo } = useSelector(state => state.cartState);
    const { error: orderError } = useSelector(state => state.orderState);

    // Prepare the payment data
    const paymentData = {
        amount: Math.round(orderInfo?.totalPrice * 100),
        shipping: {
            name: user.name,
            address: {
                city: shippingInfo.city,
                postal_code: shippingInfo.postalCode,
                country: shippingInfo.country,
                state: shippingInfo.state,
                line1: shippingInfo.address
            },
            phone: shippingInfo.phoneNo
        }
    };

    // Prepare the order object
    const order = {
        orderItems: cartItems,
        shippingInfo,
        ...orderInfo // Merge other order details like totalPrice, shippingPrice, etc.
    };

    // Handle component side effects
    useEffect(() => {
        if (!shippingInfo) {
            navigate('/shipping');  // Ensure shipping information exists
        }

        if (orderError) {
            toast.error(orderError);  // Show error if order error exists
            dispatch(clearOrderError());  // Clear error after showing
        }
    }, [orderError, navigate, dispatch, shippingInfo]);

    // Submit handler for the payment form
    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        document.querySelector('#pay_btn').disabled = true;  // Disable button during payment processing

        try {
            // Call the backend API to create a payment intent and get the client_secret
            const { data } = await axios.post('/api/v1/payment/process', paymentData);
            const clientSecret = data.client_secret;

            console.log("Client Secret:", clientSecret);  // Debugging

            // Confirm the payment using Stripe
            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardNumberElement),
                    billing_details: {
                        name: user.name,
                        email: user.email
                    }
                }
            });

            // Handle errors in payment confirmation
            if (result.error) {
                throw new Error(result.error.message);
            }

            // Payment succeeded, process order
            if (result.paymentIntent.status === 'succeeded') {
                order.paymentInfo = {
                    id: result.paymentIntent.id,
                    status: result.paymentIntent.status
                };
                dispatch(orderCompleted());
                dispatch(createOrder(order));
                navigate('/order/success');  // Redirect to success page
                toast.success("Payment successful!");
            } else {
                throw new Error("Payment failed, please try again.");
            }
        } catch (error) {
            // Log and show error
            console.error("Payment Failed:", error);
            toast.error(error.message || 'Payment failed. Try again.');
            document.querySelector('#pay_btn').disabled = false;  // Re-enable button on error
        } finally {
            setLoading(false);  // Stop loading indicator
        }
    };

    return (
        <div className="row wrapper">
            <div className="col-10 col-lg-5">
                <form onSubmit={submitHandler} className="shadow-lg">
                    <h1 className="mb-4">Card Information</h1>

                    <div className="form-group">
                        <label htmlFor="card_num_field">Card Number</label>
                        <CardNumberElement id="card_num_field" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="card_exp_field">Card Expiry</label>
                        <CardExpiryElement id="card_exp_field" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="card_cvc_field">Card CVC</label>
                        <CardCvcElement id="card_cvc_field" className="form-control" />
                    </div>

                    <button
                        id="pay_btn"
                        type="submit"
                        className="btn btn-block py-3"
                        disabled={loading}  // Disable button when loading
                    >
                        {loading ? "Processing..." : `Pay - $${orderInfo?.totalPrice}`}
                    </button>

                    <h3 className="mt-3">Payment QR Code</h3>
                    <QRCodeCanvas value={orderInfo?.totalPrice?.toString() || "0"} size={150} />
                </form>
            </div>
        </div>
    );
}
