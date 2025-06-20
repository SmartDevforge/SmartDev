import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import Navbar from "./components/layout/navbar"
import Footer from "./components/layout/footer"

// Pages
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Portfolio from "./pages/Portfolio"
import Testimonials from "./pages/Testimonials"
import Contact from "./pages/Contact"
import AdminLogin from "./pages/admin/AdminLogin"
import AdminDashboard from "./pages/admin/AdminDashboard"
import AdminClients from "./pages/admin/AdminClients"
import AdminProjects from "./pages/admin/AdminProjects"
import ClientDashboard from "./pages/client/ClientDashboard"
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
      <div className="min-h-screen">
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/clients" element={<AdminClients />} />
          <Route path="/admin/projects" element={<AdminProjects />} />

          {/* Client Routes */}
          <Route path="/client" element={<ClientDashboard />} />

          {/* Public Routes */}
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </main>
                <Footer />
              </>
            }
          />
          <Route path="*" exact element={<NotFoundPage />} />


        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
