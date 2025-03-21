import { PenLineIcon } from "lucide-react"
import { useSidebar } from "../../constants/Context";
import ListCard from "./ListCard";

function Address() {
  const { setSelectedRoute } = useSidebar();
  const AddressDetails = [
    {
      Title: "Address",
      Label: "123 Main St, Anytown, USA",
    },
    {
      Title: "City",
      Label: "Anytown",
    },
    {
      Title: "State",
      Label: "Anytown",
    },
    {
      Title: "Zip",
      Label: "12345",
    },
    {
      Title: "Country",
      Label: "USA",
    },
  ]
  return (
    <div>
      <div className="flex justify-between  mb-5 items-center">
        <span className="text-p5">Shipping Address</span>
        <span className="cursor-pointer" onClick={() => setSelectedRoute("/editaddress")}>
          <PenLineIcon size={20} />
        </span>
      </div>
      {
        !AddressDetails &&
        <div>
          <span>You have not setup your address details. <span className="text-p5 cursor-pointer" onClick={() => setSelectedRoute("/index")}>click here to setup.</span></span>
        </div>
      }
      {

        AddressDetails.length > 0 &&
        AddressDetails.map((detail , index) => (
          <ListCard key={index} Title={detail.Title} Label={detail.Label} />
        ))
      }

    </div>
  )
}

export default Address