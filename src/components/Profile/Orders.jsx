import { DownloadCloud } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Logo } from "../../assets";

const orders = [
    { id: 1, date: "2025-03-21", image: Logo, name: "Chocolate Cake", qty: 2, price: "$20" },
    { id: 2, date: "2025-03-20", image: Logo, name: "Strawberry Pie", qty: 1, price: "$15" },
];

const downloadReceipt = (id) => {
    const input = document.getElementById(`receipt-${id}`);
    input.style.display = "block"; 
    html2canvas(input, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL(Logo);
        const pdf = new jsPDF();
        pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
        pdf.save(`receipt-${id}.pdf`);
        input.style.display = "none";
    });
};

const OrdersPage = () => {
    return (
        <div className="">
            <h1 className="text-p5 mb-5">Orders</h1>
            <table className="w-full border-collapse border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">Date</th>
                        <th className="border p-2">Item</th>
                        <th className="border p-2">Qty</th>
                        <th className="border p-2">Price</th>
                        <th className="border p-2">Download</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id} className="text-center">
                            <td className="border p-2">{order.date}</td>
                            <td className="border p-2 flex items-center gap-2">
                                <img src={order.image} alt={order.name} className="w-10 h-10" />
                                {order.name}
                            </td>
                            <td className="border p-2">{order.qty}</td>
                            <td className="border p-2">{order.price}</td>
                            <td className="border p-2">
                                <button
                                    className="text-blue-500 hover:underline flex items-center gap-1"
                                    onClick={() => downloadReceipt(order.id)}
                                >
                                    <DownloadCloud size={16} /> Download
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {orders.map((order) => (
                <div
                    key={order.id}
                    id={`receipt-${order.id}`}
                    className="hidden p-6 bg-white border rounded-lg shadow-md w-[350px] mx-auto mt-4 relative text-center"
                >
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div
                            className="w-full h-full bg-repeat transform rotate-[-30deg]"
                            style={{
                                backgroundImage: `url(${Logo})`,
                                backgroundSize: "120px 120px",
                                backgroundRepeat: "space",
                                backgroundPosition: "0 1",
                            }}
                        ></div>
                    </div>



                    {/* Receipt Content */}
                    <div className="relative z-10">
                        <h2 className="text-xl font-bold mb-2">Order Receipt</h2>
                        <hr className="mb-2 border-gray-300" />

                        <div className="text-left text-sm space-y-1">
                            <p><strong>Date:</strong> {order.date}</p>
                            <p><strong>Order ID:</strong> #ORD{order.id}</p>
                            <p><strong>Item:</strong> {order.name}</p>
                            <p><strong>Quantity:</strong> {order.qty}</p>
                            <p><strong>Price:</strong> {order.price}</p>
                        </div>

                        <hr className="my-3 border-gray-300" />

                        <p className="italic text-gray-500 text-xs">
                            Thank you for shopping with us! <br />
                            Need help? Contact support@example.com
                        </p>
                    </div>
                </div>
            ))}


        </div>
    );
};

export default OrdersPage;
