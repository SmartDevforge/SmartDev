import { useSidebar } from "../../constants/Context";
import Address from "./Address";
import ChangePassword from "./ChangePassword";
import EditAddress from "./EditAddress";
import Orders from "./Orders";
import ProfileHome from "./ProfileHome";
const ProfileRoute = () => {
  const { selectedRoute } = useSidebar();
  return (
    <div className="p-6 flex-1">
      {selectedRoute === "/index" && <ProfileHome />}
      {selectedRoute === "/newpasscode" && <ChangePassword />}
      {selectedRoute === "/address" && <Address />}
      {selectedRoute === "/editaddress" && <EditAddress />}      
      {selectedRoute === "/orders" && <Orders />}
    </div>
  );
};

export default ProfileRoute;
