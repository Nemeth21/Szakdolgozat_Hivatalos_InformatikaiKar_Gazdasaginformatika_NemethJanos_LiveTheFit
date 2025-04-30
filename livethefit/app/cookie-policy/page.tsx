"use client";

import React, { useState, useEffect } from "react";

import { useRouter } from "next/navigation";


const maiDatum = () => {

  const ma = new Date();

  return ma.toLocaleDateString("hu-HU", { day: "2-digit", month: "2-digit", year: "numeric" });

};

const CookiePolicy = () => {

  const router = useRouter();

  const [legorduloNyitva, setLegorduloNyitva] = useState(false);

  const [lathatoSzekciok, setLathatoSzekciok] = useState<{ [key: string]: boolean }>({});


  useEffect(() => {

    const gorgetesKezelo = () => {

        const szekciok = document.querySelectorAll(".fade-in-section");
      const ujLathatoSzekciok: { [key: string]: boolean } = {};

      szekciok.forEach((szekcio) => {
        const pozicio = szekcio.getBoundingClientRect();
        if (pozicio.top < window.innerHeight - 100) {
          ujLathatoSzekciok[szekcio.id] = true;
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
                <a href="/terms-and-conditions" className="block px-4 py-2 hover:bg-gray-100">
                  T&Cs
                </a>
              </li>
              <li>
                <a href="/terms-of-use" className="block px-4 py-2 hover:bg-gray-100">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>


      <h1 className={`text-5xl md:text-6xl font-extrabold text-black text-center mt-24 transition-all duration-700 ease-out ${fadeInClass('title')}`} id="title">

        COOKIE POLICY

      </h1>

      <p className={`text-orange-500 flex items-center text-sm mt-2 transition-all duration-700 ease-out delay-100 ${fadeInClass('update-date')}`} id="update-date">
        Last updated: {maiDatum()}
      </p>


      <div className="w-full flex justify-end mt-8">

        <div
          id="image1"
          className={`w-full md:w-1/2 h-64 md:h-96 bg-cover bg-center rounded-lg shadow-lg transition-all duration-700 ease-out delay-200 ${fadeInClass('image1')}`}
          style={{ backgroundImage: "url('/cookies1.jpg')" }}

        ></div>

      </div>


      <div className="max-w-4xl text-gray-800 mt-8 space-y-6 text-justify leading-relaxed">
        <p id="intro1" className={`transition-all duration-700 ease-out ${fadeInClass('intro1')}`}>

          Hey! This is LIVETHEFIT's Cookie Policy. Basically, we explain here how we use cookies and similar stuff on our site to make your experience better, personalize things, and keep it secure.
        </p>
        <p id="intro2" className={`transition-all duration-700 ease-out delay-100 ${fadeInClass('intro2')}`}>
          Cookies are small text files that help us see what users do, check performance, and show ads that might interest you. If you keep Browse, you're okay with us using cookies.
        </p>


        <div className="w-full flex justify-start pt-8">
          <div
            id="image2"
            className={`w-full md:w-1/2 h-64 md:h-96 bg-cover bg-center rounded-lg shadow-lg transition-all duration-700 ease-out ${fadeInClass('image2')}`}

            style={{ backgroundImage: "url('/cookies2.jpg')" }}

          ></div>

        </div>


        <h2 id="heading1" className={`text-2xl font-bold mt-6 pt-6 transition-all duration-700 ease-out ${fadeInClass('heading1')}`}>1. WHAT ARE COOKIES?  </h2>
        <p id="what1" className={`transition-all duration-700 ease-out ${fadeInClass('what1')}`}>
          They're tiny files saved on your device (phone, computer, etc.) that let websites remember stuff about you, like your settings, login info, or what you looked at, to make things feel more personal.
        </p>
        <p id="what2" className={`transition-all duration-700 ease-out delay-100 ${fadeInClass('what2')}`}>
          There are different kinds, like session cookies (gone when you close your browser) and persistent cookies (stick around for a set time).
        </p>


        <div className="w-full flex justify-end pt-8">
          <div
            id="image3"
            className={`w-full md:w-1/2 h-64 md:h-96 bg-cover bg-center rounded-lg shadow-lg transition-all duration-700 ease-out ${fadeInClass('image3')}`}
            style={{ backgroundImage: "url('/cookies3.jpg')" }}
          ></div>
        </div>


        <h2 id="heading2" className={`text-2xl font-bold mt-6 pt-6 transition-all duration-700 ease-out ${fadeInClass('heading2')}`}>2. WHY DO WE USE COOKIES?</h2>
        <p id="why1" className={`transition-all duration-700 ease-out ${fadeInClass('why1')}`}>

          We use them to make the site work better for you:

        </p>
        <ul id="why-list" className={`list-disc pl-6 space-y-1 transition-all duration-700 ease-out delay-100 ${fadeInClass('why-list')}`}>

          <li>To remember your login so you don't have to type it every time.</li>
          <li>To see how people use the site so we can improve it.</li>
          <li>To show you content based on what you like.</li>
          <li>To show ads that actually match your interests.</li>

        </ul>


        <div className="w-full flex justify-start pt-8">
          <div
            id="image4"
            className={`w-full md:w-1/2 h-64 md:h-96 bg-cover bg-center rounded-lg shadow-lg transition-all duration-700 ease-out ${fadeInClass('image4')}`}
            style={{ backgroundImage: "url('/cookies4.jpg')" }}
          ></div>
        </div>


        <h2 id="heading3" className={`text-2xl font-bold mt-6 pt-6 transition-all duration-700 ease-out ${fadeInClass('heading3')}`}>3. YOUR COOKIE CHOICES </h2>

        <p id="manage1" className={`transition-all duration-700 ease-out ${fadeInClass('manage1')}`}>
          You're in control of the cookies here. Here's how you can manage them:
        </p>

        <ul id="manage-list" className={`list-disc pl-6 space-y-1 transition-all duration-700 ease-out delay-100 ${fadeInClass('manage-list')}`}>

          <li>Change your browser settings to block or delete cookies (check your browser's help section).</li>
          <li>Use our Cookie Settings panel (if we have one) to choose which types you allow.</li>
          <li>Check out the cookie policies of third-party services we use (like Google Analytics) too.</li>

        </ul>


        <footer className="w-full mt-12 border-t border-gray-300 pt-6 pb-4 text-center text-gray-600 text-sm">
          <p>

             2025 | LIVETHEFIT Hun. | All Rights Reserved |

            <span className="text-orange-500 font-bold">Train well, Eat Clean, Train Mean etc ... </span>.

          </p>
        </footer>
      </div>
    </div>

  );
  
};

export default CookiePolicy;