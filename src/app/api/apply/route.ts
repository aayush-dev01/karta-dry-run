import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const required = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "dateOfBirth",
      "gender",
      "state",
      "district",
      "currentClass",
      "schoolType",
      "school",
      "program",
      "message",
      "consent",
    ];

    for (const field of required) {
      if (!body[field] || String(body[field]).trim() === "") {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    if (String(body.message).length < 50) {
      return NextResponse.json(
        { error: "Message must be at least 50 characters" },
        { status: 400 }
      );
    }

    console.log("[Karta Application]", {
      ...body,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
