/* eslint-disable react/prop-types */
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

// eslint-disable-next-line react/prop-types
export const PasswordInput = ({ label, name, placeholder }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex justify-center mt-[15px] items-start flex-col gap-4">
            <label className="text-p1" htmlFor={name}>{label}</label>
            <div className="flex justify-between bg-white-100 w-[100%] p-2 rounded border-[1px] border-[#E0E0E0]">
                <input
                    type={showPassword ? "text" : "password"}
                    className="bg-transparent text-[14px] outline-none w-[100%]"
                    name={name}
                    required
                    placeholder={placeholder}
                />
                <span
                    className="cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <EyeOff /> : <Eye />}
                </span>
            </div>
        </div>
    );
};


function AddressInput({ label, name, placeholder }) {

    return (
        <div className="flex justify-center mt-[10px] items-start flex-col gap-2">
            <label className="text-p1" htmlFor={name}>{label}</label>
            <div className="flex justify-between bg-white-100 w-[100%] p-2 rounded border-[1px] border-[#E0E0E0]">
                {
                    name === "phonenumber" ? (
                        <span
                        className="cursor-pointer w-[30px] mr-[1px] "
                    >
                        UK | 
                    </span>
                    ) : null
                }
             
                <input
                    type={"text"}
                    className="bg-transparent text-[14px] outline-none w-[100%]"
                    name={name}
                    required
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}

export default AddressInput