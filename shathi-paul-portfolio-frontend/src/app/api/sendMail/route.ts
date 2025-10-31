import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { fullName, email, message } = await req.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send mail
    await transporter.sendMail({
      from: `"${fullName}" <${process.env.EMAIL_USER}>`, // your verified Gmail
      to: process.env.EMAIL_USER, // can change to dynamic email if needed
      subject: `New Contact from ${fullName}`,
      replyTo: email, // makes Reply button go to sender’s email
      text: `
        Name: ${fullName}
        Email: ${email}
        Message: ${message}
      `,
    });

    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (error) {
    console.error("Send email error:", error);
    return NextResponse.json({ message: "Email send failed" }, { status: 500 });
  }
}
