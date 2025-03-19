import { useSidebar } from "../../constants/Context";

const Sidebar = () => {
  const { selectedRoute, setSelectedRoute } = useSidebar();

  // Sidebar Menu Items
  const menuItems = [
    { name: "Profile", path: "/index" },
    { name: "Address Info", path: "/address" },
    { name: "Orders", path: "/orders" },
  ];
  return (
    <div className="w-64 h-screen p-4">
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.path}
            onClick={() => setSelectedRoute(item.path)}
            className={`p-2 cursor-pointer rounded ${
              selectedRoute === item.path ? "text-p5" : "hover:underline"
            }`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
