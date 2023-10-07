import { NextRequest } from "next/server";
import { z } from "zod";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const id = searchParams.get("username") || "";
  try {
    const response = await fetch(
      "https://umami-darkspace.vercel.app/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: process.env.UMAMI_USERNAME,
          password: process.env.UMAMI_PASSWORD,
        }),
      }
    );

    const accessToken = await response.json();
    const resp = await fetch(
      `https://umami-darkspace.vercel.app/api/websites/${id}/stats?start_at=1666463400000&end_at=${Date.now()}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken?.token}`,
        },
      }
    );

    const analytics = await resp.json();

    return new Response(JSON.stringify(analytics), {
      status: 200,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log(error);
      return Response.json({ error: error.issues }, { status: 400 });
    }
    return Response.json(
      { error, message: "Failed to get the data" },
      { status: 500 }
    );
  }
}
