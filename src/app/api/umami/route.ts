import { z } from "zod";

const dynamic = "force-dynamic";

async function getAccessToken() {
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

  // Check if the response is okay (status code 200)
  if (!response.ok) {
    const errorResponse = await response.json(); // Read the response body once

    console.log("Error response:", errorResponse);

    // Throw an error with the error response details
    throw new Error("Login failed. Status code: " + response.status);
  }

  // Read the response body once and store it in a variable
  const accessToken = await response.json();

  return accessToken;
}

async function getAnalytics() {
  const resp = await getAccessToken();

  return fetch(
    `https://umami-darkspace.vercel.app/api/websites/6c2507b8-6434-42d4-8775-f0fea81d3b90/stats?start_at=1666463400000&end_at=${Date.now()}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${resp.token}`,
      },
    }
  );
}

export async function GET(request: Request) {
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
      `https://umami-darkspace.vercel.app/api/websites/6c2507b8-6434-42d4-8775-f0fea81d3b90/stats?start_at=1666463400000&end_at=${Date.now()}`,
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
