import { useState } from "react";
import { google } from "../assets";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password, rememberMe });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Welcome Back</h2>
        <p className="text-sm text-gray-500 text-center mb-6">Login to your account</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 bg-white py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-p5"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-p5"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="mr-2 bg-white"
              />
              Remember me
            </label>
            <a href="#" className="text-sm text-p5 hover:underline">Forgot Password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-p5 text-white py-2 rounded-lg hover:bg-p5 transition"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center text-gray-600 text-sm">
          Or login with
        </div>
        <button className="w-full flex items-center justify-center mt-2 py-2 border rounded-lg hover:bg-gray-100 transition">
          <img
            src={google}
            alt="Google logo"
            className="w-7 h-7 mr-2"
          />
          Continue with Google
        </button>
        <p className="mt-4 text-sm text-gray-600 text-center">
          Don&apos;t have an account? <a href="/signup" className="text-p5 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;