import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createReview, getProduct } from "../../actions/productActions";
import Loader from '../layouts/Loader';
import MetaData from "../layouts/MetaData";
import { addCartItem } from "../../actions/cartActions";
import { clearReviewSubmitted, clearError, clearProduct } from '../../slices/productSlice';
import { Modal } from 'react-bootstrap';
import { toast } from "react-toastify";
import ProductReview from "./ProductReview";
import ReactImageMagnify from 'react-image-magnify';

export default function ProductDetail() {
    const { loading, product = {}, isReviewSubmitted, error } = useSelector((state) => state.productState);
    const { user } = useSelector(state => state.authState);
    const dispatch = useDispatch();
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleImages, setVisibleImages] = useState([]);

    const increaseQty = () => {
        const count = document.querySelector('.count');
        if (product.stock === 0 || count.valueAsNumber >= product.stock) return;
        const qty = count.valueAsNumber + 1;
        setQuantity(qty);
    };

    const decreaseQty = () => {
        const count = document.querySelector('.count');
        if (count.valueAsNumber === 1) return;
        const qty = count.valueAsNumber - 1;
        setQuantity(qty);
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [rating, setRating] = useState(1);
    const [comment, setComment] = useState("");

    const reviewHandler = () => {
        const formData = new FormData();
        formData.append('rating', rating);
        formData.append('comment', comment);
        formData.append('productId', id);
        dispatch(createReview(formData));
    };

    useEffect(() => {
        if (isReviewSubmitted) {
            handleClose();
            toast('Review Submitted successfully', {
                type: 'success',
                position: toast.POSITION.BOTTOM_CENTER,
                onOpen: () => dispatch(clearReviewSubmitted())
            });
            dispatch(getProduct(id));
        }
        if (error) {
            toast(error, {
                position: toast.POSITION.BOTTOM_CENTER,
                type: 'error',
                onOpen: () => { dispatch(clearError()) }
            });
            return;
        }
        if (!product._id || isReviewSubmitted) {
            dispatch(getProduct(id));
        }
        return () => {
            dispatch(clearProduct());
        };
    }, [dispatch, id, isReviewSubmitted, error]);

    useEffect(() => {
        if (product.images && product.images.length > 0) {
            setSelectedImage(product.images[0].image);
            setVisibleImages(product.images.slice(0, 4));  // Initially display the first 4 images
        }
    }, [product.images]);

    const nextImage = () => {
        if (currentIndex + 4 < product.images.length) {
            setCurrentIndex(currentIndex + 1);
            setVisibleImages(product.images.slice(currentIndex + 1, currentIndex + 5));
        }
    };

    const prevImage = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setVisibleImages(product.images.slice(currentIndex - 1, currentIndex + 3));
        }
    };

    return (
        <Fragment>
            {loading ? <Loader /> :
                <Fragment>
                    <MetaData title={product.name} />
                    <div className="row f-flex justify-content-around">
                        <div className="col-12 col-lg-5">
                            <div className="main-image">
                                {selectedImage && (
                                    <ReactImageMagnify style={{ zIndex: 999 }} {...{
                                        smallImage: {
                                            alt: product.name,
                                            isFluidWidth: true,
                                            src: selectedImage
                                        },
                                        largeImage: {
                                            src: selectedImage,
                                            width: 1200,
                                            height: 1200,
                                        },
                                        lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }
                                    }} />
                                )}
                            </div>
                            <div className="thumbnail-gallery">
                                {product.images && product.images.length > 4 && (
                                    <button onClick={prevImage} className="btn btn-secondary mr-2">
                                        &lt;
                                    </button>
                                )}
                                {visibleImages.map((image) => (
                                    <img
                                        key={image._id}
                                        src={image.image}
                                        alt={product.name}
                                        className={`thumbnail ${selectedImage === image.image ? 'selected' : ''}`}
                                        onClick={() => setSelectedImage(image.image)}
                                        height="100"
                                        width="100"
                                    />
                                ))}
                                {product.images && product.images.length > 4 && (
                                    <button onClick={nextImage} className="btn btn-secondary ml-2">
                                        &gt;
                                    </button>
                                )}
                            </div>
                        </div>

                        <div style={{ zIndex: 1 }} className="col-12 col-lg-5 mt-5 ">
                            <h3>{product.name}</h3>
                            <p id="product_id">Product # {product._id}</p>
                            <hr />
                            <div className="rating-outer">
                                <div className="rating-inner" style={{ width: `${product.ratings / 5 * 100}%` }}></div>
                            </div>
                            <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>
                            <hr />
                            <p id="product_price">${product.price}</p>
                            <div className="stockCounter d-inline">
                                <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>
                                <input type="number" className="form-control count d-inline" value={quantity} readOnly />
                                <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
                            </div>
                            <button
                                type="button"
                                id="cart_btn"
                                disabled={product.stock === 0}
                                onClick={() => {
                                    dispatch(addCartItem(product._id, quantity));
                                    toast('Cart Item Added!', {
                                        type: 'success',
                                        position: toast.POSITION.BOTTOM_CENTER
                                    });
                                }}
                                className="btn btn-primary d-inline ml-4"
                            >
                                Add to Cart
                            </button>
                            <hr />
                            <p>Status: <span className={product.stock > 0 ? 'greenColor' : 'redColor'} id="stock_status">{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</span></p>
                            <hr />
                            <h4 className="mt-2">Description:</h4>
                            <p>{product.description}</p>
                            <hr />
                            <p id="product_seller mb-3">Sold by: <strong>{product.seller}</strong></p>
                            {user ?
                                <button onClick={handleShow} id="review_btn" type="button" className="btn btn-primary mt-4">
                                    Submit Your Review
                                </button> :
                                <div className="alert alert-danger mt-5"> Login to Post Review</div>
                            }
                            <div className="row mt-2 mb-5">
                                <div className="rating w-50">
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Submit Review</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <ul className="stars">
                                                {[1, 2, 3, 4, 5].map(star => (
                                                    <li
                                                        key={star}
                                                        value={star}
                                                        onClick={() => setRating(star)}
                                                        className={star <= rating ? 'orange' : ''}
                                                        onMouseOver={(e) => e.target.classList.add('yellow')}
                                                        onMouseOut={(e) => e.target.classList.remove('yellow')}
                                                    >
                                                        <i className="fa fa-star"></i>
                                                    </li>
                                                ))}
                                            </ul>
                                            <textarea
                                                onChange={(e) => setComment(e.target.value)}
                                                name="review"
                                                id="review"
                                                className="form-control mt-3"
                                            />
                                            <button
                                                disabled={loading}
                                                onClick={reviewHandler}
                                                aria-label="Close"
                                                className="btn my-3 float-right review-btn px-4 text-white"
                                            >
                                                Submit
                                            </button>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>

                    {product.reviews && product.reviews.length > 0 && (
                        <div className="reviews w-75">
                            <h3>Other's Reviews:</h3>
                            <hr />
                            <div className="review-container" style={{ maxHeight: "400px", overflowY: "auto" }}>
                                {product.reviews.map(review => (
                                    <ProductReview key={review._id} review={review} />
                                ))}
                            </div>
                        </div>
                    )}
                </Fragment>
            }
        </Fragment>
    );
}
