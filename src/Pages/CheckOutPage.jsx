import Navbar from "../components/Navbar/Navbar"
import { Checkout } from "../sections/Checkout"

function CheckOutPage() {
    return (
        <div>
            <Navbar />
            <div className="container mt-22">
                <Checkout />
            </div>
        </div>
    )
}

export default CheckOutPage