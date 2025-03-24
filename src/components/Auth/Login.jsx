/* eslint-disable react/prop-types */
import {  auth3 } from "../../assets";

export default function Login({ next, back, fpasscode }) {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl flex bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side - Login Form */}
        <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url()" }}>
          <img src={auth3} alt="" />
        </div>

        {/* Right Side - Image */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input type="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Login</button>
          </form>
          <p className="mt-4 text-sm text-gray-600">Don&apos;t have an account?
             <button onClick={next} className="text-blue-500">Sign Up</button>
          </p>
          <p className="mt-2 text-sm text-gray-600">
            <button onClick={back} className="text-gray-500">Back</button>
            <br />
            <button onClick={fpasscode} className="text-gray-500">text</button>
          </p>
        </div>
      </div>
    </div>
  );
}
