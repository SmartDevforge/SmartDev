import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const Signup = ({ onNext }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ name, email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)}
            className="w-full bg-white text-black px-4 py-2 border rounded-lg mt-4 focus:ring-p5 focus:outline-none" required />
          <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white px-4 py-2 border rounded-lg mt-4 focus:ring-p5 focus:outline-none" required />
          <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-white px-4 py-2 border rounded-lg mt-4 focus:ring-p5 focus:outline-none" required />
          <button type="submit" className="w-full bg-p5 text-white py-2 rounded-lg mt-4 hover:bg-green-700 transition">Continue</button>
        </form>
      </div>
    </div>
  );
};
