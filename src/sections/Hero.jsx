import { ArrowRight } from "lucide-react";
import Button from "../components/Button.jsx";
import { Link } from "react-router-dom";
import { hero1, hero2, hero3 } from "../assets/index.jsx";

const Hero = () => {
  return (
    <section className="  bg-p5 pt-60 max-md:h-fit h-[100dvh]">
      <div id="Home" className="">
        <div className="container relative flex justify-between items-center ">
          <div className="relative z-2 max-md:w-full max-w-512 max-lg:max-w-388">

            <h1 className="text-white font-bold text-[45px] leading-[150%]">
              Discover Freshness, Flavor, and Tradition
              — All in One Place!
            </h1>
            <p className="font-inter font-normal text-base leading-[150%] text-white">
              Shop now and experience the taste of home, delivered fast and fresh!
            </p>
            <Link to="/" offset={-100} >
              <Button containerClassName={"bg-[#012220] rounded-[8px] mt-4 py-2 px-8 text-white"} Icon={() =>
                <ArrowRight className="text-white" />
              }>Shop Now! </Button>

            </Link>
          </div>
          <div className="absolute right-[-20px]  top-[-150px] h-[70dvh]">
            <div className="relative w-full h-full flex flex-col items-end " >
              <img className="w-[100%]" src={hero1} alt="hero" />
              <div className="relative top-[-200px] ">
              <img className="w-[90%] rotate-[-50deg] right-[-300px]" src={hero3} alt="hero" />
              <img className="w-[55%] absolute top-[-200px] right-0   rotate-[5deg] " src={hero2} alt="hero" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
