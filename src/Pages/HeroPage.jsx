import { useLocation } from "react-router-dom"
import About from "../sections/About"
import Contact from "../sections/Contact"
import Footer from "../sections/Footer"
import Header from "../sections/Header"
import Hero from "../sections/Hero"
import { useEffect } from "react"

function HeroPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1)); // Remove #
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

export default HeroPage