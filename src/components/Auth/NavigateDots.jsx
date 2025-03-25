/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

export default function NavigationDots({ step, setStep, totalSteps, className }) {
  return (
    <div className={`absolute bg-black bottom-5 flex gap-2 ${className}`}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <motion.div
          key={index}
          className={`w-3 h-3 rounded-full cursor-pointer ${
            step === index ? "bg-white scale-125" : "bg-gray-400"
          }`}
          onClick={() => setStep(index)}
          whileHover={{ scale: 1.2 }}
        />
      ))}
    </div>
  );
}
