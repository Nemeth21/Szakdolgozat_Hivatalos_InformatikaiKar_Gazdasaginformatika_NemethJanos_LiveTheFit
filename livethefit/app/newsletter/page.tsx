"use client";

import React, { useState } from "react"; 
import Chatbot from "../components/Chatbot";
import { useRouter } from "next/navigation";

export default function NewsletterPage() {

  const router = useRouter();

  const [urlapAdatok, setUrlapAdatok] = useState({

    email: "",
    firstName: "",
    lastName: "",

});

  const [loading, setLoading] = useState(false);
  const [uzenet, setUzenet] = useState(""); 


  const valtozasKezelo = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

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

      const valasz = await fetch("/api/newsletter", {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: urlapAdatok.email,
          firstName: urlapAdatok.firstName,
          lastName: urlapAdatok.lastName
        }),

      });

      if (valasz.ok) {
        setUzenet("Signup successful! Welcome."); 
        
        setUrlapAdatok({ email: "", firstName: "", lastName: "" });
      } else {
        const errorData = await valasz.json().catch(() => ({}));
        setUzenet(errorData.message || " nem sikerült a resgisztrácíó."); 
      }
    } catch (er) {
        console.error("  nem sikerült fel iratkozni a hírlevélre  ", er);
        setUzenet("  internetkapcsolat hiba  "); 
    } finally {
        setLoading(false); 
    }
  };

  return (
    <div className="flex font-inter font-mono flex-col md:flex-row min-h-screen relative">



      <button
        onClick={() => router.push("/")}
        className="fixed top-6 left-6 bg-white text-black px-4 py-2 rounded-md shadow-md hover:bg-gray-200 transition z-50"
      >
        ←Back to Home
      </button>


      <div className="w-full md:w-1/2 relative flex flex-col justify-center px-12 py-16 text-white"

        style={{ backgroundImage: "url('/newsletter.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>

        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-lg">

          <h1 className="text-5xl font-extrabold uppercase leading-tight">

            HEY, WANT <span className="text-orange-500">EMAILS</span> <br /> YOU'LL ACTUALLY READ?
          </h1>

          <p className="mt-4 text-lg text-gray-200">

            Here's why signing up will be the best thing you did since landing on our site .

          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div className="bg-[rgba(0,0,0,0.4)] backdrop-blur-md p-4 rounded-lg shadow-lg">

              <h2 className="font-bold text-lg flex items-center">EVENTS</h2>
              <p className="text-sm text-gray-300 mt-1">
                Get the scoop first on exclusive events (GSLC, Lift, etc.).
              </p>

            </div>
            <div className="bg-[rgba(0,0,0,0.4)] backdrop-blur-md p-4 rounded-lg shadow-lg">

              <h2 className="font-bold text-lg flex items-center"> PRODUCT DROPS </h2>
              <p className="text-sm text-gray-300 mt-1">

                Hear about new product drops early so you're ready.
              </p>

            </div>
            <div className="bg-[rgba(0,0,0,0.4)] backdrop-blur-md p-4 rounded-lg shadow-lg">

              <h2 className="font-bold text-lg flex items-center"> EXCLUSIVE CONTENT </h2>
              <p className="text-sm text-gray-300 mt-1">
                Get special deals & find out cool stuff about top brands.
              </p>

            </div>
            <div className="bg-[rgba(0,0,0,0.4)] backdrop-blur-md p-4 rounded-lg shadow-lg">

              <h2 className="font-bold text-lg flex items-center"> 40% OFF </h2>
              <p className="text-sm text-gray-300 mt-1">
                First time signing up? Get 10% off your first order.
              </p>

            </div>
          </div>
        </div>
      </div>


      <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white p-12 relative">


        <form className="w-full max-w-md space-y-5" onSubmit={kuldesKezelo}>
          <div>
            <label className="block text-gray-800 font-bold mb-1">Email Address </label>
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
            <label className="block text-gray-800 font-bold mb-1">First Name </label>
            <input
            
              type="text"
              name="firstName"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
              required
              value={urlapAdatok.firstName} 
              onChange={valtozasKezelo} 

            />
          </div>

          <div>
            <label className="block text-gray-800 font-bold mb-1">Last Name </label>
            <input

              type="text"
              name="lastName"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
              required
              value={urlapAdatok.lastName} 
              onChange={valtozasKezelo} 

            />
          </div>

          <div className="flex items-start space-x-3 pt-2">
            <input

              type="checkbox"
              id="privacyPolicy"
              className="w-4 h-4 mt-1 text-black border-gray-300 rounded focus:ring-black focus:ring-offset-0 focus:ring-1"
              required

            />
            <label htmlFor="privacyPolicy" className="text-gray-600 text-sm">
              By signing up, you agree to get emails from us (products, deals, content, etc.).
              Check out our <a href="/privacy-policy" className="underline text-orange-500 hover:text-orange-600">Privacy Policy</a> & <a href="/ca-notice" className="underline text-orange-500 hover:text-orange-600">California Notice</a>.
            </label>
          </div>
          <button

            type="submit"
            className="w-full bg-black text-white p-3 uppercase font-bold rounded-lg hover:opacity-80 transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "  Processing ...  " : "  Sign Up  "}
          </button>

          {uzenet && <p className="mt-4 text-center font-semibold text-sm">{uzenet}</p>}
        </form>

        <div className="mt-auto pt-6"> 
             <Chatbot />

        </div>
      </div>
    </div>
  );
}