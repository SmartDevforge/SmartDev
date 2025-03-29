/* eslint-disable react/prop-types */
import { useState } from "react";
import { auth3 } from "../../assets";
import { loginUser } from "../../constants/api";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import LoadingDots from "../../constants/Icons";

export default function Login({ next, fpasscode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("");
    try {
      const response = await loginUser({ email, password });
    localStorage.setItem("token", response.data.accessToken);
      setLoading(false)
      navigate("/")
    } catch (error) {
      console.error("Login failed", error);
      setLoading(false)
      setError(error.message)
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center ">
      <div className="w-[100%] h-[95dvh] max-w-[80%] flex justify-center bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side - Login Form */}
        <div className="  w-[100%] flex  h-[95dvh]  max-md:hidden">
          <img src={auth3} alt="" />
        </div>
        {/* Right Side - Image */}
        <div className="  w-[100%] p-8 max-md:w-full flex justify-center items-start  flex-col">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          <form className="w-full" onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com" className="bg-tertiary w-full py-2 px-6 placeholder:text-secondary bg-white text-p2 rounded-lg outline-none border-[1px] border-p4 font-medium" />
            </div>


            <div className="flex justify-center mb-4 mt-[15px] items-start flex-col gap-4">
              <label className="block text-gray-700">Password</label>
              <div className="flex justify-between bg-white-100 w-[100%] p-2 rounded border-[1px] border-[#E0E0E0]">
                <input
                  type={showPassword ? "text" : "password"}
                  className="bg-transparent text-[14px] outline-none w-[100%]"
                  name="password"
                  required
                  placeholder="********"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-p5 text-white py-2 rounded-lg hover:bg-p2 disabled:bg-p2 flex justify-center items-center"
              disabled={!email || !password || loading}
            >
              {loading ? (
                <span className="flex items-center justify-center h-6">
                  <LoadingDots />
                </span>
              ) : (
                "Login"
              )}
            </button>

          </form>
          <p className="mt-4 text-sm text-gray-600">Don&apos;t have an account?
            <button onClick={next} className="text-p5">  Sign Up</button>
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Forgottn password?
            <button onClick={fpasscode} className="text-p5"> Click to reset </button>
          </p>
        </div>
      </div>
    </div>
  );
}
