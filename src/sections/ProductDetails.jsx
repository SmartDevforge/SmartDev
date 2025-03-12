import {  useParams } from "react-router-dom";
import { useCart } from "../constants/Context";
import { FormatCurrency, product } from "../constants";

const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const selectedProduct = product.find((item) => item.id === Number(id));

    if (!selectedProduct) {
        return <p className="text-center text-red-500">Product not found!</p>;
    }

    return (
        <div className="container  mt-24 mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Product Image */}
                <img
                    src={selectedProduct.cover}
                    alt={selectedProduct.name}
                    className="w-full h-96 object-cover rounded-lg shadow-md"
                />

                {/* Product Info */}
                <div>
                    <h1 className="text-3xl font-bold text-white-900">{selectedProduct.name}</h1>
                    <p className="text-lg text-gray-700 mt-2">{selectedProduct.desc}</p>
                    <p className="text-lg text-white font-bold mt-2">{FormatCurrency(selectedProduct.price)}</p>

                 

                    {/* Add to Cart Button */}
                    <button
                        onClick={() => addToCart(selectedProduct)}
                        className="mt-6 bg-p5 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-p3 hover:text-p1 transition"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;