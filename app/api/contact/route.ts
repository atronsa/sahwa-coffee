import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { contactFormSchema } from "@/schema/contact-form";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate
    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 },
      );
    }

    // Save to database
    const message = await prisma.contactMessage.create({
      data: {
        name: result.data.name.trim(),
        email: result.data.email.toLowerCase().trim(),
        subject: result.data.subject.trim(),
        message: result.data.message.trim(),
      },
    });

    return NextResponse.json(
      {
        message: "Message sent successfully",
        id: message.id,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }
}
