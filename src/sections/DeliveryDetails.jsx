// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
// eslint-disable-next-line react/prop-types
function DeliveryDetails({ onNext}) {
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onNext({ address, city, postalCode });
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white p-8 shadow-lg rounded-lg w-96">
            <h2 className="text-2xl font-semibold text-center text-gray-700">Delivery Details</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)}
                className="w-full bg-white px-4 py-2 border rounded-lg mt-4 focus:ring-blue-400 focus:outline-none" required />
              <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)}
                className="w-full bg-white px-4 py-2 border rounded-lg mt-4 focus:ring-blue-400 focus:outline-none" required />
              <input type="text" placeholder="Postal Code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)}
                className="w-full bg-white px-4 py-2 border rounded-lg mt-4 focus:ring-blue-400 focus:outline-none" required />
              <button type="submit" className="w-full bg-p5 text-white py-2 rounded-lg mt-4 hover:bg-green-700 transition">Next</button>
            </form>
          </div>
        </div>
      );
}

export default DeliveryDetails