"use client"
import { useState } from "react"
import { Eye, EyeOff, Lock, User, AlertCircle } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card"
import { Input } from "../../ui/input"
import { Button } from "../../ui/button"

export default function AdminLoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setError("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate authentication
    setTimeout(() => {
      if (formData.email === "admin@smartdevforge.com" && formData.password === "admin123") {
        localStorage.setItem("adminAuth", "true")
        navigate("/admin")
      } else {
        setError("Invalid email or password")
      }
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-p1 via-p5 to-p4 flex items-center justify-center p-4">
      <div className="absolute inset-0 animated-gradient opacity-20"></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-p3/20 rounded-full blur-xl float-animation"></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-p4/20 rounded-full blur-xl float-animation"
        style={{ animationDelay: "2s" }}
      ></div>

      <Card className="w-full max-w-md bg-black/40 backdrop-blur-sm border-p4/30 shadow-2xl relative z-10">
        <CardHeader className="text-center pb-4">
          <div className="w-16 h-16 bg-gradient-to-r from-p4 to-p3 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-white">Admin Login</CardTitle>
          <p className="text-p2">Access the SmartDev Forge admin panel</p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="flex items-center space-x-2 text-red-400 bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                <AlertCircle className="h-4 w-4" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-white">
                Email Address
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-p2" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="pl-10 bg-black/20 border-p4/30 text-white placeholder:text-p2 focus:border-p4"
                  placeholder="admin@smartdevforge.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-white">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-p2" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="pl-10 pr-10 bg-black/20 border-p4/30 text-white placeholder:text-p2 focus:border-p4"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-p2 hover:text-white"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-p4 hover:bg-p4/80 text-white py-3 transition-all duration-300 hover:scale-105"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-p2">Demo credentials: admin@smartdevforge.com / admin123</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
