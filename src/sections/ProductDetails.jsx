import { useParams } from "react-router-dom";
import { useCart } from "../constants/Context";
import { FormatCurrency, product } from "../constants";
import { CartIcon } from "../constants/Icons";

const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const selectedProduct = product.find((item) => item.id === Number(id));

    if (!selectedProduct) {
        return <p className="text-center text-red-400">Product not found!</p>;
    }

    return (
        <div className="container  flex justify-center items-center h-[84dvh] max-md:mt-[150px]   mt-24 mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Product Image */}
                <img
                    src={selectedProduct.cover}
                    alt={selectedProduct.name}
                    className="w-full h-96 object-cover rounded-lg bg-red-300 max-md:mt-[15rem] shadow-md"
                />

                {/* Product Info */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl  text-p1 font-[600]">{selectedProduct.name}</h1>
                    <div className="flex items-center gap-2 mt-2">
                    <p className="text-[#AEAEB2] text-[15px]">{selectedProduct.qty} </p>
                    <span className="w-[10px] h-[10px]  bg-[#AEAEB2] rounded-full ml-2"></span>
                    <p className={`${selectedProduct.instock?"text-green-600" : "text-red-500"} capitalize`}> {selectedProduct.instock? "in stock" :"out of stock"}</p>
                    </div>
                    <p className="text-[16px] text-p2  mt-2">{selectedProduct.desc}</p>
                    <p className="text-lg text-s3 mt-2 font-bold">{FormatCurrency(selectedProduct.price)}</p>
                    {/* Add to Cart Button */}
                    <button
                        onClick={() => addToCart(selectedProduct)}
                        className="mt-3 w-[200px] flex border border-white items-center justify-center gap-2 bg-p5 text-white py-1 rounded-lg text-sm font-medium hover:bg-p5 hover:text-white transition"
                        >
                        <CartIcon className="size-3 text-s1" />
                        Add to Cart
                    </button>

                </div>
            </div>
        </div>
    );
};

export default ProductDetails;