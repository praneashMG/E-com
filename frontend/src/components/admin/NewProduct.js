

import { Fragment, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { createNewProduct } from "../../actions/productActions";
import { clearError, clearProductCreated } from "../../slices/productSlice";
import { toast } from "react-toastify";

export default function NewProduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [stock, setStock] = useState(0);
    const [seller, setSeller] = useState("");
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState(""); 
    const [selectedPhones, setSelectedPhones] = useState([]); 

    const { loading, isProductCreated, error } = useSelector(state => state.productState);

    const categories = [
        'Electronics',
        'Mobile Phones',
        'Laptops',
        'Accessories',
        'Headphones',
        'Food',
        'Books',
        'Clothes/Shoes',
        'Beauty/Health',
        'Sports',
        'Outdoor',
        'Home'
    ];
    const brands = {
                "Mobile Phones": [
                    { name: "Samsung", image: "https://via.placeholder.com/150/000000/FFFFFF?text=Samsung" },
                    { name: "Apple", image: "https://via.placeholder.com/150/CCCCCC/000000?text=Apple" },
                    { name: "OnePlus", image: "https://via.placeholder.com/150/FF5733/FFFFFF?text=OnePlus" },
                    { name: "Google", image: "https://via.placeholder.com/150/4285F4/FFFFFF?text=Google" },
                    { name: "Nokia", image: "https://via.placeholder.com/150/0033CC/FFFFFF?text=Nokia" },
                    { name: "Sony", image: "https://via.placeholder.com/150/000000/FFFFFF?text=Sony" },
                    { name: "LG", image: "https://via.placeholder.com/150/00CC99/FFFFFF?text=LG" },
                    { name: "Motorola", image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Motorola" },
                    { name: "Huawei", image: "https://via.placeholder.com/150/FFCC00/FFFFFF?text=Huawei" },
                    { name: "Xiaomi", image: "https://via.placeholder.com/150/FF6600/FFFFFF?text=Xiaomi" },
                    { name: "Oppo", image: "https://via.placeholder.com/150/00FF00/FFFFFF?text=Oppo" },
                    { name: "Vivo", image: "https://via.placeholder.com/150/0066FF/FFFFFF?text=Vivo" },
                    { name: "Realme", image: "https://via.placeholder.com/150/FFFF00/FFFFFF?text=Realme" },
                    { name: "Asus", image: "https://via.placeholder.com/150/800080/FFFFFF?text=Asus" },
                    { name: "HTC", image: "https://via.placeholder.com/150/008080/FFFFFF?text=HTC" },
                    { name: "Lenovo", image: "https://via.placeholder.com/150/FF00FF/FFFFFF?text=Lenovo" },
                    { name: "ZTE", image: "https://via.placeholder.com/150/800000/FFFFFF?text=ZTE" },
                    { name: "Micromax", image: "https://via.placeholder.com/150/808000/FFFFFF?text=Micromax" },
                    { name: "Alcatel", image: "https://via.placeholder.com/150/00FFFF/FFFFFF?text=Alcatel" },
                    { name: "BlackBerry", image: "https://via.placeholder.com/150/000000/FFFFFF?text=BlackBerry" }
                ],
                "Laptops": [
                    { name: "HP", image: "https://via.placeholder.com/150/000000/FFFFFF?text=HP" },
                    { name: "Dell", image: "https://via.placeholder.com/150/CCCCCC/000000?text=Dell" },
                    { name: "Apple", image: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Apple" },
                    { name: "Lenovo", image: "https://via.placeholder.com/150/4285F4/FFFFFF?text=Lenovo" },
                    { name: "Asus", image: "https://via.placeholder.com/150/0033CC/FFFFFF?text=Asus" },
                    { name: "Acer", image: "https://via.placeholder.com/150/000000/FFFFFF?text=Acer" },
                    { name: "Microsoft", image: "https://via.placeholder.com/150/00CC99/FFFFFF?text=Microsoft" },
                    { name: "Samsung", image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Samsung" },
                    { name: "LG", image: "https://via.placeholder.com/150/FFCC00/FFFFFF?text=LG" },
                    { name: "MSI", image: "https://via.placeholder.com/150/FF6600/FFFFFF?text=MSI" },
                    { name: "Razer", image: "https://via.placeholder.com/150/00FF00/FFFFFF?text=Razer" },
                    { name: "Toshiba", image: "https://via.placeholder.com/150/0066FF/FFFFFF?text=Toshiba" },
                    { name: "Huawei", image: "https://via.placeholder.com/150/FFFF00/FFFFFF?text=Huawei" },
                    { name: "Google", image: "https://via.placeholder.com/150/800080/FFFFFF?text=Google" },
                    { name: "Alienware", image: "https://via.placeholder.com/150/008080/FFFFFF?text=Alienware" },
                    { name: "Gigabyte", image: "https://via.placeholder.com/150/FF00FF/FFFFFF?text=Gigabyte" },
                    { name: "Xiaomi", image: "https://via.placeholder.com/150/800000/FFFFFF?text=Xiaomi" },
                    { name: "Vaio", image: "https://via.placeholder.com/150/808000/FFFFFF?text=Vaio" },
                    { name: "Fujitsu", image: "https://via.placeholder.com/150/00FFFF/FFFFFF?text=Fujitsu" },
                    { name: "Chuwi", image: "https://via.placeholder.com/150/000000/FFFFFF?text=Chuwi" }
                ],
                "Accessories": [
                    { name: "Sony", image: "https://via.placeholder.com/150/000000/FFFFFF?text=Sony" },
                    { name: "Bose", image: "https://via.placeholder.com/150/CCCCCC/000000?text=Bose" },
                    { name: "JBL", image: "https://via.placeholder.com/150/FF5733/FFFFFF?text=JBL" },
                    { name: "Beats", image: "https://via.placeholder.com/150/4285F4/FFFFFF?text=Beats" },
                    { name: "Sennheiser", image: "https://via.placeholder.com/150/0033CC/FFFFFF?text=Sennheiser" },
                    { name: "Logitech", image: "https://via.placeholder.com/150/000000/FFFFFF?text=Logitech" },
                    { name: "Anker", image: "https://via.placeholder.com/150/00CC99/FFFFFF?text=Anker" },
                    { name: "Razer", image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Razer" },
                    { name: "Corsair", image: "https://via.placeholder.com/150/FFCC00/FFFFFF?text=Corsair" },
                    { name: "SteelSeries", image: "https://via.placeholder.com/150/FF6600/FFFFFF?text=SteelSeries" },
                    { name: "HyperX", image: "https://via.placeholder.com/150/00FF00/FFFFFF?text=HyperX" },
                    { name: "Astro", image: "https://via.placeholder.com/150/0066FF/FFFFFF?text=Astro" },
                    { name: "Plantronics", image: "https://via.placeholder.com/150/FFFF00/FFFFFF?text=Plantronics" },
                    { name: "Creative", image: "https://via.placeholder.com/150/800080/FFFFFF?text=Creative" },
                    { name: "Polk Audio", image: "https://via.placeholder.com/150/008080/FFFFFF?text=Polk+Audio" },
                    { name: "Samsung", image: "https://via.placeholder.com/150/FF00FF/FFFFFF?text=Samsung" },
                    { name: "LG", image: "https://via.placeholder.com/150/800000/FFFFFF?text=LG" },
                    { name: "Microsoft", image: "https://via.placeholder.com/150/808000/FFFFFF?text=Microsoft" },
                    { name: "Apple", image: "https://via.placeholder.com/150/00FFFF/FFFFFF?text=Apple" },
                    { name: "Google", image: "https://via.placeholder.com/150/000000/FFFFFF?text=Google" }
                ],
                "Headphones": [
                    { name: "Sony", image: "https://via.placeholder.com/150/000000/FFFFFF?text=Sony" },
                    { name: "Bose", image: "https://via.placeholder.com/150/CCCCCC/000000?text=Bose" },
                    { name: "JBL", image: "https://via.placeholder.com/150/FF5733/FFFFFF?text=JBL" },
                    { name: "Beats", image: "https://via.placeholder.com/150/4285F4/FFFFFF?text=Beats" },
                    { name: "Sennheiser", image: "https://via.placeholder.com/150/0033CC/FFFFFF?text=Sennheiser" },
                    { name: "Logitech", image: "https://via.placeholder.com/150/000000/FFFFFF?text=Logitech" },
                    { name: "Anker", image: "https://via.placeholder.com/150/00CC99/FFFFFF?text=Anker" },
                    { name: "Razer", image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Razer" },
                    { name: "Corsair", image: "https://via.placeholder.com/150/FFCC00/FFFFFF?text=Corsair" },
                    { name: "SteelSeries", image: "https://via.placeholder.com/150/FF6600/FFFFFF?text=SteelSeries" },
                    { name: "HyperX", image: "https://via.placeholder.com/150/00FF00/FFFFFF?text=HyperX" },
                    { name: "Astro", image: "https://via.placeholder.com/150/0066FF/FFFFFF?text=Astro" },
                    { name: "Plantronics", image: "https://via.placeholder.com/150/FFFF00/FFFFFF?text=Plantronics" },
                    { name: "Creative", image: "https://via.placeholder.com/150/800080/FFFFFF?text=Creative" },
                    { name: "Polk Audio", image: "https://via.placeholder.com/150/008080/FFFFFF?text=Polk+Audio" },
                    { name: "Samsung", image: "https://via.placeholder.com/150/FF00FF/FFFFFF?text=Samsung" },
                    { name: "LG", image: "https://via.placeholder.com/150/800000/FFFFFF?text=LG" },
                    { name: "Microsoft", image: "https://via.placeholder.com/150/808000/FFFFFF?text=Microsoft" },
                    { name: "Apple", image: "https://via.placeholder.com/150/00FFFF/FFFFFF?text=Apple" },
                    { name: "Google", image: "https://via.placeholder.com/150/000000/FFFFFF?text=Google" }
                ]
            };

    const phonesByBrand = {
        "Samsung": ["Galaxy S21", "Galaxy S21+", "Galaxy S21 Ultra","SAMSUNG M32 ","SAMSUNG Galaxy M34","SAMSUNG Galaxy S24 Ultra 5G","SAMSUNG Galaxy S23 5G"],
        "Apple": ["iPhone 12", "iPhone 12 Mini", "iPhone 12 Pro", "iPhone 12 Pro Max"],
        // ... other brands and phones
    };

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isProductCreated) {
            toast.success("Product created successfully", {
                position: toast.POSITION.BOTTOM_CENTER
            });
            dispatch(clearProductCreated());
            navigate("/admin/products");
        }

        if (error) {
            toast.error(error, {
                position: toast.POSITION.BOTTOM_CENTER
            });
            dispatch(clearError());
        }
    }, [dispatch, error, isProductCreated, navigate]);

    const handleProductImages = (e) => {
        const files = Array.from(e.target.files);

        setImagesPreview([]);
        setImages([]);

        files.forEach(file => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview(oldArray => [...oldArray, reader.result]);
                    setImages(files);
                }
            };
            console.log(files);

            reader.readAsDataURL(file);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set("name", name);
        formData.set("price", price);
        formData.set("description", description);
        formData.set("category", category);
        formData.set("stock", stock);
        formData.set("seller", seller);
        formData.set("brand", selectedBrand);

        images.forEach(image => {
            formData.append("images", image);
        });

        dispatch(createNewProduct(formData));
    };

    const onBrandChange = (e) => {
        const selected = e.target.value;
        setSelectedBrand(selected);
        setSelectedPhones(phonesByBrand[selected] || []);
    };

    return (
        <div className="row">
            <div className="col-12 col-md-2">
                <Sidebar />
            </div>

            <div className="col-12 col-md-10">
                <Fragment>
                    <div className="wrapper my-5">
                        <form className="shadow-lg" onSubmit={handleSubmit} encType="multipart/form-data">
                            <h1 className="mb-4">New Product</h1>

                            <div className="form-group">
                                <label htmlFor="name_field">Name</label>
                                <input
                                    type="text"
                                    id="name_field"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="price_field">Price</label>
                                <input
                                    type="text"
                                    id="price_field"
                                    className="form-control"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="description_field">Description</label>
                                <textarea
                                    className="form-control"
                                    id="description_field"
                                    rows="8"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="category_field">Category</label>
                                <select
                                    className="form-control"
                                    id="category_field"
                                    value={category}
                                    onChange={(e) => {
                                        setCategory(e.target.value);
                                        setSelectedBrands(brands[e.target.value] || []);
                                    }}
                                >
                                    {categories.map(category => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {selectedBrands.length > 0 && (
                                <div className="form-group">
                                    <label htmlFor="brand_field">Brand</label>
                                    <select
                                        className="form-control"
                                        id="brand_field"
                                        value={selectedBrand}
                                        onChange={onBrandChange}
                                    >
                                        <option value="">Select Brand</option>
                                        {selectedBrands.map(brand => (
                                            <option key={brand.name} value={brand.name}>
                                                {brand.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            {selectedPhones.length > 0 && (
                                <div className="form-group">
                                    <label htmlFor="phone_field">Phones</label>
                                    <select
                                        className="form-control"
                                        id="phone_field"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    >
                                        <option value="">Select Phone</option>
                                        {selectedPhones.map(phone => (
                                            <option key={phone} value={phone}>
                                                {phone}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            <div className="form-group">
                                <label htmlFor="stock_field">Stock</label>
                                <input
                                    type="number"
                                    id="stock_field"
                                    className="form-control"
                                    value={stock}
                                    onChange={(e) => setStock(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="seller_field">Seller Name</label>
                                <input
                                    type="text"
                                    id="seller_field"
                                    className="form-control"
                                    value={seller}
                                    onChange={(e) => setSeller(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label>Images</label>
                                <div className="custom-file">
                                    <input
                                        type="file"
                                        name="product_images"
                                        className="custom-file-input"
                                        id="customFile"
                                        onChange={handleProductImages}
                                        multiple
                                    />
                                    <label className="custom-file-label" htmlFor="customFile">
                                        Choose Images
                                    </label>
                                </div>

                                {imagesPreview.map(img => (
                                    <img
                                        src={img}
                                        key={img}
                                        alt="Images Preview"
                                        className="mt-3 mr-2"
                                        width="55"
                                        height="52"
                                    />
                                ))}
                            </div>

                            <button
                                id="login_button"
                                type="submit"
                                className="btn btn-block py-3"
                                disabled={loading ? true : false}
                            >
                                CREATE
                            </button>
                        </form>
                    </div>
                </Fragment>
            </div>
        </div>
    );
}
