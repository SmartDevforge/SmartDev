/* eslint-disable react/prop-types */
import { SearchIcon } from "lucide-react";
import { useCart } from "../../constants/Context";
import { CartIcon, PersonIcon } from "../../constants/Icons"
import Search from "../../sections/Search"
import { Link } from "react-router-dom";

function Header({ OpenCard }) {
    const token = localStorage.getItem("token");
    const { cart } = useCart();
    return (
        <div className="flex justify-between items-center  py-2  w-full">
            <div className="w-[20%]">
                <h1>LOGO</h1>
            </div>
            <div className="searchcon w-[100%]">
                <Search page={"header"} />
            </div>

            <span className=' text-p5 hidden max-md:flex py-2 px-5 max-md:px-3 SearchB'><SearchIcon /> </span>

            <div className="flex items-center justify-end w-[20%] gap-5  max-md:gap-1 ">
                <div className="relative inline-block cursor-pointer"
                    onClick={OpenCard}
                >
                    <CartIcon />
                    <span className="absolute -top-2 -right-2 bg-red-400 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        {cart.length > 0 ? cart.length : 0}
                    </span>
                </div>
                {
                    token ?
                        <Link to="/profile">
                            <div
                                className="flex cursor-pointer items-start "
                            >
                                <PersonIcon />
                            </div>
                        </Link> :
                        <Link to="/auth" className="bg-white text-p5 text-[14px] rounded-[20px] py-2 px-8 border-[2px] border-p5">
                            Sign In
                        </Link>
                }
            </div>
        </div>
    )
}

export default Header