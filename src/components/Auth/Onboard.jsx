/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { auth1 } from "../../assets";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

export default function Onboarding({ next }) {

  return (
    <div className="" >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6"
      >
        <div className="flex justify-center items-center">
          <div className=" w-[100%] h-[95dvh]  rounded-[20px] overflow-hidden flex items-center justify-center">
            <img src={auth1} alt="" className="rounded-[20px]" />
            {/* <button onClick={next} className="text-blue-500">Sign Up</button> */}
          </div>
          <div className="text-p5 w-[100%]  h-[95dvh] flex flex-col items-center justify-center">
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
