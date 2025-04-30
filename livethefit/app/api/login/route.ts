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
        { message: "  meg kell adni mind a kettőt, emailt és a jelszót is  " },
        { status: 400 }
      );
    }


    const felhasznalo = await User.findOne({ email });


    if (!felhasznalo || !(await bcrypt.compare(password, felhasznalo.password))) {

      return NextResponse.json(
        { message: "  rossz lett az email cím vagy a jelszó  "},
        { status: 401 } 
      );

    }


    return NextResponse.json(

        { success: true, message: "  sikerült bejelentkezni  ", email: felhasznalo.email },
        { status: 200 }

    );


  } catch (hiba) {
    console.error("  itt egy bejelentkezési hiba történt  ", hiba); 
    return NextResponse.json(
        { message: "  valamilyen szerver hiba történt  " }, 
        { status: 500 }
    );


  }

}