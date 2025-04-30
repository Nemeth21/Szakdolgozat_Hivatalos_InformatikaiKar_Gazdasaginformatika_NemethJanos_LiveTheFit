"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

const CartPage = () => {

  const router = useRouter();
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([

    { sender: "bot", text: " Hi! How can I help you today? " },
  ]);

  const [userInput, setUserInput] = useState("");
  const cartItems = [];

  const handleSendMessage = () => {

    const trimmedInput = userInput.trim();
    if (!trimmedInput) return;

    const newMessages = [...messages, { sender: "user", text: trimmedInput }];

    setMessages(newMessages);
    setUserInput("");

    setTimeout(() => {

      const botReply = "Hey there! Ask me anything - products, shipping, returns, whatever you need.";
      setMessages(prevMessages => [...prevMessages, { sender: "bot", text: botReply }]);
    }, 1000);

  };

  return (
    <div className="flex flex-col font-inter font-mono items-center justify-center min-h-screen bg-white text-black p-6 relative">
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition z-10"
      >


         Back button

      </button>

      {cartItems.length === 0 ? (

        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 relative mb-6">
            <Image
              src="/empty-bag.png"
              alt="Empty Bag"
              layout="fill"
              objectFit="contain"
              priority
            />

          </div>
          <h1 className="text-2xl font-bold"> YOUR BAG IS EMPTY </h1>

          <p className="text-gray-600 mt-2"> There are no products in your bag </p>

          <div className="mt-6 space-y-3 w-full max-w-xs sm:max-w-sm">

            <button
              className="w-full bg-black text-white py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition"
              onClick={() => router.push("/mens")}
            >

              SHOP MEN

            </button>
            <button
              className="w-full bg-black text-white py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition"
              onClick={() => router.push("/womens")}
            >

              SHOP WOMEN

            </button>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">

          <h1 className="text-4xl font-bold mb-6">Shopping Cart</h1>
          <p className="text-gray-600 text-center">

            Your cart items would show up here =

          </p>
        </div>
      )}

      <div className="fixed bottom-6 right-6 z-20">
        {!chatOpen ? (
            
          <button
            className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition"
            onClick={() => setChatOpen(true)}
            aria-label="Open AI Assistant"
          >
            <FaRobot size={28} />

          </button>
        ) : (
          <div className="w-80 max-w-xs bg-white p-4 rounded-lg shadow-xl border border-gray-200 flex flex-col">

            <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
              <h2 className="text-lg font-semibold text-gray-900">AI Assistant</h2>
              <button
                onClick={() => setChatOpen(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close Chat"
              >
                <FaTimes size={20} />
              </button>

            </div>

            <div className="flex-1 h-56 overflow-y-auto mb-2 space-y-2 pr-2">

              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-lg max-w-[80%] break-words ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white ml-auto"
                      : "bg-gray-200 text-black mr-auto"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              
            </div>

            <div className="flex items-center border-t border-gray-200 pt-3">

              <input
                type="text"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm"
                placeholder="Type your message..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
              />
              
              <button
                className="ml-2 bg-black text-white px-3 py-2 rounded-md hover:bg-gray-800 transition disabled:opacity-50"
                onClick={handleSendMessage}
                disabled={!userInput.trim()}
                aria-label="Send Message"
              >
                <FaPaperPlane />
              </button>

            </div>
          </div>

        )}
      </div>

    </div>
  );
};

export default CartPage;