import Header from "../sections/Header"
import Hero from "../sections/Hero"
import Features from "../sections/Features"
import Testimonials from "../sections/Testimonials"
import Cta from "../sections/Cta"
import Footer from "../sections/Footer"

function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <Features />
            <Testimonials />
            <Cta />
            <Footer />
        </div>
    )
}

export default Home