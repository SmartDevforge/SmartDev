import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const Preferences = ({ onFinish }) => {
      const [preference, setPreference] = useState("");
    
      const handleSubmit = (e) => {
        e.preventDefault();
        onFinish(preference);
      };
    
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white p-8 shadow-lg rounded-lg w-96">
            <h2 className="text-2xl font-semibold text-center text-gray-700">Shopping Preferences</h2>
            <form onSubmit={handleSubmit}>
            <input type="number" name="number" placeholder="Phone" value={preference} onChange={(e) => setPreference(e.target.value)}
                className="w-full bg-white px-4 py-2 border rounded-lg mt-4 focus:ring-blue-400 focus:outline-none" required />
              <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg mt-4 hover:bg-green-600 transition">Finish</button>
            </form>
          </div>
        </div>
      );
    };