// import React, { useState, useEffect } from 'react';

// const Slider = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const items = [
//         {
//             backgroundImage: 'url(https://hamariweb.com/images/MobilePhones/top-trending-vivo-mobiles-of-january.jpg)',
//             title: 'Top Trending Samsung Mobiles of January 2024',
//             description: 'Discover the top Samsung phones in January 2024, ranging from budget-friendly options like the Galaxy A12 to high-performance flagships like the Galaxy S23 Ultra. These phones offer advanced features and cater to varying preferences and needs.'
//         },
//         {
//             backgroundImage: 'url(https://touchmobiles.in/public/uploads/images/25-06-2024/667ac38bc7fa7.jpeg)',
//             title: 'Top Trending Realme Mobiles of March 2024',
//             description: 'Explore the latest Realme phones of March 2024, featuring sleek designs, powerful processors, and impressive camera capabilities. These phones offer exceptional performance and are designed for a seamless mobile experience.'
//         },
//         {
//             backgroundImage: 'url(https://cms-assets.bajajfinserv.in/is/image/bajajfinance/vivo-y35-128-gb-storage-agate-black?scl=1)',
//             title: 'Vivo Y35',
//             description: 'The Vivo Y35 offers 128 GB of storage and comes in Agate Black. It is designed to provide ample space for apps, photos, and other media while maintaining a sleek and stylish appearance.'
//         },
//         {
//             backgroundImage: 'url(https://rukminim2.flixcart.com/fk-p-ads/750/350/dp-doc/1720087860672-cly73wfk00ndl0q32a0bzrweg-8ee8e9aede2d595625579c0daabe090882f850ff70680e1a3a09e6da29bf110b.jpg?q=90)',
//             title: 'Flixcart Promo',
//             description: 'A promotional image from Flixcart showcasing their latest deals and offers on mobile phones.'
//         },
//         {
//             backgroundImage: 'url(https://assets.mspimages.in/gear/wp-content/uploads/2022/06/5G-mobiles-under-Rs-20000-1024x538.png)',
//             title: '5G Mobiles Under Rs. 20000',
//             description: 'A collection of 5G-enabled mobile phones available for under Rs. 20000, providing advanced connectivity and features at an affordable price.'
//         },
//         {
//             backgroundImage: 'url(https://cms-assets.bajajfinserv.in/is/image/bajajfinance/vivo-y100a-5g-128-gb-storage-pacific-blue?scl=1)',
//             title: 'Vivo Y100a',
//             description: 'The Vivo Y100a 5G comes with 128 GB of storage and is available in Pacific Blue. This phone offers fast internet speeds and ample storage for all your needs.'
//         },
//         {
//             backgroundImage: 'url(https://rukminim2.flixcart.com/fk-p-ads/850/400/dp-doc/1721294338628-clyr27fwk3j7t0q367um353cl-10fc6a762f393b0fa5220e7f5f9b8226b123615bddc862db443e49775a340f10.png?q=90)',
//             title: 'Flixcart Ad',
//             description: 'A promotional image from Flixcart highlighting special deals and discounts on mobile phones and other electronics.'
//         },
//         {
//             backgroundImage: 'url(https://couponswala.com/blog/wp-content/uploads/2022/10/croma-iphone-offer.jpg.webp)',
//             title: 'Croma iPhone Offer',
//             description: 'A promotional banner from Croma offering deals on iPhones, showcasing the latest models and discounts available.'
//         },
//         {
//             backgroundImage: 'url(https://www.reliancedigital.in/medias/OnePlus-Nord4-Pre-book-544x306px-CLP.jpg?context=bWFzdGVyfGltYWdlc3w3NjEzNnxpbWFnZS9qcGVnfGltYWdlcy9oNDIvaDJkLzEwMTc0MzE5MTY1NDcwLmpwZ3xmMzJiZjc2NzYxYmRkNjdhZmVhZjk3NThmNTEwOTExNDE2OWJmNTgyZGQwOTY4YWY2NTk4NzA2YjRiNDlhZTAz)',
//             title: 'OnePlus Nord4 Pre-book',
//             description: 'A promotional image from Reliance Digital for pre-booking the OnePlus Nord4, featuring details on the latest offers and specifications.'
//         }
//     ];

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
//         }, 2000);

//         return () => clearInterval(interval);
//     }, [items.length]);

//     return (
//         <div className="custom-carousel">
//             {items.map((item, index) => (
//                 <div
//                     key={index}
//                     className={`custom-item ${index === currentIndex ? 'custom-active' : ''}`}
//                     style={{ backgroundImage: item.backgroundImage }}
//                 >
//                     <div className="custom-content">
//                         <div className="custom-title">{item.title}</div>
//                         <div className="custom-name">{item.name}</div>
//                         <div className="custom-des">{item.description}</div>
//                         <div className="custom-btn">
//                             {/* <button>See More</button>
//                             <button>Subscribe</button> */}
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Slider;



import React, { useState, useEffect } from 'react';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
        {
            backgroundImage: 'url(https://hamariweb.com/images/MobilePhones/top-trending-vivo-mobiles-of-january.jpg)',
            title: 'Top Trending Samsung Mobiles of January 2024',
            name: 'EAGLE',
            description: 'Discover the top Samsung phones in January 2024, ranging from budget-friendly options like the Galaxy A12 to high-performance flagships like the Galaxy S23 Ultra. These phones offer advanced features and cater to varying preferences and needs.'
        },
        {
            backgroundImage: 'url(https://touchmobiles.in/public/uploads/images/25-06-2024/667ac38bc7fa7.jpeg)',
            title: 'Top Trending Realme Mobiles of March 2024',
            name: 'CROW',
            description: 'Explore the latest Realme phones of March 2024, featuring sleek designs, powerful processors, and impressive camera capabilities. These phones offer exceptional performance and are designed for a seamless mobile experience.'
        },
        {
            backgroundImage: 'url(https://cms-assets.bajajfinserv.in/is/image/bajajfinance/vivo-y35-128-gb-storage-agate-black?scl=1)',
            title: 'Vivo Y35',
            name: 'BUTTERFLY',
            description: 'The Vivo Y35 offers 128 GB of storage and comes in Agate Black. It is designed to provide ample space for apps, photos, and other media while maintaining a sleek and stylish appearance.'
        },
        {
            backgroundImage: 'url(https://rukminim2.flixcart.com/fk-p-ads/750/350/dp-doc/1720087860672-cly73wfk00ndl0q32a0bzrweg-8ee8e9aede2d595625579c0daabe090882f850ff70680e1a3a09e6da29bf110b.jpg?q=90)',
            title: 'Flixcart Promo',
            name: 'OWL',
            description: 'A promotional image from Flixcart showcasing their latest deals and offers on mobile phones.'
        },
        {
            backgroundImage: 'url(https://assets.mspimages.in/gear/wp-content/uploads/2022/06/5G-mobiles-under-Rs-20000-1024x538.png)',
            title: '5G Mobiles Under Rs. 20000',
            name: 'EAGLE',
            description: 'A collection of 5G-enabled mobile phones available for under Rs. 20000, providing advanced connectivity and features at an affordable price.'
        },
        {
            backgroundImage: 'url(https://cms-assets.bajajfinserv.in/is/image/bajajfinance/vivo-y100a-5g-128-gb-storage-pacific-blue?scl=1)',
            title: 'Vivo Y100a',
            name: 'KINGFISHER',
            description: 'The Vivo Y100a 5G comes with 128 GB of storage and is available in Pacific Blue. This phone offers fast internet speeds and ample storage for all your needs.'
        },
        {
            backgroundImage: 'url(https://rukminim2.flixcart.com/fk-p-ads/850/400/dp-doc/1721294338628-clyr27fwk3j7t0q367um353cl-10fc6a762f393b0fa5220e7f5f9b8226b123615bddc862db443e49775a340f10.png?q=90)',
            title: 'Flixcart Ad',
            name: 'PARROT',
            description: 'A promotional image from Flixcart highlighting special deals and discounts on mobile phones and other electronics.'
        },
        {
            backgroundImage: 'url(https://couponswala.com/blog/wp-content/uploads/2022/10/croma-iphone-offer.jpg.webp)',
            title: 'Croma iPhone Offer',
            name: 'HERON',
            description: 'A promotional banner from Croma offering deals on iPhones, showcasing the latest models and discounts available.'
        },
        {
            backgroundImage: 'url(https://www.reliancedigital.in/medias/OnePlus-Nord4-Pre-book-544x306px-CLP.jpg?context=bWFzdGVyfGltYWdlc3w3NjEzNnxpbWFnZS9qcGVnfGltYWdlcy9oNDIvaDJkLzEwMTc0MzE5MTY1NDcwLmpwZ3xmMzJiZjc2NzYxYmRkNjdhZmVhZjk3NThmNTEwOTExNDE2OWJmNTgyZGQwOTY4YWY2NTk4NzA2YjRiNDlhZTAz)',
            title: 'OnePlus Nord4 Pre-book',
            name: 'BUTTERFLY',
            description: 'A promotional image from Reliance Digital for pre-booking the OnePlus Nord4, featuring details on the latest offers and specifications.'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [items.length]);

    return (
        <div className="custom-carousel">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`custom-item ${index === currentIndex ? 'custom-active' : ''}`}
                    style={{ backgroundImage: item.backgroundImage }}
                >
                    <div className="custom-content">
                        <div className="custom-title">{item.title}</div>
                        <div className="custom-name">{item.name}</div>
                        <div className="custom-des">{item.description}</div>
                        <div className="custom-btn">
                            {/* <button>See More</button>
                            <button>Subscribe</button> */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Slider;
