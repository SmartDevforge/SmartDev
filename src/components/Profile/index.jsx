import { useSidebar } from "../../constants/Context";

const ProfileRoute = () => {
  const { selectedRoute } = useSidebar();
  return (
    <div className="p-6 flex-1">
      {selectedRoute === "/index" && <h1>Dashboard Page</h1>}
      {selectedRoute === "/address" && <h1>Address Info</h1>}
      {selectedRoute === "/orders" && <h1>Orders</h1>}
    </div>
  );
};

export default ProfileRoute;
