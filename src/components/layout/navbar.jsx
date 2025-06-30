"use client"

import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ]

  if (!mounted) return null

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-black/80 backdrop-blur-md shadow-2xl border-b border-p4/30" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 group">
              <span className="text-2xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                SmartDev<span className="text-p4 ">Forge</span>
              </span>

              {/* <h1 class="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text cursor-pointer bg-gradient-to-r from-p4 to-p5 hover:from-p4 hover:to-p5 transform hover:scale-105 transition-all duration-300 ease-in-out">SmartDev Forge</h1> */}
            </NavLink>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link, index) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className="px-3 py-2 rounded-md text-white hover:bg-p4/10 hover:text-p4 transition-colors duration-300"
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink to="/contact">
                <Button variant="default" className="bg-p5 hover:bg-p4 text-white">
                  Start a Project
                </Button>
              </NavLink>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}
              variant="default"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-100 dark:hover:bg-p5/50"
              type="button">

              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            {/* <Button
              onClick={() => setIsOpen(!isOpen)}
              variant="default"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-100 dark:hover:bg-p5/50"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button> */}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md shadow-2xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-s3 dark:hover:text-p3"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>
              <Button variant="default" className="w-full bg-p5 hover:bg-p4 text-white mt-2">
                Start a Project
              </Button>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}
