/* eslint-disable react/prop-types */
import { auth3 } from "../../assets";

export default function Login({ next, fpasscode }) {
  return (
    <div className="h-screen w-full flex items-center justify-center ">
      <div className="   w-[100%] h-[95dvh]   max-w-[80%] flex bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side - Login Form */}
        <div className="  w-[100%] h-[95dvh]  max-md:hidden">
          <img src={auth3} alt="" />
        </div>

        {/* Right Side - Image */}
        <div className="  w-[100%] p-8 max-md:w-full flex justify-center items-start  flex-col">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form className="w-full">
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input type="email" placeholder="example@gmail.com" className="bg-tertiary w-full py-2 px-6 placeholder:text-secondary bg-white text-p2 rounded-lg outline-none border-[1px] border-p4 font-medium" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input type="password" placeholder="********" className="bg-tertiary w-full py-2 px-6 placeholder:text-secondary bg-white text-p2 rounded-lg outline-none border-[1px] border-p4 font-medium" />
            </div>
            <button type="submit" className="w-full bg-p2 text-white py-2 rounded-lg hover:bg-p5">Login</button>
          </form>
          <p className="mt-4 text-sm text-gray-600">Don&apos;t have an account?
            <button onClick={next} className="text-p5">Sign Up</button>
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Forgottn password?
              <button onClick={fpasscode} className="text-p5"> Click to reset </button>
          </p>
        </div>
      </div>
    </div>
  );
}
