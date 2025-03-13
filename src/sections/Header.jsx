/* eslint-disable react/prop-types */
// import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";
import { CartIcon, LoginIcon, PersonIcon } from "../constants/Icons";
import { NavLink } from "react-router-dom";
import { useCart } from "../constants/Context";
import Cart from "../components/Cart";
import Profile from "../components/Profile";
import { Logo } from "../assets";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [OpenProfile, setOpenProfile] = useState(false)
  // const params = window.location.pathname
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [cardOpen, setCardOpen] = useState(false);
  const openCard = () => {
    setCardOpen((prev) => !prev);
  };
  const openProfile = () => {
    setOpenProfile((prev) => !prev);
  }
  const { cart } = useCart();

  const isLoggedIn = true
  return (
    <header
      className={
        `fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4
        ${hasScrolled && "py-2 bg-p5 backdrop-blur-[8px]"}`
      }
    >
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="flex-1 cursor-pointer z-2">
          <img src={Logo} width={40} className="rounded-7xl" height={10} alt="logo" />
        </a>

        <div
          className={`
            flex-1 w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-p5 max-lg:opacity-0
            ${isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"}`
          }
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink className="base-bold text-p1 uppercase transition-colors duration-500 cursor-pointer hover:text-s2 max-lg:my-4 max-lg:h5"
                    to="/home" > Home</NavLink>
                  <NavLink className="base-bold text-p1 uppercase transition-colors duration-500 cursor-pointer hover:text-s2 max-lg:my-4 max-lg:h5"
                    to="/home" > About</NavLink>
                  <NavLink className="base-bold text-p1 uppercase transition-colors duration-500 cursor-pointer hover:text-s2 max-lg:my-4 max-lg:h5"
                    to="/home" > Contact</NavLink>

                  <NavLink className="base-bold text-p1 uppercase transition-colors duration-500 cursor-pointer hover:text-s2 max-lg:my-4 max-lg:h5"
                    to="/" > product</NavLink>
                  {
                    isLoggedIn ?
                      < div

                        onClick={openProfile}
                        className="flex cursor-pointer items-center gap-3 "
                      >
                        <PersonIcon />
                        <span className="md:hidden base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer max-lg:my-4 max-lg:h5">Person</span>
                      </div>
                      :
                      <div
                        className="flex cursor-pointer items-center gap-3 "
                      >
                        <LoginIcon />
                        <span className="md:hidden base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer max-lg:my-4 max-lg:h5">Login</span>
                      </div>
                  }
                  <div
                    onClick={openCard}
                    className="flex cursor-pointer items-center gap-3 "
                  >
                    <CartIcon />
                    <p className={`text-p1  uppercase transition-colors duration-500 cursor-pointer max-lg:my-4 max-lg:h5`}><small>{cart && cart.length}</small></p>

                    <span className="md:hidden base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer max-lg:my-4 max-lg:h5">Cart</span>
                  </div>

                  {cardOpen ? (
                    <Cart
                      openCard={openCard}
                    />
                  ) : (
                    ""
                  )}
                  {OpenProfile ? (
                    <Profile
                      openCard={openProfile}
                    />
                  ) : (
                    ""
                  )}
                </li>
              </ul>
            </nav>

            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <img
                src={Logo}
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>

        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt="magic"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header >
  );
};

export default Header;
