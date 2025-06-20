import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { NewsLetterForm } from "../newsletter"

export default function Footer() {
  return (
    <footer className="bg-p5 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              SmartDev<span className="text-p4">Forge</span>
            </h3>
            <p className="mb-4 text-p2">
              We build, refactor, and scale web experiences that help businesses thrive in the digital world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-p4 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-p4 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-p4 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-p4 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-p4 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-p4 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-p4 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-p4 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-p4 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-p4 transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-p4 transition-colors">
                  Web Maintenance
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-p4 transition-colors">
                  Code Refactoring
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-p4 transition-colors">
                  Performance Audits
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-p4 transition-colors">
                  Custom Web Apps
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="mb-4 text-p2">Subscribe to our newsletter for industry insights and performance tips.</p>
            <NewsLetterForm />
          </div>
        </div>

        <div className="border-t border-p4/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-p2 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SmartDev Forge. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-p2">
            <Link to="/privacy-policy" className="hover:text-p4 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-p4 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
