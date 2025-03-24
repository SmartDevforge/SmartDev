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
                <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required />
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                Send Reset Link
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-600">
              <button onClick={back} className="text-blue-500">Back to Login</button>
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


export const   ResetPassword = ({ next, back }) => {
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Reset Password
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          <button onClick={back} className="text-blue-500">Back</button>
        </p>
      </div>
    </div>
  );
}


export const Confirmation =({ next }) => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Password Reset Successful</h2>
        <p className="text-gray-600 mb-4">Your password has been updated successfully. You can now log in with your new password.</p>
        <button onClick={next} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Go to Login
        </button>
      </div>
    </div>
  );
}
