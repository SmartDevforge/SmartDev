import { useState } from "react"
import {
  LayoutDashboard,
  Users,
  FolderOpen,
  MessageSquare,
  Mail,
  Star,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "../ui/button"

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", to: "/admin" },
  { icon: Users, label: "Clients", to: "/admin/clients" },
  { icon: FolderOpen, label: "Projects", to: "/admin/projects" },
  { icon: MessageSquare, label: "Messages", to: "/admin/messages" },
  { icon: Mail, label: "Newsletter", to: "/admin/newsletter" },
  { icon: Star, label: "Testimonials", to: "/admin/testimonials" },
  { icon: Settings, label: "Settings", to: "/admin/settings" },
]

export default function AdminSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const Location = useLocation()
  const pathname = Location.pathname

  return (
    <div
      className={`fixed left-0 top-0 h-full bg-black/60 backdrop-blur-sm border-r border-p4/30 transition-all duration-300 z-40 ${isCollapsed ? "w-16" : "w-64"
        }`}
    >
      <div className="p-4">
        {/* Logo */}
        <div className="flex items-center justify-between mb-8">
          {!isCollapsed && (
            <h2 className="text-xl font-bold text-white">
              SmartDev<span className="text-p4">Forge</span>
            </h2>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-p2 hover:text-white hover:bg-p4/20"
          >
            {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </Button>
        </div>

        {/* Menu Items */}
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.to
            return (
              <Link key={item.to} to={item.to}>
                <div
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 hover:bg-p4/20 group ${isActive ? "bg-p4/30 text-white" : "text-p2 hover:text-white"
                    }`}
                >
                  <item.icon className={`${isActive ? "text-p4" : "group-hover:text-p4"} ${isCollapsed ? "h-10 w-10" : "h-5 w-5 "}`} />
                  {!isCollapsed && <span className="font-medium">{item.label}</span>}
                </div>
              </Link>
            )
          })}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-4 left-4 right-4">
          <Button
            variant="ghost"
            className={`w-full justify-start text-p2 hover:text-white hover:bg-red-500/20 ${isCollapsed ? "px-3" : ""}`}
          >
            <LogOut className="h-5 w-5" />
            {!isCollapsed && <span className="ml-3">Logout</span>}
          </Button>
        </div>
      </div>
    </div>
  )
}
