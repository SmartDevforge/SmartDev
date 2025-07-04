import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import Navbar from "./components/layout/navbar"
import Footer from "./components/layout/footer"
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
import Team from "./pages/Team"
import ClientMessages from "./pages/client/Messages"
import ClientDashboardPage from "./components/client/page"
import SendMessage from "./pages/client/SendMessage"
import ClientReports from "./pages/client/Reports"
import ScheduleMeeting from "./pages/client/ScheduleMeeting"
import AdminMessages from "./pages/admin/AdminMessages"
import AdminNewsLetter from "./pages/admin/AdminNewsLetter"
import AdminTestimonials from "./pages/admin/AdminTestimonials"
import AdminSettings from "./pages/admin/AdminSettings"
import AddProject from "./components/admin/projects/AddProject"
import EditProject from "./components/admin/projects/EditProject"

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
      <div className="min-h-screen">
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/clients" element={<AdminClients />} />
          <Route path="/admin/projects" element={<AdminProjects />} />
          <Route path="/admin/project/new" element={<AddProject />} />
          <Route path="/admin/project/:id" element={<EditProject />} />
          <Route path="/admin/messages" element={<AdminMessages />} />
          <Route path="/admin/newsletter" element={<AdminNewsLetter />} />
          <Route path="/admin/testimonials" element={<AdminTestimonials />} />
          <Route path="/admin/settings" element={<AdminSettings />} />



          {/* Client Routes */}
          <Route path="/client" element={<ClientDashboardPage />} />
          <Route path="/client/messages" element={<ClientMessages />} />
          <Route path="/client/messages/send" element={<SendMessage />} />
          <Route path="/client/reports" element={<ClientReports />} />
          <Route path="/client/meetings" element={<ScheduleMeeting />} />

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
                    <Route path="/team" element={<Team />} />
                    <Route path="*" exact element={<NotFoundPage />} />
                  </Routes>
                </main>
                <Footer />
              </>
            }
          />


        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
