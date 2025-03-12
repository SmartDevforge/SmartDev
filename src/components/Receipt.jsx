import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Logo } from "../assets";
import { ReceiptData, WebsiteName } from "../constants";

const companyLogo = Logo;

const Receipt = () => {
    const downloadReceipt = (id) => {
        const input = document.getElementById(`receipt-${id}`);
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
            pdf.save(`receipt-${id}.pdf`);
        });
    };

    return (
        <div className="max-w-4xl mx-auto p-6 mt-20 grid gap-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Receipt Details</h2>
            {ReceiptData.map((receipt) => (
                <div key={receipt.id} id={`receipt-${receipt.id}`} className="relative p-6 border rounded-lg bg-white shadow-lg overflow-hidden">
                    {/* Full-width background image */}
                    <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${companyLogo})` }}></div>
                    
                    <h3 className="text-xl font-semibold text-gray-800 relative">{WebsiteName}</h3>
                    <p className="text-gray-600 relative">Customer: {receipt.customer}</p>
                    <p className="text-gray-600 relative">Delivery: {receipt.delivery}</p>
                    <div className="mt-4 border-t pt-4 relative">
                        <h4 className="text-lg font-medium text-gray-700 mb-2">Products:</h4>
                        {receipt.products.map((product, index) => (
                            <div key={index} className="flex justify-between text-gray-700">
                                <span>{product.name} (x{product.qty})</span>
                                <span>${product.price * product.qty}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 border-t pt-4 text-lg font-bold text-gray-800 relative">
                        Total: ${receipt.totalAmount}
                    </div>
                    <button
                        onClick={() => downloadReceipt(receipt.id)}
                        className="mt-4 w-full bg-p5 text-white p-3 rounded-lg hover:bg-green-700 relative"
                    >
                        Download Receipt
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Receipt;
