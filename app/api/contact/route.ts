import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, date, message } = await req.json();

    // Nastav si svoj SMTP server alebo Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail", // alebo smtp server
      auth: {
        user: process.env.EMAIL_USER, // napr. tvoje@gmail.com
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    await transporter.sendMail({
      from: `"Web Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO, // kam sa to má poslať
      subject: "Nová správa z webu",
      text: `
Meno a priezvisko: ${name}
Email: ${email}
Dátum: ${date}
Správa: ${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
