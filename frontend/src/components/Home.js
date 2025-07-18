import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import MetaData from './layouts/MetaData';
import Testimonial from './layouts/Testimonials';
import Footer from './layouts/Footer';
import BrandsPage from './BrandsPage';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Header from './layouts/Header';
import Service from './layouts/service';
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FiWatch } from "react-icons/fi";
import FeaturedCategories from './layouts/FeaturedCategories';
import Features from './layouts/Features';
import SearchBar from './SearchBar';
const sliderContent = [
    {
        title: 'Discover the Latest in Mobile Phones',
        description: 'Get the best deals on the latest smartphones from top brands.',
        button: 'View Mobiles',
        url: '/mobile-phones',
        image: 'https://www.brandsynario.com/wp-content/uploads/huawei-1.jpg',
    },
    {
        title: 'Top-Quality Laptops at Unbeatable Prices',
        description: 'Find the perfect laptop for work, study, or gaming.',
        button: 'View Laptops',
        url: '/laptops',
        image: 'https://tt-hardware.com/wp-content/uploads/2021/02/pc-portable-dell.png',
    },
    {
        title: 'Stylish Watches for Every Occasion',
        description: 'Browse our selection of premium watches from leading brands.',
        button: 'View Watches',
        url: '/watches', 
        image: 'https://miro.medium.com/v2/resize:fit:1200/1*euj0vZWl4-4yIXC-vf3dUg.jpeg',
    },
];
const categories = [
    { name: 'Mobile Phones', icon: <CiMobile4 size={50} /> },
    { name: 'Laptops', icon: <HiOutlineComputerDesktop size={50} /> },
    { name: 'Watches', icon: <FiWatch size={50} /> },
];
const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); 
    useEffect(() => {
        localStorage.removeItem('selectedCategory');
    }, []);
    const handleCategoryClick = (category) => {
        setLoading(true);
        setSelectedCategory(category);
        localStorage.setItem('selectedCategory', category);
        setTimeout(() => setLoading(false), 1000);
    };
    const handleButtonClick = (url) => {
        navigate(url); 
    };
    return (
        <Fragment>
            <Header />
            
            
            <div>
                <Slider autoplay={1000}>
                    {sliderContent.map((item, index) => (
                        <div key={index} className="slider-container">
                            <div className="slider-image">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="slider-content">
                                <h1 className="slider-title">{item.title}</h1>
                                <p className="slider-description">{item.description}</p>
                                <button
                                    className="slider-button"
                                    onClick={() => handleButtonClick(item.url)}
                                >
                                    {item.button}
                                </button>
                            </div>
                        </div>
                    ))}
                </Slider>
                <FeaturedCategories />

                <section id="products" className="container mt-5">
                    <div className="filters text-center mb-5">
                        <div className="categories">
                            {categories.map((category) => (
                                <div
                                    key={category.name}
                                    className={`category-card ${selectedCategory === category.name ? 'selected' : ''}`}
                                    onClick={() => handleCategoryClick(category.name)}
                                >
                                    {category.icon}
                                    <h3 className="category-name">{category.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {!loading && selectedCategory && (
                    <div className="container mt-5">
                        <BrandsPage category={selectedCategory} />
                    </div>
                )}
                <Service />
                <Testimonial />
                <Features />
                <Footer />
            </div>
        </Fragment>
    );
};

export default Home;
