import { Facebook, Instagram, LinkedinIcon, Twitter } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-p1 text-p2 py-10">
      <div className="container flex justify-between  ">

        <div className="flex max-md:flex-col max-md:gap-[30px] justify-between w-full">
          <div className="flex flex-col max-w-[350px] items-start justify-start ">
            <h3 className="text-xl font-bold text-white">About Teefy</h3>
            <p className="mt-4 text-[#779B9B] text-[15px]">Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
            <div className="flex mt-4 gap-3">
              <a href="tel:+2341234567890" className="text-white">(219) 555-0114</a>
              <p className="text-[#779B9B]">or</p>
              <a href="mailto:info@teefy.com" className="text-white">TeeFey@gmail.com</a>
            </div>
          </div>

          <div className=" w-fit grid  float-right   grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5">
            <div className="col-span-1">
              <h3 className="text-xl capitalize font-bold text-white ">My Account
              </h3>
              <ul className="mt-4">
                <li className="py-2">
                  <a href="">
                    Profile
                  </a>
                </li>
                <li className="py-2">
                  <a href="">
                    Order History
                  </a>
                </li>  <li className="py-2">
                  <a href="">
                    Shopping Cart
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="text-xl font-bold text-white">Support</h3>
              <ul className="mt-4">
                <li className="py-2">
                  <a href="">
                  Contact
                  </a>
                </li>
                <li className="py-2">
                  <a href="">
                  Terms & Condition
                  </a>
                </li>  <li className="py-2">
                  <a href="">
                  Shopping Cart
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="text-xl font-bold text-white ">Socials</h3>
              <ul className="mt-4">
                <li className="py-2">
                  <a href="" className="flex items-center">
                    <Facebook size={20} className="mr-2" />
                    Facebook
                  </a>
                </li>
                <li className="py-2">
                  <a href="" className="flex items-center">
                    <Instagram size={20} className="mr-2" />
                    Instagram
                  </a>
                </li>
                <li className="py-2">
                  <a href="" className="flex items-center">
                    <Twitter size={20} className="mr-2" />
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container">
      <div className="w-[100%] mt-8 border-t border-[#779B9B] pt-6 text-center text-sm">
        <p>Teefy &copy; 2025. All Rights Reserved</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;