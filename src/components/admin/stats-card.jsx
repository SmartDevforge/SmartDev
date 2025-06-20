import { TrendingUp, TrendingDown } from "lucide-react"
import { Card, CardContent } from "../ui/card"

export default function StatsCard({ title, value, change, trend, icon: Icon, color }) {
  return (
    <Card className="bg-black/40 backdrop-blur-sm border-p4/30 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 pulse-glow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-p2 text-sm font-medium">{title}</p>
            <p className="text-2xl font-bold text-white">{value}</p>
          </div>
          <div className={`p-3 rounded-full bg-black/20 ${color}`}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
        <div className="flex items-center mt-4">
          {trend === "up" ? (
            <TrendingUp className="h-4 w-4 text-green-400 mr-1" />
          ) : (
            <TrendingDown className="h-4 w-4 text-red-400 mr-1" />
          )}
          <span className={`text-sm font-medium ${trend === "up" ? "text-green-400" : "text-red-400"}`}>{change}</span>
          <span className="text-p2 text-sm ml-1">from last month</span>
        </div>
      </CardContent>
    </Card>
  )
}
