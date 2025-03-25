/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { auth2 } from "../../assets";

export default function Signup({ next, back }) {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="   w-[100%] h-[95dvh]   max-w-[80%] flex bg-white shadow-lg rounded-lg overflow-hidden">

        {/* Left Side - Signup Form */}
        <div className="w-full bg-cover bg-center max-md:hidden">
          <img src={auth2} alt="" />
        </div>

        {/* Right Side - Image */}
        <div className="w-full p-8 max-md:w-full flex justify-center items-start  flex-col">
          <h2 className="text-2xl font-bold mb-4">Create Account</h2>
          <form className="w-full">
            <div className="mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input type="text" placeholder="John Doe" className="bg-tertiary w-full py-2 px-6 placeholder:text-secondary bg-white text-p2 rounded-lg outline-none border-[1px] border-p4 font-medium"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input type="email" placeholder="examples@gmail.com" className="bg-tertiary w-full py-2 px-6 placeholder:text-secondary bg-white text-p2 rounded-lg outline-none border-[1px] border-p4 font-medium"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input type="password" placeholder="*******" className="bg-tertiary w-full py-2 px-6 placeholder:text-secondary bg-white text-p2 rounded-lg outline-none border-[1px] border-p4 font-medium"
              />
            </div>
            <button type="submit" className="w-full bg-p2 text-white py-2 rounded-lg hover:bg-p5">Sign Up</button>
          </form>
          <p className="mt-4 text-sm text-gray-600">
            Already have an account? <button onClick={back} className="text-p5">Login</button>
          </p>
        </div>


      </div>
    </div>
  );
}