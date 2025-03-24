// /* eslint-disable react/prop-types */
// export default function NavigationDots({ step, setStep, totalSteps }) {
//     return (
//       <div className="absolute bottom-6 flex gap-2">
//         {Array.from({ length: totalSteps }).map((_, index) => (
//           <button
//             key={index}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               step === index ? "bg-blue-500 w-4 h-4" : "bg-gray-400"
//             }`}
//             onClick={() => setStep(index)}
//           />
//         ))}
//       </div>
//     );
//   }
  

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
