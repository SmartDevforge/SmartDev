/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { auth2 } from "../../assets";

export default function Signup({ next, back }) {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl flex bg-white shadow-lg rounded-lg overflow-hidden">

        {/* Left Side - Signup Form */}
            <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/public/signup-bg.jpg')" }}>
        <img src={auth2} alt="" />
        </div>

            {/* Right Side - Image */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4">Create Account</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input type="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Sign Up</button>
          </form>
          <p className="mt-4 text-sm text-gray-600">
            Already have an account? <button onClick={back} className="text-blue-500">Login</button>
          </p>
        </div>

    
      </div>
    </div>
  );
}