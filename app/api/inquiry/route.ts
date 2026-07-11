import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { inquiryFormSchema } from "@/schema/inquiry-form";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = inquiryFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 },
      );
    }

    const data = result.data;

    const inquiry = await prisma.inquiry.create({
      data: {
        fullName: data.fullName,
        companyName: data.companyName,
        jobTitle: data.jobTitle || null,
        businessEmail: data.businessEmail.toLowerCase().trim(),
        phoneNumber: data.phoneNumber,
        companyWebsite: data.companyWebsite || null,
        country: data.country,
        city: data.city || null,
        shippingCountry: data.shippingCountry,
        inquiryType: data.inquiryType,
        companyType: data.companyType,
        coffeeType: data.coffeeType,
        processingMethod: data.processingMethod || null,
        preferredOrigin: data.preferredOrigin || null,
        grade: data.grade || null,
        harvestPreference: data.harvestPreference || null,
        quantityType: data.quantityType,
        quantityRange: data.quantityRange || null,
        quantityKg: data.quantityKg || null,
        quantityBags: data.quantityBags || null,
        incoterm: data.incoterm || null,
        deliveryDate: data.deliveryDate || null,
        preferredPort: data.preferredPort || null,
        additionalRequirements: data.additionalRequirements || null,
      },
    });

    return NextResponse.json(
      { message: "Inquiry submitted successfully", id: inquiry.id },
      { status: 201 },
    );
  } catch (error) {
    console.error("Inquiry submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit inquiry. Please try again." },
      { status: 500 },
    );
  }
}
