import { useState } from "react";
import {  useNavigate, useSearchParams } from "react-router-dom";
import { resetPassword } from "../constants/api";
export const ResetPassword = () => {
   

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");


const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token || !password || !confirmPassword) {
        setError("All fields are required.");
        return;
    }

    console.log("Token:", token, "Password:", password);

    if (password.trim() !== confirmPassword.trim()) {
        setError("Passwords do not match.");
        return;
    }

    setError(""); // Clear previous errors

    try {

        console.log("Reset Password Response:");
        navigate("/auth"); // Redirect to login page after success
    } catch (error) {
        console.error("Reset Password failed:", error);

        // Handle different error responses
        if (error.response) {
            setError(error.response.data?.message || "Failed to reset password. Please try again.");
        } else if (error.request) {
            setError("No response from server. Please check your internet connection.");
        } else {
            setError("An unexpected error occurred.");
        }
    }
};


    return (
        <div className="h-screen w-full flex items-center justify-center bg-gray-100">
            {
                token ? <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
                    <p className="text-gray-600 mb-4">Enter your new password below.</p>
                    <form onSubmit={handleSubmit}>
                        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
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
                        <button type="submit" className="w-full bg-p2 text-white py-2 rounded-lg hover:bg-p5">
                            Reset Password
                        </button>
                    </form>
                </div> :
                    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Password Reset</h2>
                        <p className="text-gray-600 mb-4">Invalid or expired Token</p>
                    </div>
            }
        </div>
    );
}