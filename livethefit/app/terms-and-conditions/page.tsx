"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const maiDatum = () => {
  const ma = new Date();
  return ma.toLocaleDateString("hu-HU", { day: "2-digit", month: "2-digit", year: "numeric" });
};

const TermsPage = () => {


  const router = useRouter();
  const [legorduloNyitva, setLegorduloNyitva] = useState(false);
  const [lathatoSzekciok, setLathatoSzekciok] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {

    
    const gorgetesKezelo = () => {
      const szekciok = document.querySelectorAll(".fade-in-section");
      const ujLathatoSzekciok: { [key: string]: boolean } = {};

      szekciok.forEach((szekcio) => {

        const id = szekcio.id || Math.random().toString();
        const pozicio = szekcio.getBoundingClientRect();
        if (pozicio.top < window.innerHeight - 100) {
          ujLathatoSzekciok[id] = true;
        }
      });

      if (Object.keys(ujLathatoSzekciok).length > 0) {
          setLathatoSzekciok((prev) => ({ ...prev, ...ujLathatoSzekciok }));
      }

    };
    window.addEventListener("scroll", gorgetesKezelo);
    gorgetesKezelo(); 
    return () => window.removeEventListener("scroll", gorgetesKezelo);
  }, []);

  const fadeInClass = (id: string) =>
    lathatoSzekciok[id] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4";

  return (
    <div className="min-h-screen font-inter font-mono flex flex-col items-center bg-gray-50 px-6 py-12 relative">
      <div className="absolute top-6 left-6 group z-50">
        <button
          onClick={() => router.push("/")}
          className="bg-white text-black px-4 py-2 rounded-md shadow-md border border-gray-300 hover:bg-gray-200 transition flex items-center"
          onMouseEnter={() => setLegorduloNyitva(true)}
          onFocus={() => setLegorduloNyitva(true)}
        >
           Back button
           
        </button>
        {legorduloNyitva && (
          <div
            className="absolute mt-2 left-0 bg-white shadow-lg rounded-md border border-gray-200 w-48"
            onMouseLeave={() => setLegorduloNyitva(false)}
          >
            <ul className="text-black text-sm">
              <li>
                <a href="/terms-of-use" className="block px-4 py-2 hover:bg-gray-100">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="block px-4 py-2 hover:bg-gray-100">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

      <h1 className={`text-5xl md:text-6xl font-extrabold text-black text-center mt-24 transition-all duration-700 ease-out ${fadeInClass('title')}`} id="title">
        TERMS & CONDITIONS
      </h1>
      <p className={`text-orange-500 flex items-center text-sm mt-2 transition-all duration-700 ease-out delay-100 ${fadeInClass('update-date')}`} id="update-date">
         Last updated: {maiDatum()}
      </p>

      <div className="w-full flex justify-end mt-8">
        <div
          id="bg-section1"
          className={`w-full md:w-1/2 h-64 md:h-96 bg-cover bg-center rounded-lg shadow-lg transition-all duration-700 ease-out delay-200 ${fadeInClass('bg-section1')}`}
          style={{ backgroundImage: "url('/terms1.jpg')" }}
        ></div>
      </div>

      <div className="max-w-4xl text-gray-800 mt-8 space-y-6 text-justify leading-relaxed">
        <p id="intro1" className={`transition-all duration-700 ease-out ${fadeInClass('intro1')}`}>
          Welcome to LIVETHEFIT! These T&Cs explain the rules for using our site and services. We want things to be fair, clear, and make sure you're happy using our stuff.
        </p>

        <div className="w-full flex justify-start pt-8">
          <div
            id="bg-section2"
            className={`w-full md:w-1/2 h-64 md:h-96 bg-cover bg-center rounded-lg shadow-lg transition-all duration-700 ease-out ${fadeInClass('bg-section2')}`}
            style={{ backgroundImage: "url('/terms2.jpg')" }}
          ></div>
        </div>

        <p id="agreement" className={`transition-all duration-700 ease-out delay-100 ${fadeInClass('agreement')}`}>
          By using our site, you agree to these terms. If you don't agree with something, then please don't use the site. We promise to keep things safe, fair, and easy to use for everyone. Trust is important to us.
        </p>

        <div className="w-full flex justify-end pt-8">
          <div
            id="bg-section3"
            className={`w-full md:w-1/2 h-64 md:h-96 bg-cover bg-center rounded-lg shadow-lg transition-all duration-700 ease-out ${fadeInClass('bg-section3')}`}
            style={{ backgroundImage: "url('/terms3.jpg')" }}
          ></div>
        </div>

        <h2 id="heading1" className={`text-xl font-bold mt-6 pt-6 transition-all duration-700 ease-out ${fadeInClass('heading1')}`}>1. WHO WE ARE AND HOW TO CONTACT US</h2>
        <p id="who" className={`transition-all duration-700 ease-out ${fadeInClass('who')}`}>
          <strong>1.1 Who we are.</strong> LIVETHEFIT is a company registered in Delaware. Our main office is at Budapest 1.
        </p>
        <p id="contact" className={`transition-all duration-700 ease-out delay-100 ${fadeInClass('contact')}`}>
          <strong>1.2 How to contact us.</strong> Got questions, worries, or feedback? We're here to help. You can email us at support@livethefit.com or use our online help center.
        </p>

        <div className="w-full flex justify-start pt-8">
          <div
            id="bg-section4"
            className={`w-full md:w-1/2 h-64 md:h-96 bg-cover bg-center rounded-lg shadow-lg transition-all duration-700 ease-out ${fadeInClass('bg-section4')}`}
            style={{ backgroundImage: "url('/terms4.jpg')" }}
          ></div>
        </div>

        <p id="security" className={`transition-all duration-700 ease-out pt-6 ${fadeInClass('security')}`}>
          <strong>1.3 Transparency and Security.</strong> We're serious about keeping your info safe. Your data is encrypted, and we won't share personal stuff unless you say it's okay.
        </p>
        <p id="ethics" className={`transition-all duration-700 ease-out delay-100 ${fadeInClass('ethics')}`}>
          <strong>1.4 Doing Things Right.</strong> We try to run our business ethically - fair wages, sustainable materials, and being responsible all the way.
        </p>
        <p id="updates" className={`transition-all duration-700 ease-out delay-200 ${fadeInClass('updates')}`}>
          <strong>1.5 Future Updates.</strong> We might update these terms sometimes to follow the law or make things better. Check back here now and then to see what's new.
        </p>

        <footer className="w-full mt-12 border-t border-gray-300 pt-6 pb-4 text-center text-gray-600 text-sm">
          <p>
            <span className="text-orange-500 font-bold">© 2025</span> | LIVETHEFIT Limited | All Rights Reserved |{" "}
            <span className="text-orange-500 font-bold">United We Sweat</span>.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default TermsPage;