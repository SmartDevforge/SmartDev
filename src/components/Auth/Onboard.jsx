/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { auth1 } from "../../assets";

export default function Onboarding({ next }) {

  return (
    <div className="" >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6"
      >
        <div className=" relative flex justify-center items-center">
          <div className="   w-[100%] h-[95dvh]  rounded-[20px] relative overflow-hidden flex items-center justify-center">
            <div className=" relative ">
              <span className="absolute top-[10px] right-0 p-[10px] text-p5 underline text-[18px]" onClick={next}>skip</span>
              <img src={auth1} alt="" className="rounded-[20px]" />
              <div className="absolute bottom-[50px]">
                <p className="hidden max-md:block text-lg text-white text-center w-[90%] mt-2">Find everything you need, from farm-fresh veggies to authentic pomo </p>
                <div className=" hidden max-md:flex items-center justify-center gap-3 mt-7">
                  <div className="w-[100px] bg-white h-[8px] rounded-14"></div>
                  <div className="w-[100px] bg-[#D9D9D999] h-[8px] rounded-14"></div>
                  <div className="w-[100px] bg-[#D9D9D999] h-[8px] rounded-14"></div>
                </div>
              </div>
            </div>

            {/* <button onClick={next} className="text-blue-500">Sign Up</button> */}
          </div>
          <div className="text-p5 w-[100%] max-md:hidden h-[95dvh] flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-p5">Welcome to Teefey</h1>
            <p className="text-lg text-p5 text-center w-[90%] mt-2">Find everything you need, from farm-fresh veggies to authentic pomo and more—delivered with quality and care.</p>
            <button
              onClick={next}
              className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-200 transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
