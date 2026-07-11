import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { FooterFormSchema } from "@/schema/footer-form";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate
    const result = FooterFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    const normalizedEmail = result.data.email.toLowerCase().trim();

    // Check if already subscribed
    const existing = await prisma.newsletterSubscriber.findUnique({
      where: { email: normalizedEmail },
    });

    if (existing) {
      return NextResponse.json(
        {
          message: "You're already subscribed! We'll keep you updated.",
        },
        { status: 409 },
      );
    }

    // Create new subscriber
    const subscriber = await prisma.newsletterSubscriber.create({
      data: {
        email: normalizedEmail,
      },
    });

    return NextResponse.json(
      {
        message: "Successfully subscribed",
        subscriber: {
          id: subscriber.id,
          email: subscriber.email,
          subscribedAt: subscriber.subscribedAt,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 },
    );
  }
}
