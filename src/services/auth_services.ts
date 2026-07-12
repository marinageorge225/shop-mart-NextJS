"use client";
import { RegisterSchema } from "@/schemas/auth_schemas";

export async function registerUser(data: RegisterSchema) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );
  return response.json();
}
