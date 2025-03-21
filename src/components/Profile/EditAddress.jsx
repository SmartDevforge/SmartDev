import { useSidebar } from "../../constants/Context";
import { BackIcon } from "../../constants/Icons"
import AddressInput from "./Profileinput";

function EditAddress() {
    const { setSelectedRoute } = useSidebar();
    return (
        <div>
            <div className="flex justify-between  mb-5 items-center">
                <span className="text-p5">Shipping Address</span>
                <span className="cursor-pointer" onClick={() => setSelectedRoute("/address")}>
                    <BackIcon type={"profile"} />
                </span>
            </div>

            <form>
                <AddressInput label=" Phone Number" name="phonenumber" placeholder="+1" />
                <AddressInput label="Street Address" name="streetaddress" placeholder="3891 Ranchview Dr. Richardson, California 62639" />
                <AddressInput label="Apartment / Suite (Optional)" name="Apartment" placeholder="2525 East Roosevelt Road, Suite 120" />
                <AddressInput label="Country / Region" name="country" placeholder="United States" />
                <AddressInput label="Town / City" name="city" placeholder="Los Angeles" />
                <AddressInput label="Postcode" name="postCode" placeholder="48214" />
                <button className="bg-p5 rounded-[10px] mt-5 border-[1px] text-white py-2 px-6" type="submit">
                    Save Address
                </button>
            </form>
        </div>
    )
}

export default EditAddress