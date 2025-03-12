import { useState } from 'react';
import { Person } from '../assets';
import { BackIcon } from '../constants/Icons';

// eslint-disable-next-line react/prop-types
function Profile({ openCard }) {
    const [user, setUser] = useState({
        name: "Solomon",
        email: "solomon@example.com",
        bio: "Frontend Engineer & Web Performance Consultant",
        profilePic: "https://via.placeholder.com/150",
    });

    const [formData, setFormData] = useState(user);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleBlur = () => {
        setUser(formData);
    };
    return (
        <div className="absolute z-[60] block w-full">
            <div
                className={`fixed right-0 top-0 w-full bg-black      bg-opacity-90 transition-transform duration-300 ease-in-out ${openCard ? "translate-x-0" : "translate-x-full"
                    }`}
            // onClick={openCard}
            >
                <div className="bg-white text-black shadow-2xl rounded-s-[5%] p-4 w-[60%] h-[100vh] md:w-[50%] lg:w-[40%] ml-auto">
                    {/* Header */}
                    <div className="flex justify-between items-center font-bold text-xl px-4 py-2 border-b">
                        <p>Profile Page</p>
                        <div
                        onClick={openCard}
                            className="smHidden cursor-pointer border-[1px] p-1 rounded-xl"
                        >
                            <BackIcon  />
                        </div>
                    </div>
                    {/* Profile Page Content*/}
                    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
                        <div className="flex flex-col items-center text-center">
                            <img
                                src={Person}
                                alt="Profile"
                                className="w-24 h-24 rounded-full shadow-md mb-4 border-4 border-gray-200"
                            />
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="text-3xl font-bold text-gray-900 text-center bg-transparent border-none outline-none focus:ring-0"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="text-gray-600 text-lg text-center bg-transparent border-none outline-none focus:ring-0"
                            />
                            <textarea
                                name="bio"
                                value={formData.bio}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="mt-4 text-gray-700 text-md max-w-md text-center bg-transparent border-none outline-none focus:ring-0"
                            ></textarea>
                            <div className="mt-6 flex gap-4">
                                <a href="/recipt">
                                    <button className="bg-p5 text-white px-4 py-2 rounded-lg hover:bg-green-800">
                                        View Receipt
                                    </button>
                                </a>
                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile
