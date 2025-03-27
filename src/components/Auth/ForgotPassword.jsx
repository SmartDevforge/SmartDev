import { useState } from "react";
import LoadingDots from "../../constants/Icons";
import { forgotPassword } from "../../constants/api";

/* eslint-disable react/prop-types */
export default function ForgotPassword({ next, back }) {
  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    setLoading(true);
    setError("");
    e.preventDefault();
    try {
      const response = await forgotPassword(email);
      setLoading(false);
      setEmailSent(true);
      console.log(email);
      console.log(response);
      setEmailSent(true);
    }
    catch (error) {
      console.error("Forgot Password failed", error);
      setLoading(false);    setEmailSent(true);
      console.log(email);  
      setError(error.message);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        {!emailSent ? (
          <>
            <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
            <p className="text-gray-600 mb-4">Enter your email to reset your password.</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-tertiary w-full py-2 px-6 placeholder:text-secondary bg-white text-p2 rounded-lg outline-none border-[1px] border-p4 font-medium"
                  required />
              </div>
              <button type="submit" className="w-full bg-p5 disabled:bg-p2 text-white py-2 rounded-lg hover:bg-p2"
                disabled={loading || !email}>
                {loading ? (
                  <span className="flex items-center justify-center h-6">
                    <LoadingDots />
                  </span>
                ) : (
                  "Send Reset Link"
                )}

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
            <button onClick={next} className="mt-4 w-full bg-p5 text-white py-2 rounded-lg hover:bg-p2">
              Continue
            </button>
          </>
        )}
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
