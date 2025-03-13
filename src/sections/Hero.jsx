import Button from "../components/Button.jsx";
import { WebsiteName } from "../constants/index.jsx";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <div id="Home">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
           
            </div>
            <h1 className="mb-6 h1  text-p1 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
             {WebsiteName}
            </h1>
            <p className="max-w-440 mb-8 body-1 max-md:mb-10">
              WE Sell The Best Products
              With 100% dedication to bring  quality from store to your table
            </p>
            <Link to="/" offset={-100} >
              <Button icon="/images/zap.svg">Shop Now</Button>
            </Link>
          </div>

          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <img
              src="/images/hero.png"
              className=""
              alt="hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
