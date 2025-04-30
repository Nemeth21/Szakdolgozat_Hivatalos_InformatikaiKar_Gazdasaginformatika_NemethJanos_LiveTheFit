"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function AccessibilityStatement() {

  const ruter = useRouter(); 

  return (

    <div className="relative min-h-screen font-mono bg-cover bg-center" style={{ backgroundImage: "url('/terms1.jpg')" }}>

      <button

        onClick={() => ruter.back()}
        className="absolute top-6 left-6 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition z-50"
      >
         Vissza az elöző oldalra.

      </button>

      <div className="absolute inset-0 bg-black opacity-50 z-40"></div>

      <div className="relative z-50 max-w-4xl mx-auto p-8">
        <div className="bg-gray-800 bg-opacity-60 backdrop-blur-xl p-12 rounded-xl shadow-2xl">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-white">
            Akadálymentesség Nálunk 
          </h1>

          <p className="mb-6 text-lg text-gray-200">

            Az a célunk, hogy ezt a weboldalt bárki tudja használni, simán.
            Ha bármi gondod van a tartalommal, a navigációval, vagy találsz valamit, ami szerinted nem user-friendly a fogyatékossággal élőknek,
            vagy van ötleted, hogyan lehetne jobb, dobj egy mailt ide.

            <a href="mailto:livethefit.accessblity@livethefit.com" className="text-white underline font-semibold">
              írj nekünk
            </a>. 

          </p>


          <p className="mb-6 text-lg text-gray-200">
            Fontos nekünk, hogy itt mindenki jól érezze magát. A melóknál is fair play van, már a jelentkezésnél kezdődik, szóval no para.
          </p>

          <p className="mb-6 text-lg text-gray-200">
            Ha fogyatékossággal élsz (törvény szerint), és a melóhoz szükséges minimum skillek megvannak, fixen behívunk interjúra,
            hogy megmutathasd, mit tudsz. Nem kérdés.
          </p>

          <p className="mb-6 text-lg text-gray-200">
            Ha speciális igényeid vagy fogyatékosságod miatt kell valami extra a kiválasztásnál (ez az <strong>ésszerű alkalmazkodás </strong>),
            szólj, igyekszünk megoldani. Mindenkit egyenlően kezelünk, a diszkriminációt meg felejtsd el, az itt nem pálya.
          </p>

          <p className="mb-6 text-lg text-gray-200">
            Minden feedbacket megnézünk és felhasználunk, hogy folyamatosan jobbá tegyük az oldalt akadálymentesség szempontjából. Szóval jöhetnek az észrevételek!
          </p>

          <p className="mt-10 text-md text-black font-semibold">

            <a href="mailto:livethefit.accessblity@livethefit.com" className="underline text-black">

              livethefit.accessblity@livethefit.com

            </a> címre. A garantált interjút meg a jelentkezési formon tudod kérni.
            
          </p>
        </div>
      </div>
    </div>
  );
}