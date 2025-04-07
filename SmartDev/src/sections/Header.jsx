import { useState } from "react"
import { Link } from "react-router-dom"

function Header() {
  const [visible, setVisible] = useState(false)
  const HandleToggleMenu = () => {
    setVisible(!visible)
  }
  return (
    <div className="flex  h-[60px] justify-center items-center w-[100%]">
      {/* <!-- Navbar --> */}
      <nav className="relative w-[90%] ">
        {/* <!-- Flex Container --> */}
        <div className="flex items-center justify-between">
          {/* <!-- Logo --> */}
          <div className="pt-2">
            SmartDev Forge
          </div>
          {/* <!-- Menu Items --> */}
          <div className="hidden md:flex space-x-6">
            <Link to="" className="hover:text-brightRedLight">Product</Link>
            <Link to="" className="hover:text-brightRedLight">Pricing</Link>
            <Link to="" className="hover:text-brightRedLight">About Us</Link>
            <Link to="" className="hover:text-brightRedLight">Careers</Link>
            <Link to="" className="hover:text-brightRedLight">Community</Link>
          </div>
          {/* <!-- Button --> */}
          <Link to="" className="hidden md:block p-3 px-6 pt-2 text-[white] bg-p5 rounded-full baseline hover:bg-p4">Get Started</Link>
          {/* <!-- Hamburger Icon --> */}
          <button
            id="menu-btn"
            onClick={HandleToggleMenu}
            className="block hamburger md:hidden focus:outline-none"
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* <!-- Mobile Menu --> */}
        <div className="md:hidden">
          <div
            className={`absolute flex-col items-right  self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${visible ? "flex" : "hidden"}`}
          >
            <Link to="/">Pricing</Link>
            <Link to="/">Product</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Community</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header