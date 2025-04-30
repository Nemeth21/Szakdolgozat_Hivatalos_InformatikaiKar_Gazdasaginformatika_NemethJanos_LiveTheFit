import { NextResponse } from "next/server";
import { csatlakozas } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {

  try {

    await csatlakozas(); 

    const { email, password } = await req.json(); 

    if (!email || !password) {

      return NextResponse.json(
        { message: "  meg kell adni emailt és jelszót is, hogy működjön  " },
        { status: 400 }
      );

    }

    const letezoFelhasznalo = await User.findOne({ email }); 


    if (letezoFelhasznalo) {

      return NextResponse.json(
        { message: "  ez az email cím már használatban van  " },
        { status: 400 }
      );

    }


    const titkositott_Jelszo = await bcrypt.hash(password, 30); 


    const ujFelhasznaloLetrhozasa = new User({ email, password: titkositott_Jelszo });
    
    await ujFelhasznaloLetrhozasa.save();


    return NextResponse.json(
      { success: true, message: "   sikerült a regisztráció   ", email: ujFelhasznaloLetrhozasa.email }, 
      { status: 201 } 
    );

  } catch (hiba) { 

    console.error("  regisztrációs hiba történt  ", hiba); 

    return NextResponse.json(
      { message: "  valami szerver hiba csúszott be a rendszerbe   " }, 
      { status: 500 }
    );
  }

}