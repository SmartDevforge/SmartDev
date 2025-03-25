import { useState } from "react";

/* eslint-disable react/prop-types */
export default function ForgotPassword({ next, back }) {
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailSent(true);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        {!emailSent ? (
          <>
            <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
            <p className="text-gray-600 mb-4">Enter your email to reset your password.</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" placeholder="example@gmail.com" className="bg-tertiary w-full py-2 px-6 placeholder:text-secondary bg-white text-p2 rounded-lg outline-none border-[1px] border-p4 font-medium"
                  required />
              </div>
              <button type="submit" className="w-full bg-p2 text-white py-2 rounded-lg hover:bg-p5">
                Send Reset Link
              </button>
            </form>
            <p className="mt-4 w-full text-sm text-gray-600">
              <button onClick={back} className="text-p5">Back to Login</button>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">Check Your Email</h2>
            <p className="text-gray-600">We&lsquo;ve sent a password reset link to your email.</p>
            <button onClick={next} className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Continue
            </button>
          </>
        )}
      </div>
    </div>
  );
}


export const ResetPassword = ({ next, back }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
      next();
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
        <p className="text-gray-600 mb-4">Enter your new password below.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">New Password</label>
            <input
              type="password"
              placeholder="*******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-tertiary w-full py-2 px-6 placeholder:text-secondary bg-white text-p2 rounded-lg outline-none border-[1px] border-p4 font-medium"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              placeholder="*******"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-tertiary w-full py-2 px-6 placeholder:text-secondary bg-white text-p2 rounded-lg outline-none border-[1px] border-p4 font-medium"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button type="submit" className="w-full bg-p2 text-white py-2 rounded-lg hover:bg-p5">
            Reset Password
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          <button onClick={back} className="text-p5">Back</button>
        </p>
      </div>
    </div>
  );
}


export const Confirmation = ({ Login }) => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Password Reset Successful</h2>
        <p className="text-gray-600 mb-4">Your password has been updated successfully. You can now log in with your new password.</p>
        <button onClick={Login} className="w-full bg-p2 text-white py-2 rounded-lg hover:bg-p5">
          Go to Login
        </button>
      </div>
    </div>
  );
}
