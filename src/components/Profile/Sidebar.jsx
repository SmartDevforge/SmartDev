import {  useNavigate } from "react-router-dom";
import { useSidebar } from "../../constants/Context";

const Sidebar = () => {
  const { selectedRoute, setSelectedRoute } = useSidebar();
  const navigate = useNavigate()

  // Sidebar Menu Items
  const menuItems = [
    { name: "Profile", path: "/index" },
    { name: "Address Info", path: "/address" },
    { name: "Orders", path: "/orders" },
  ];
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };
  return (
    <div className="w-64 max-md:flex max-md:w-full max-md:h-fit h-screen p-4">
      <ul className="max-md:flex w-[100%]">
        {menuItems.map((item) => (
          
            <li
              key={item.name}
              onClick={() => setSelectedRoute(item.path)}
              className={`p-2 w-full max-md:p-0 cursor-pointer rounded ${selectedRoute === item.path ? "text-p5" : "hover:underline"
                }`}
            >
              {item.name}
            </li>         
        ))}
      </ul>
      <div className="p-2 text-red-500 cursor-pointer items-center pl-[30px]" onClick={handleLogout}>
          Logout
      </div>
    </div>
  );
};

export default Sidebar;
