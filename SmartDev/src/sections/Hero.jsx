// import { ArrowRight } from "lucide-react";
// import Button from "../components/Button.jsx";
import { Link } from "react-router-dom";
import { heroImg } from "../Components/img";
// import { hero1, hero2, hero3 } from "../assets/index.jsx";

const Hero = () => {
  return (
    <section id="hero" className="flex justify-center items-center w-[100%] pt-5">
    {/* <!-- Flex Container --> */}
    <div className="flex w-[90%]  flex-col-reverse justify-between md:flex-row items-center space-y-0 md:space-y-0 container">
        {/* <!-- Left Item --> */}
        <div className="flex flex-col mb-32 space-y-12 md:1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                Bring everyone together to build better products
            </h1>
            <p className="max-w-sm text-sm text-darkGrayish-blue md:text-left">
                Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
            </p>
            <div className="flex justify-self md:justify-start">
            <Link to="" className="hidden md:block p-3 px-6 pt-2 text-[white] bg-p5 rounded-full baseline hover:bg-p4">Get Started</Link>
            </div>
        </div>
        {/* <!-- Image --> */}
        <div className="md:w-[45%] max-md:w-[80%] max-md:mx-auto">
            <img src={heroImg} alt="" />
        </div>
    </div>
    </section>
  );
};

export default Hero;
