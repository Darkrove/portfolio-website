import { NextRequest, NextResponse } from "next/server";
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { searchParams } = request.nextUrl;
  const username = params.slug || searchParams.get("username") || "";
  return new Response(`Hello, ${username}`, {
    status: 200,
  });
}
