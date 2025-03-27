import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";
import Onboarding from "../components/Auth/Onboard";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import ForgotPassword, { Confirmation } from "../components/Auth/ForgotPassword";

const pages = [Onboarding, Login, Signup, ForgotPassword, Confirmation];

export default function Auth() {
  const [step, setStep] = useState(0);
  const PageComponent = pages[step];

  const handlers = useSwipeable({
    onSwipedLeft: () => setStep((prev) => (prev < pages.length - 1 ? prev + 1 : prev)),
    onSwipedRight: () => setStep((prev) => (prev > 0 ? prev - 1 : prev)),
    trackMouse: true,
  });

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") setStep((prev) => (prev < pages.length - 1 ? prev + 1 : prev));
    if (e.key === "ArrowLeft") setStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div {...handlers} tabIndex={0} onKeyDown={handleKeyDown}>
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full flex items-center justify-center"
        >
          <PageComponent next={() => setStep(step + 1)} back={() => setStep(step - 1)} fpasscode={() => setStep(3)} Login={() => setStep(1)} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
