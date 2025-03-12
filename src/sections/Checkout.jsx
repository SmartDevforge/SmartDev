import { useState, useEffect, useRef } from 'react';
// import { useReactToPrint } from 'react-to-print';
import { FormatCurrency, WebsiteName } from '../constants';

export const Checkout = () => {
    const [cart, setCart] = useState([]);
    const receiptRef = useRef();


    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);
    console.log(cart);
    return (
        <div className="flex flex-col md:flex-row justify-between p-5 gap-5">
            {/* Order Summary */}
            <div className="w-full md:w-1/2 bg-white p-5 rounded-lg shadow-md">
                <h2 className="text-lg text-black-100 font-semibold mb-4">Order Summary</h2>
                {cart.length > 0 ? cart.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 border-b pb-2 mb-2">
                        <img src={item.cover} alt={item.name} className="w-16 h-16 rounded" />
                        <div>
                            <h4 className="text-md text-blue-400 font-medium">{item.name}</h4>
                            <p className="text-sm font-bold text-black">NGN {item.price}</p>
                        </div>
                    </div>
                )) : <p>No items in cart</p>}
                {cart.length > 0 && (
                    <div className="font-bold text-p5 mt-3">
                        Total Amount: {FormatCurrency(cart.reduce((total, item) => total + item.price, 0) / 100 * 100)}
                    </div>
                )}
                <p className="mt-4 w-[150px] bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded cursor-pointer">Pay Now</p>
            </div>
            {/* Receipt */}
            <div className="hidden" ref={receiptRef}>
                <div className="w-80 p-5 bg-white border-2 border-dashed text-center">
                    <h2 className="text-lg font-semibold mb-3">Receipt</h2>
                    <div className="flex items-center justify-between bg-black-100 rounded text-white p-2">
                        <img src="/images/xora.svg" width={115} height={55} alt="logo" />
                        <span>{WebsiteName}</span>
                    </div>
                    <div className="mt-4">
                        <h3 className="underline">Buyer Details</h3>
                        <p>Name: userName</p>
                        <p>Address: userLocation</p>
                        <p>Phone: usweNamber</p>
                    </div>
                    {cart.map((item, index) => (
                        <div key={index} className="mt-3 p-2 bg-green-200 text-black rounded">
                            <h4>{item.name}</h4>
                            <p>Amount: NGN {item.price}</p>
                        </div>
                    ))}
                    <p className="font-bold mt-3">Total: {FormatCurrency(cart.reduce((total, item) => total + item.price, 0) * 100)}</p>
                    <p className="text-gray-500 text-sm mt-3">{new Date().toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};
