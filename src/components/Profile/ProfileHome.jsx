import { useSidebar } from "../../constants/Context";
import ListCard from "./ListCard"

function ProfileHome() {
    const {  setSelectedRoute } = useSidebar();
  const Details = [
    {
      Title: "First Name",
      Label: "John",
    },
    {
      Title: "Last Name",
      Label: "Doe",
    },
    {
      Title: "Email",
      Label: "example@example.com",
    },
    {
      Title: "Phone",
      Label: "+1 123 456 7890",
    },
    {
      Title: "Password",
      Label: ". . . . . . . .",
    },

  ]
  return (
    <div className="">
      <h1 className="text-p5 mb-5">Personal Information</h1>
      <div className="flex justify-center items-start flex-col gap-4">
        {
          Details.map((detail) => (
            <ListCard key={detail.Label} Title={detail.Title} Label={detail.Label} />
          ))
        }
      </div>
      <div className="flex justify-end items-center">
        <button   onClick={() => setSelectedRoute("/newpasscode")} className="btn btn1 text-p5 capitalize  h-[50px] rounded-md">
          Change
        </button>
      </div>
    </div>
  )
}

export default ProfileHome