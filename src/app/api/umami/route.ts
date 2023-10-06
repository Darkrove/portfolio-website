import { NextRequest, NextResponse } from "next/server";

import { getAnalytics } from "@/lib/umami";

export async function GET(request: NextRequest) {
  const resp = await getAnalytics();
  const analytics = await resp.json();

  return new Response(JSON.stringify(analytics), {
    status: 200,
  });
}
