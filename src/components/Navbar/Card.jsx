import { Link } from "react-router-dom";
import { useCart } from "../../constants/Context";
import { FormatCurrency } from "../../constants";
import { ArrowRight, X } from "lucide-react";
import { Basket } from "../../constants/Icons";

// eslint-disable-next-line react/prop-types
const Card = ({ openCard }) => {

  const { cart, removeFromCart, addToCart, clearCart } = useCart();

  // Calculate total price
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <>
      <div className="absolute z-[60] hidden sm:block  w-full">
        <div
          className={`fixed  w-full bg-black h-[100dvh] bg-opacity-90 transform ${openCard ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out `}
        >
          <div className="  ">
            <div className={`bg-white text-black shadow-2xl mt-[-100px]  p-4 w-[60%] h-[1000vh] md:w-[50%] lg:w-[50%]  ml-auto`}>

              <div className=" overflow-y-auto h-[100vh]">
                <div className="flex flex-col justify-between ">
                  {/* sticky overflow-scroll */}

                  <div className="overflow-y-auto h-[90vh]">
                    {cart.length === 0 ? (
                      <div className="flex justify-center items-center h-full flex-col gap-10">
                        <div>
                          <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H19M6 6.5H8" stroke="#068081" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M10.5 3L13.5 6M13.5 6L16.5 9M13.5 6L10.5 9M13.5 6L16.5 3" stroke="#068081" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5" stroke="#068081" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5" stroke="#068081" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <p className="text-p5 text-center ">Your cart is currently empty.</p>
                        <div
                          className=" flex bg-p1 justify-center items-center text-white cursor-pointer  w-[200px] p-2 rounded-xl"

                        >
                          <X onClick={openCard} size={24} />
                          close
                        </div>
                      </div>
                    ) : (
                      <div className="mt-[100px] h-full">
                        <div className="flex w-full font-bold  text-xl px-4 py-1 items-center  justify-between">
                          <div className="font-[600] capitalize">Cart Item</div>
                          <div
                            className=" cursor-pointer border-[1px] p-2 rounded-xl"
                            onClick={openCard}
                          >
                            < X />
                          </div>
                        </div>
                        {
                          cart.map((item) => (
                            <div
                              key={item.id}
                              className="flex justify-between items-center p-3 border-b gap-3"
                            >
                              <img
                                src={item.cover}
                                alt={item.name}
                                className="w-16 h-16 rounded-lg object-cover"
                              />
                              <p className="flex-1 ml-4">{item.name}</p>
                              <p className="text-s3 font-bold">{FormatCurrency(item.price)}</p>
                              <div className="flex gap-[20px]  border rounded-[10px] border-gray-300 py-2 px-3 items-center ">
                                <button onClick={() => removeFromCart(item.id)}>-</button>
                                <p> {item.quantity}</p>
                                <button onClick={() => addToCart(item)}>+</button>
                              </div>
                              <button onClick={(e) => { e.stopPropagation(); removeFromCart(item.id); }} className=" text-white px-1 py-1 rounded-md">
                                <Basket />
                              </button>
                            </div>
                          ))
                        }

                        <div className="flex mt-10 justify-center">
                          <div
                            className=" flex bg-p1 justify-center items-center text-white cursor-pointer  w-[150px] p-2 rounded-[8px]"
                          >
                            <X onClick={clearCart} size={24} />
                            Clear Cart
                          </div>


                        </div>
                      </div>
                    )}
                  </div>
                  {cart.length > 0 && (
                    <div className="fixed flex justify-between items-end bottom-0   w-[45%]  p-4">
                      <div className="flex justify-between flex-col font-semibold text-lg pt-3">
                        <span>Total:</span>
                        <span>{FormatCurrency(total)}</span>
                      </div>
                      <Link
                        to="/checkout"
                        className=" flex gap-4 justify-center w-[250px] mt-3 bg-p5 text-white text-center py-2 rounded-lg hover:bg-opacity-90"
                      >
                        Proceed to Checkout
                        <ArrowRight />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}

      <div className="absolute z-[60] block sm:hidden text-black  w-full">
        <div className="bg-[#0000008a] fixed w-full h-[100vh]">
          <div className="bg-white absolute text-black w-full bottom-0 px-4 h-[70vh] rounded-t-[10%]">
            <div className=" overflow-y-auto h-[50vh]">
              <div className="flex flex-col justify-between ">
                {/* sticky overflow-scroll */}
                <div className="overflow-y-auto h-[50vh]">
                  {cart.length === 0 ? (
                    <div className="flex justify-center items-center h-full flex-col gap-10">
                      <div>
                        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H19M6 6.5H8" stroke="#068081" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M10.5 3L13.5 6M13.5 6L16.5 9M13.5 6L10.5 9M13.5 6L16.5 3" stroke="#068081" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5" stroke="#068081" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5" stroke="#068081" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <p className="text-p5 text-center ">Your cart is currently empty.</p>
                      <div
                        className=" flex bg-p1 justify-center items-center text-white cursor-pointer  w-[200px] p-2 rounded-xl"

                      >
                        <X onClick={openCard} size={24} />
                        close
                      </div>
                    </div>
                  ) : (
                    <div className="mt-[20px] h-full">
                      <div className="flex w-full font-bold  text-xl px-4 py-1 items-center  justify-between">
                        <div className="font-[600] capitalize">Cart Item</div>
                        <div
                          className=" cursor-pointer border-[1px] p-2 rounded-xl"
                          onClick={openCard}
                        >
                          < X />
                        </div>
                      </div>
                      {
                        cart.map((item) => (
                          <div
                            key={item.id}
                            className="flex justify-between items-center p-3 border-b gap-3"
                          >
                            <div className="flex flex-col items-start">
                              <img
                                src={item.cover}
                                alt={item.name}
                                className="w-16 h-16 rounded-lg object-cover"
                              />
                              <p className="flex-1">{item.name}</p>
                            </div>
                            <div className="flex flex-col gap-4">
                            <p className="text-s3 font-bold">{FormatCurrency(item.price)}</p>
                            <div className="flex gap-[20px]  border rounded-[10px] border-gray-300 py-2 px-3 items-center ">
                              <button onClick={() => removeFromCart(item.id)}>-</button>
                              <p> {item.quantity}</p>
                              <button onClick={() => addToCart(item)}>+</button>
                            </div>
                            </div>
                            <button onClick={(e) => { e.stopPropagation(); removeFromCart(item.id); }} className=" text-white px-1 py-1 rounded-md">
                              <Basket />
                            </button>
                          </div>
                        ))
                      }

                      <div className="flex mt-10 justify-center">
                        <div
                          className=" flex bg-p1 justify-center items-center text-white cursor-pointer  w-[150px] p-2 rounded-[8px]"
                        >
                          <X onClick={clearCart} size={24} />
                          Clear Cart
                        </div>


                      </div>
                    </div>
                  )}
                </div>

                {cart.length > 0 && (
                  <div className="fixed flex justify-between items-end bottom-0   w-[90%]   p-4">
                    <div className="flex justify-between flex-col font-semibold text-lg pt-3">
                      <span>Total:</span>
                      <span>{FormatCurrency(total)}</span>
                    </div>
                    <Link
                      to="/checkout"
                      className=" flex gap-4 text-[14px] justify-center w-[150px] mt-3 bg-p5 text-white text-center py-2 px-1 rounded-lg hover:bg-opacity-90"
                    >Proceed to Checkout</Link>
                  </div>
                )}


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
