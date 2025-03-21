import { useSidebar } from "../../constants/Context";
import { BackIcon } from "../../constants/Icons"
import { PasswordInput } from "./Profileinput";

function ChangePassword() {
    const { setSelectedRoute } = useSidebar();
    return (
        <div>
            <div className="flex justify-between  mb-5 items-center">
                <span className="text-p5">Change Password</span>
                <span className="cursor-pointer" onClick={() => setSelectedRoute("/index")}>
                    <BackIcon type={"profile"} />
                </span>
            </div>

            <form>
                <PasswordInput label="Old Password" name="oldpasscode" placeholder="Old Password" />
                <PasswordInput label="New Password" name="newpasscode" placeholder="New Password" />
                <PasswordInput label="Confirm New Password" name="confirmnewpasscode" placeholder="Confirm New Password" />
                <button className="bg-p5 rounded-[10px] mt-5 border-[1px] text-white py-2 px-6" type="submit">
                    Save Password
                </button>
            </form>
        </div>
    )
}

export default ChangePassword