import Navbar from "../components/Navbar/Navbar"
import Sidebar from "../components/Profile/Sidebar"
import Footer from "../sections/Footer"
import ProfileRoute from "../components/Profile"

function Profile() {
  return (
    <div>
      <Navbar />
      <div className="container mt-[150px] flex">
        <div className="h-[100dvh] min-w-[150px] bg-white flex-3">
          <Sidebar />
        </div>
        <div className="flex-4 w-full  h-[100dvh]">
          <ProfileRoute />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Profile