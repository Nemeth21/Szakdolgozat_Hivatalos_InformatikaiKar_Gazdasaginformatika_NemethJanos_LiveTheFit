"use client";

import { useState } from "react";
import Link from "next/link"; 

const FooterBottom = () => {

  const [kivalasztottOrszag, setKivalasztottOrszag] = useState("US");

  return (
    
    <footer className="w-full font-inter font-mono bg-white border-t border-gray-300 py-3 px-6 flex flex-col sm:flex-row justify-between items-center text-xs md:text-sm text-gray-600 space-y-3 sm:space-y-0">

      <div className="flex flex-col sm:flex-row items-center text-center sm:text-left space-y-2 sm:space-y-0 sm:space-x-4">

        <div className="text-xs md:text-sm text-gray-600">

          <span className="text-orange-500 font-bold">  2025</span>

          <span> LIVETHE-FIT Limited | All Rights Reserved | </span>

          <span className="text-orange-500 font-bold">  We Do LiftStyle. Only LifeStyle.  </span>
        </div>


        <div className="flex space-x-3 text-xs md:text-sm text-gray-500">

          <Link href="/terms-and-conditions" className="hover:underline hover:text-gray-800 transition-colors">

            T&Cs

          </Link>

          <Link href="/terms-of-use" className="hover:underline hover:text-gray-800 transition-colors">

            Terms of Use

          </Link>

          <Link href="/cookie-policy" className="hover:underline hover:text-gray-800 transition-colors">

            Cookie Policy

          </Link>

        </div>
      </div>

      <div className="flex items-center space-x-2">
        <select
          value={kivalasztottOrszag} 
          onChange={(e) => setKivalasztottOrszag(e.target.value)} 
          className="bg-transparent text-gray-600 focus:outline-none cursor-pointer text-xs md:text-sm border border-gray-200 rounded px-2 py-1 hover:border-gray-400 transition-colors" // Kicsit szebb stílus
          aria-label="Select country" 
        >
          
          <option value="US"> RO </option>
          <option value="UK"> UK </option>
          <option value="DE"> DE </option>
          <option value="FR"> FR </option>
          <option value="HU"> HU </option>

        </select>
      </div>
    </footer>
  );
};

export default FooterBottom;