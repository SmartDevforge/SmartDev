import { useState } from "react";
import { Link } from "react-router-dom";
import { FormatCurrency } from "../constants";
import { useCart } from "../constants/Context";
import { CartIcon } from "../constants/Icons";

// eslint-disable-next-line react/prop-types
const ProductCard = ({ id, name, price, cover, description, data, qty,instock }) => {
    const { addToCart } = useCart();
    const [showNotification, setShowNotification] = useState(false);

    const handleAddToCart = () => {
        addToCart({ id, name, price, cover, description, data });

        // Show notification
        setShowNotification(true);

        // Hide after 2 seconds
        setTimeout(() => {
            setShowNotification(false);
        }, 2000);
    };

    return (
        <div className="bg-white rounded-lg width-full w-[250px] fullWidthSm shadow-md p-4 transition duration-300 hover:shadow-lg relative">
            <Link to={`/product/${id}`} className="block">
                <img src={cover} alt={name} className="w-full h-48 object-contain rounded-md" />
            </Link>
            <div>
                <div className="flex items-start flex-col justify-between mt-3">
                    <h3 className="text-[14px] font-[400] font-semibold text-p1">{name}</h3>

                    <div className="flex items-center gap-2 mt-2">
                    <p className="text-[#AEAEB2] text-[15px]">{qty} </p>
                    <span className="w-[5px] h-[5px]  bg-[#AEAEB2] rounded-full ml-2"></span>
                    <p className={`${instock?"text-green-600" : "text-red-500"} capitalize`}> {instock? "in stock" :"out of stock"}</p>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <p className="text-lg capitalize font-bold text-s3">{FormatCurrency(price)}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer text-s3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>

                </div>


                <button
                    onClick={handleAddToCart}
                    className="mt-3 flex border border-p5 items-center justify-center gap-2 w-[100%] bg-white text-p5 py-1 rounded-lg text-sm font-medium hover:bg-p5 hover:text-white transition"
                >
                    <CartIcon className="size-3 text-s1" />
                    <span>Add to cart</span>
                </button>
            </div>

            {/* Custom Notification */}
            {showNotification && (
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-p5 text-white text-sm px-3 py-1 rounded-md shadow-lg transition-all duration-300">
                    ✅ Added to Cart!
                </div>
            )}
        </div>
    );
};

export default ProductCard;
