import {  Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="flex justify-center items-center flex-col w-[100%]  bg-p1 text-p2 py-10">
      <div className="container flex   justify-between items-start w-[90%]  ">

        <div className="flex max-md:flex-col max-md:gap-[30px] justify-between text-left w-full">
          <div className="flex flex-col max-w-[450px] items-start justify-start ">
            <h3 className="text-xl font-bold text-white">About SmartDev</h3>
            <p className="mt-4 text-[#779B9B] text-[15px]">
            At SmartDevForge, we’re not just here to write code—we’re here to bring your ideas to life with clean, thoughtful, and high-performing digital experiences.              </p>
            <div className="flex mt-4 gap-3">
              <a href="tel:+2348141342103" className="text-white">(234) 814-134-2103</a>
              <p className="text-[#779B9B]">or</p>
              <a href="mailto:smartdevforge@gmail.com" className="text-white">contact@smartdevforge</a>
            </div>
          </div>

          <div className=" w-fit grid  float-right   grid-cols-2  lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-5">
            {/* <div className="col-span-1">
              <h3 className="text-xl capitalize font-bold text-white ">
              </h3>
              <ul className="mt-4">
                <li className="py-2">
                 <Link to="/profile">
                    Profile
                  </Link>
                </li>
                <li className="py-2">
                 <Link to="/profile">
                    Order History
                  </Link>
                </li>  <li className="py-2">
                 <Link to="/">
                    Shopping Cart
                  </Link>
                </li>
              </ul>
            </div> */}
            <div className="col-span-1">
              <h3 className="text-xl font-bold text-white">Support</h3>
              <ul className="mt-4">
                <li className="py-2">
                 <Link to="/home#contact">
                  Contact
                  </Link>
                </li>
                <li className="py-2">
                 <Link to="home#about">
                  Terms & Condition
                  </Link>
                </li>  
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="text-xl font-bold text-white ">Socials</h3>
              <ul className="mt-4">
               
                <li className="py-2">
                 <Link to="" className="flex items-center">
                    <Instagram size={20} className="mr-2" />
                    Instagram
                  </Link>
                </li>
                <li className="py-2">
                 <Link to="" className="flex items-center">
                    <Twitter size={20} className="mr-2" />
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container">
      <div className="w-[100%] mt-8 border-t border-[#779B9B] pt-6 text-center text-sm">
        <p>SmartDev &copy; 2025. All Rights Reserved</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;