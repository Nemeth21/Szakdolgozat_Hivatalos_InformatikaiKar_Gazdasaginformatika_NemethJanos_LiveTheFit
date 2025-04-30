"use client";

import { useState } from "react";
import Chatbot from "../components/Chatbot";
import { useRouter } from "next/navigation";

export default function ContactPage() {


  const ruter = useRouter();
  const [urlapAdatok, setUrlapAdatok] = useState({

    name: "",
    email: "",
    message: "",

  });

  const [loading, setLoading] = useState(false); 
  const [uzenet, setUzenet] = useState(""); 

  
  const valtozasKezelo = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target; 
    setUrlapAdatok((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  const kuldesKezelo = async (e: React.FormEvent) => {

    e.preventDefault();
    setLoading(true);
    setUzenet(""); 

    try {

      const valasz = await fetch("/api/contact", {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(urlapAdatok), 

      });

      if (valasz.ok) {

        setUzenet("  az üzenet sikeresen átment  "); 
        setUrlapAdatok({ name: "", email: "", message: "" }); 
      } else
       {
        const errorData = await valasz.json().catch(() => ({})); 
        setUzenet(errorData.message || "  hiba történt az üzenet küldésben  "); 

      }

    } catch (er) {

      console.error("  egy form hiba lesz a rendszerben   ", er);
      setUzenet("  intenet probléma lesz  "); 
    } finally {
      setLoading(false); 
    }

  };

  return (
    <div className="flex flex-col font-mono md:flex-row min-h-screen relative">
      <button
        onClick={() => ruter.back()}
        className="absolute top-6 left-6 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition z-50"
      >

         Back button

      </button>

      <div className="w-full md:w-1/2 bg-cover bg-center flex items-center justify-center px-8 py-16 text-white relative"
        style={{ backgroundImage: "url('/cookies1.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-lg text-center">
          <h1 className="text-4xl font-extrabold uppercase leading-tight mb-4 text-shadow-lg">

            Reach Out to Us here

          </h1>

          <p className="text-lg text-gray-200 mb-4 text-shadow-lg">

            Got questions or need support? We're here to help you Mr/Mrs ..
            
          </p>

          <div className="mt-8 text-center ">

            <h2 className="font-bold text-lg text-shadow-md">Our Address</h2>
            <p className="text-sm text-gray-300">  Debreceni cím  </p>
            <h2 className="font-bold text-lg mt-4 text-shadow-md">  Phone  </h2>
            <p className="text-sm text-gray-300">  +36 ( 30 665 554 17)  </p>
            <h2 className="font-bold text-lg mt-4 text-shadow-md">  Email  </h2>
            <p className="text-sm text-gray-300">  support@livethefit.com  </p>

          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-gray-100 text-black p-12 flex flex-col items-center justify-center relative">

        <form className="w-full max-w-lg space-y-6 bg-white bg-opacity-90 shadow-xl p-8 rounded-lg mb-4" onSubmit={kuldesKezelo}>
          <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">  Contact Us  </h2>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">  Name  </label>
            <input

              type="text"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
              required
              value={urlapAdatok.name}
              onChange={valtozasKezelo}
            />

          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">   Email  </label>
            <input

              type="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
              required
              value={urlapAdatok.email}
              onChange={valtozasKezelo}
            />

          </div>
          <div>

            <label className="block text-gray-700 text-sm font-bold mb-2">  Message  </label>
            <textarea

              name="message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
              required
              value={urlapAdatok.message}
              onChange={valtozasKezelo}
              rows={5}

            />

          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-3 uppercase font-bold rounded-lg hover:opacity-80 transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Sending ... " : "Send Message"}

          </button>
        </form>

        {uzenet && <p className="text-center text-base font-semibold text-gray-800 bg-white bg-opacity-70 px-4 py-2 rounded">{uzenet}</p>}

        <Chatbot />
      </div>
    </div>


  );

}