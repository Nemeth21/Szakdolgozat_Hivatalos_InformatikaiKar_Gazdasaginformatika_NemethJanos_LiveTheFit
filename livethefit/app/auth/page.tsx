"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "../components/Footer";

export default function AuthPage() {

  const ruter = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");

  const [jelszo, setJelszo] = useState("");
  const [jelszoMegerosites, setJelszoMegerosites] = useState("");
  const [loading, setLoading] = useState(false);
  const [hibaUzenet, setHibaUzenet] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();
    setHibaUzenet(""); 
    setLoading(true);

    if (!isLogin && jelszo !== jelszoMegerosites) {

      setHibaUzenet("   itt a két jelszó nem ugyanaz  "); 
      setLoading(false);
      return;
    }

    const endpoint = isLogin ? "/api/login" : "/api/register";

    try {
    
      const res = await fetch(endpoint, {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password: jelszo }), 

      });

      const data = await res.json();

      if (res.ok) {

        localStorage.setItem("userEmail", email);
        ruter.push("/dashboard");

      } else {

        setHibaUzenet(data.message || "  itt valami hiba történt, próbáld újra kérlek  ");
      }
    } catch (network_error) {
      console.error("  egy hálózati vagy fetch hiba történt  ", network_error);

      setHibaUzenet("  hoppá, valami hiba történt, lehet llenőrizdned kell az internetkapcsolatod  ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-500 text-white relative px-6">
      <button

        onClick={() => {
          if (window.history.length > 1) {
            ruter.back();
          } else {
            ruter.push("/");
          }
        }}

        className="absolute top-6 left-6 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition"
      >

         Vissza az elöző oldalra

      </button>

      <div className="max-w-4xl font-inter font-mono w-full flex flex-col md:flex-row justify-between items-center">

        <div className="text-left w-full md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-8xl font-bold uppercase leading-tight">

            {isLogin ?  "  Lépj be  " : "  Regisztrálj  "}
          </h1>
          <p className="text-2xl mt-4">
            {isLogin ? "  Üdv újra itt. Add meg az adataidat  " : "  Hozd létre a fiókodat a kezdéshez.  "}
          </p>

        </div>

        <div className="w-full md:w-1/2">

          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>

            <label className="text-sm">Email </label>
            
            <input

              type="email"
              className="w-full px-4 py-2 bg-transparent border border-white text-white placeholder-white focus:outline-none"
              placeholder="Add meg az emailed"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required

            />
            <label className="text-sm"> Jelszó </label>
            <input

              type="password"
              className="w-full px-4 py-2 bg-transparent border border-white text-white placeholder-white focus:outline-none"
              placeholder="Add meg a jelszavad"
              value={jelszo} 
              onChange={(e) => setJelszo(e.target.value)} 
              required
              
            />

            {!isLogin && (
              <>

                <label className="text-sm"> Jelszó megerősítése </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 bg-transparent border border-white text-white placeholder-white focus:outline-none"
                  placeholder="Erősítsd meg a jelszavad"
                  value={jelszoMegerosites} 
                  onChange={(e) => setJelszoMegerosites(e.target.value)} 
                  required
                />

              </>
            )}


            {hibaUzenet && <p className="text-red-400 text-sm">{hibaUzenet}</p>}

            <button

              type="submit"
              className="w-full bg-white text-orange-500 font-bold py-3 uppercase hover:bg-gray-200 transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Feldolgozás..." : isLogin ? "Bejelentkezés" : "Regisztráció"}

            </button>
          </form>

          <p
            className="mt-4 text-center text-sm cursor-pointer underline hover:opacity-80"
            onClick={() => {
              setIsLogin(!isLogin);
              setHibaUzenet(""); 
            }}
          >
            {isLogin ? "  Nincs még fiókod? Regisztrálj.  " : "  Van már fiókod? Jelentkezz be.  "}
          </p>
        </div>
      </div>

      <div className="mt-12 w-full">
        <Footer />
      </div>

    </div>
  );
}