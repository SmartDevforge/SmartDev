import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const ChatBox = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: "admin", text: "Hello! How can we help you?" }
    ]);
    const [input, setInput] = useState("");
    const chatEndRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = () => {
        if (input.trim() === "") return;
        setMessages([...messages, { sender: "user", text: input }]);
        setInput("");
    };

    return (
        <div className="fixed bottom-5 right-5 z-50">
            {isOpen ? (
                <div className="w-[90vw] h-[50vh] sm:w-[400px] sm:h-[50vh] lg:w-[500px] lg:h-[500px] py-5 bg-black text-white rounded-xl shadow-lg overflow-hidden">
                    <div className="flex items-center justify-between bg-gray-900 p-3 border-b border-gray-700">
                        <span className="font-semibold">Chat Support</span>
                        <X className="cursor-pointer" onClick={() => setIsOpen(false)} />
                    </div>
                    <div className="h-[calc(100%-100px)] p-3 overflow-y-auto">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`mb-2 p-2 rounded-lg w-fit max-w-[75%] ${msg.sender === "user" ? "bg-p5 self-end ml-auto" : "bg-gray-800"}`}
                            >
                                {msg.text}
                            </div>
                        ))}
                        <div ref={chatEndRef} />
                    </div>
                    <div className="flex p-3 border-t border-gray-700">
                        <input
                            type="text"
                            className="w-full flex-1 bg-gray-800 text-white p-2 rounded-lg outline-none"
                            placeholder="Type a message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        />
                        <button
                            className="ml-2 bg-p5 disabled:bg-p2 p-2 rounded-lg"
                            onClick={sendMessage}
                            disabled={input.trim() === ""}
                        >
                            <Send size={20} />
                        </button>
                    </div>
                </div>
            ) : (
                <button
                    className="bg-p5 text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-green-700"
                    onClick={() => setIsOpen(true)}
                >
                    <MessageCircle size={24} />
                </button>
            )}
        </div>
    );
};

export default ChatBox;


