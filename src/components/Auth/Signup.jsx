/* eslint-disable no-irregular-whitespace */

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { auth2 } from "../../assets";
import { registerUser } from "../../constants/api";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import LoadingDots from "../../constants/Icons";

export default function Signup({ next, back }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    "firstname": "",
    "lastname": "",
    "email": "",
    "password": "",
    "Cpassword": "",
    "phoneNumber": "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      if (formData.password !== formData.Cpassword) {
        setError("Passwords do not match");
        setLoading(false);
        return;
      }
      else {
        const response = await registerUser({ ...formData });
        console.log({ ...formData });
        setLoading(false)
        localStorage.setItem("token", response.token);
        navigate("/")
      }

    } catch (error) {
      console.error("Login failed", error);
      setError(error.message)
      setLoading(false)
    }
  };
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="w-[100%] h-[95dvh] max-w-[80%] flex bg-white shadow-lg rounded-lg overflow-hidden">

        {/* Left Side - Image */}
        <div className="w-full flex bg-cover bg-center max-md:hidden">
          <img src={auth2} alt="" />
        </div>

        {/* Right Side - Signup Form */}
        <div className="w-full p-8 max-md:w-full flex justify-center items-start flex-col">
          <h2 className="text-2xl font-bold mb-4">Create Account</h2>
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex justify-between items-start  gap-4 max-md:flex-col ">
              <div className="mb-2  w-full">
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="bg-tertiary w-full py-1.5 px-6 placeholder:text-secondary bg-white text-p2 rounded-lg outline-none border-[1px] border-p4 font-medium"
                  required
                />
              </div>

              <div className="mb-2 w-full">
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="bg-tertiary w-full py-1.5 px-6 placeholder:text-secondary bg-white text-p2 rounded-lg outline-none border-[1px] border-p4 font-medium"
                  required
                />
              </div>
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="bg-tertiary w-full py-1.5 px-6 placeholder:text-secondary bg-white text-p2 rounded-lg outline-none border-[1px] border-p4 font-medium"
                required
              />
            </div>

            <div className="flex justify-center mt-[5px] items-start flex-col gap-2">
              <label className="block text-gray-700">Phone Number </label>
              <div className="flex justify-between bg-white-100 w-[100%] p-2 rounded border-[1px] border-[#E0E0E0]">
                <span
                  className="cursor-pointer w-[40px]"
                >
                  UK |
                </span>
                <input
                  type={"text"}
                  className="bg-transparent text-[14px] outline-none w-[100%]"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange} required
                  placeholder="+1"
                />
              </div>
            </div>
            <div className="flex justify-center mb-2 mt-[5px] items-start flex-col gap-4">
              <label className="block text-gray-700">Password</label>
              <div className="flex justify-between bg-white-100 w-[100%] p-1.5 rounded border-[1px] border-[#E0E0E0]">
                <input
                  type={showPassword ? "text" : "password"}
                  className="bg-transparent text-[14px] outline-none w-[100%]"
                  name="password"
                  required
                  placeholder="********"
                  value={formData.password}
                  onChange={handleChange}
                />
                <span
                  className="cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </span>
              </div>
            </div>
            <div className="flex justify-center mb-2 mt-[5px] items-start flex-col gap-4">
              <label className="block text-gray-700">Confirm Password</label>
              <div className="flex justify-between bg-white-100 w-[100%] p-1.5 rounded border-[1px] border-[#E0E0E0]">
                <input
                  type={showPassword ? "text" : "password"}
                  className="bg-transparent text-[14px] outline-none w-[100%]"
                  name="Cpassword"
                  required
                  placeholder="********"
                  value={formData.Cpassword}
                  onChange={handleChange}
                />
                <span
                  className="cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </span>
              </div>
            </div>

            <div className="flex gap-4 items-center mb-4">
              <input
                type="checkbox"
                className="appearance-none bg-white border border-gray-300 rounded-md w-5 h-5 cursor-pointer checked:bg-p5 checked:border-p5"
                name="check"
              />


              <p className="text-[14px]">I agree to the <span className="text-p5">Terms of Use & General Privacy Policy</span> of TeeFey</p>
            </div>
            <button
              type="submit"
              className="w-full bg-p5 disabled:bg-p2 text-white py-2 rounded-lg hover:bg-p2"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center h-6">
                  <LoadingDots />
                </span>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          <p className="mt-2 text-sm text-gray-600">
            Already have an account? <button onClick={back} className="text-p5">Login</button>
          </p>
        </div>
      </div>
    </div>
  );
}
