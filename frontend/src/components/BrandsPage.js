
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MetaData from "./layouts/MetaData";
import Loader from "./layouts/Loader";

const BrandsPage = ({ category }) => {
    const [brands, setBrands] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const { loading, error } = useSelector((state) => state.productsState);

    useEffect(() => {
        fetchBrandsByCategory(category);
    }, [category]);

    const fetchBrandsByCategory = (category) => {
        let fetchedBrands = [];
        switch (category) {
            case "Mobile Phones":
                fetchedBrands = [
                    { name: "Samsung", image: "https://d1lss44hh2trtw.cloudfront.net/assets/article/2023/01/03/watch-the-samsung-ces-2023-livestream-here_feature.jpg" },
                    { name: "Apple", image: "https://www.stuff.tv/wp-content/uploads/sites/2/2021/08/apple-logo_1.jpg" },
                    { name: "Vivo", image: "https://img.etb2bimg.com/files/cp/int_1669620929.png" },
                    { name: "Oppo", image: "https://i.pinimg.com/originals/50/f3/9b/50f39b9fb8c3f73f03fb71deb8ea600c.jpg" },
                    { name: "Xiaomi", image: "https://www.tablette-chinoise.net/wp-content/uploads/2016/09/Breve_Xiaomi_mi5s_03.jpg" },
                    { name: "Huawei", image: "https://i.pinimg.com/736x/a4/bc/db/a4bcdb0e26733c36f63bcf0d863065f5.jpg" },
                    { name: "OnePlus", image: "https://www.androidauthority.com/wp-content/uploads/2020/03/OnePlus-Branding-Change-2020-1.jpg" },
                    { name: "Google", image: "https://wallpapercave.com/wp/B3Iuq9I.jpg" },
                    { name: "Sony", image: "https://assets.gadgets360cdn.com/pricee/assets/brand/og-sony-logo.png" },
                    { name: "Asus", image: "https://pc-tablet.com/wp-content/uploads/2021/06/asus-logo.jpg" },
                    { name: "Honor", image: "https://pccircle.com/wp-content/uploads/2023/12/Honor-Logo.png" },
                    
                    { name: "Realme", image: "https://mms.img.susercontent.com/ph-11134216-7r98t-lsi44pmkcbude6" }
                   
                ];
                break;
            case "Laptops":
                fetchedBrands = [
                    { name: "HP", image: "https://brandcentral.hp.com/content/dam/sites/brand-central/elem-logo/images/Logo_1_do.jpeg" },
                    { name: "Dell", image: "https://i3.wp.com/www.seekpng.com/png/full/5-50016_dell-icon-free-download-and-vector-png-dell.png?ssl=1" },
                    { name: "Lenovo", image: "https://static.vecteezy.com/system/resources/previews/020/927/282/original/lenovo-logo-brand-phone-symbol-name-black-design-china-mobile-illustration-free-vector.jpg" },
                    { name: "Apple", image: "https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png" },
                    { name: "Acer", image: "https://cokhidongquang.com/wp-content/uploads/2023/05/Acer-Logo-PNG-2.png" },
                    { name: "Asus", image: "https://i.pinimg.com/736x/dc/14/7a/dc147a75b3bd78858a4cbade289f5c4f.jpg" },
                    { name: "MSI", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-er6KbYvevelOB6Ag0O9Q1-Kz7ML1rjd5yw&s" },
                    { name: "Samsung", image: "https://pbs.twimg.com/profile_images/1135846115457167362/4oaGt14G_400x400.jpg" },
                    { name: "Microsoft", image: "https://i.pinimg.com/736x/91/92/1c/91921cec4f8a8cbe3d09e596e0659d81.jpg" },
                    { name: "Huawei", image: "https://i.pinimg.com/736x/a4/bc/db/a4bcdb0e26733c36f63bcf0d863065f5.jpg" },
                    { name: "Razer", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4D_EB2wgWi0nVzbv-fkGn2d7EoU-8XC-dZw&s" },
                    { name: "Google", image: "https://assets.teenvogue.com/photos/57e15130046b3a2e2a7365fe/16:9/w_2560%2Cc_limit/google-phone.jpg" },
                    { name: "LG", image: "https://www.lg.com/content/dam/lge/global/our-brand/src/mocks/bs0002/brand-elements-logo-primary-d.svg" },
                    { name: "Fujitsu", image: "https://discovertemplate.com/wp-content/uploads/2024/02/Fujitsu.jpg" },
                    { name: "Sony", image: "https://logowik.com/content/uploads/images/305_sony.jpg" },
                    { name: "Toshiba", image: "https://static.vecteezy.com/system/resources/previews/021/496/381/original/toshiba-logo-brand-computer-symbol-white-design-french-laptop-illustration-with-black-background-free-vector.jpg" },
                    { name: "Gateway", image: "https://logowik.com/content/uploads/images/gateway-20022293.logowik.com.webp" },
                    { name: "Panasonic", image: "https://static.vecteezy.com/system/resources/previews/020/927/542/original/panasonic-brand-logo-phone-symbol-blue-design-japan-mobile-illustration-with-black-background-free-vector.jpg" },
                    { name: "Sharp", image: "https://cdn.dribbble.com/users/874996/screenshots/4273283/dribbble_1x.png" },
                    { name: "Compal", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuBN36a_7ftX_O3A_AJxlZfIS-ptnu0hxwdw&s" }
                ];
                break;
            case "Watches":
                fetchedBrands = [
                    { name: "Rolex", image: "https://cdn.worldvectorlogo.com/logos/rolex.svg" },
                    { name: "Omega", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC6W1731EzorghFc3xS1iz1mptUitE1X1dUg&s" },
                    { name: "Casio", image: "https://cdn.worldvectorlogo.com/logos/casio-1121.svg" },
                    { name: "SONATA", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFvc_DYorRDJN5IVN0Q00gDitTwYxjyQWJQw&s" },
                    { name: "Timex", image: "https://www.therevolverclub.com/cdn/shop/articles/4_520x500_e3247e3b-523c-4625-9344-d278980e8d19.jpg?v=1684936512&width=1200" },
                    { name: "Titan", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPPIu7UMTpuUls3HDJaJaVshQtqpN9S9k80g&s" },
                    { name: "Hublot", image: "https://1000logos.net/wp-content/uploads/2018/10/Hublot-emblem.jpg" },
                    { name: "Panerai", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Officine_Panerai_logo.svg/1200px-Officine_Panerai_logo.svg.png" },
                    { name: "IWC", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/IWC_logo.svg/1200px-IWC_logo.svg.png" },
                    { name: "Tag Heuer", image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/TAG_Heuer_Logo.svg/1200px-TAG_Heuer_Logo.svg.png" },
                    { name: "Patek Philippe", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Patek_Philippe_logo.svg/1200px-Patek_Philippe_logo.svg.png" },
                    { name: "Seiko", image: "https://logos-world.net/wp-content/uploads/2021/04/Seiko-Logo.png" }
                ];
                break;
            default:
                fetchedBrands = [];
                break;
        }
        setBrands(fetchedBrands);
    };

    const displayedBrands = showAll ? brands : brands.slice(0, 4);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <MetaData title={`${category} Brands`} />
            <div className="brands-container">
                <h1 className="brands-title">{category} Brands</h1>
                <div className="brands-grid">
                    {displayedBrands.map((brand, index) => (
                        <div key={index} className="brand-card">
                            <Link to={`/brand/${brand.name}?category=${category}`}>
                                <img src={brand.image} alt={brand.name} className="brand-image" />
                                <h2 className="brand-name">{brand.name}</h2>
                            </Link>
                        </div>
                    ))}
                </div>
                {!showAll && brands.length > 4 && (
                    <button className="view-all-button" onClick={() => setShowAll(true)}>View All</button>
                )}
            </div>
        </>
    );
};

export default BrandsPage;
