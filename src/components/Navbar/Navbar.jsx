import { useEffect, useState } from "react";
import Card from "./Card";
import { NavLink, useLocation } from "react-router-dom";
import { CallIcon, HambuggerIcon } from "../../constants/Icons";
// import { useCart } from "../../constants/Context";
import Header from "./Header";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cardOpen, setCardOpen] = useState(false);

  const params = window.location.pathname;
  const openCard = () => {
    setCardOpen((prev) => !prev);
  };
  const openMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  // eslint-disable-next-line no-unused-vars

  // const { cart } = useCart();
  const location = useLocation(); // Get the current route

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else if (params.includes("/contact")) {
        setIsScrolled(true);
      } else if (params.includes("/checkout")) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {cardOpen ? (
        <Card
          openCard={openCard}
        />
      ) : (
        ""
      )}

      <div
        className={`  fixed top-0 left-0 w-full z-50 xd:px-8 transition-colors respoWhite duration-300 ${isScrolled
          ? "bg-p5 text-white drop-shadow-xl"
          : "bg-white text-p5"
          }`}
      >
        <div className={`bg-p5 py-1 text-white  text-xs text-center ${isScrolled && "hidden"} `}>We deliver to you every day from
          <span className="text-[#65f6f3] px-1">
            7:00 to 23:00
          </span>
        </div>
        <div className="container relative max-w-7xl m-auto flex items-center justify-between">
          <button
            className={`respoWhite ${isScrolled ? " text-white drop-shadow-xl block md:hidden" : " text-p5 block md:hidden"
              }`}
            onClick={openMenu}
          >
            <HambuggerIcon />
          </button>
          <Header OpenCard={openCard} />

        </div>


        <div className="flex items-center justify-between pb-2 container m-auto">
          <nav>
            <ul className="flex items-center space-x-6">
              <li>
                <NavLink
                  to="/home#Home"
                  className={`${location.hash === "#Home" ? isScrolled ? " text-s1" : "text-p5" : "text-gray-700"
                    }`}
                >
                  Home
                </NavLink>
                {
                  location.hash === "#Home" && <hr className="h-0.5 bg-p5 " />
                }
              </li>
              <li>
                <NavLink
                  to="/"
                  className={`${location.pathname === "/" ? isScrolled ? "text-s1" : "text-p5" : "text-gray-700"
                    }`}
                >
                  Product
                </NavLink>
                {
                  location.pathname === "/" && <hr className="h-0.5 bg-p5 " />
                }
              </li>
              <li>
                <NavLink
                  to="/home#about"
                  className={`${location.hash === "#about" ? isScrolled ? "text-s1" : "text-p5" : "text-gray-700"
                    }`}
                >
                  About
                </NavLink>
                {
                  location.hash === "#about" && <hr className="h-0.5 bg-p5 " />
                }
              </li>
              <li>
                <NavLink
                  to="/home#contact"
                  className={`${location.hash === "#contact" ? isScrolled ? "text-s1" : "text-p5" : "text-gray-700"
                    }`}
                >
                  Contact
                </NavLink>
                {
                  location.hash === "#contact" && <hr className="h-0.5 bg-p5 " />
                }
              </li>
            </ul>
          </nav>

          <div className="flex items-center space-x-2">
            <CallIcon className="text-white " />
            <span>1234567890</span>
          </div>
        </div>
      </div>


      {/* Mobile  */}
      <div
        onClick={openMenu}
        className={`fixed top-0 left-0 inset-0 z-40 w-full bg-black bg-opacity-90 transform ${menuOpen ? "translate-y-0" : "-translate-y-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
      >

        <div
          onClick={openMenu}
          className="flex flex-col items-center space-y-6 justify-center m-auto h-full py-8"
        >
          <NavLink className="text-white text-lg"
            to="/home#Home" > Home</NavLink>
          <NavLink className="text-white text-lg"
            to="/home#about" > About</NavLink>
          <NavLink className="text-white text-lg"
            to="/home#contact" > Contact</NavLink>

          <NavLink className="text-white text-lg"
            to="/" > product</NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
