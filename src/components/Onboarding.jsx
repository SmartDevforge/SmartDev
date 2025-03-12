import { useState } from "react";
import { Signup } from "./Signup";
import DeliveryDetails from "../sections/DeliveryDetails";
import { Preferences } from "../sections/Prefrences";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate()

  const handleNext = (data) => {
    setUserData({ ...userData, ...data });
    setStep(step + 1);
  };

  const handleFinish = async (preference) => {
   const Phone =  preference
   try {
    setUserData((prevData) => {
      const updatedData = { ...prevData, Phone };
      console.log("Final User Data:", updatedData);
      navigate("/");
      return updatedData;
      // window.location.replace("/");
    });
   } catch (error) {
    console.log("Error:", error);
   }
  
  };

  return (
    <div>
      {step === 1 && <Signup onNext={handleNext} />}
      {step === 2 && <DeliveryDetails onNext={handleNext} />}
      {step === 3 && <Preferences onFinish={handleFinish} />}
    </div>
  );
};

export default Onboarding;