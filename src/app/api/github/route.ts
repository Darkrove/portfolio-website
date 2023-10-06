import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

type Repository = {
  stargazers_count: number;
  fork: boolean;
};

type User = {
  name: string;
  location: string;
  email: string;
  avatar_url: string;
  login: string;
  public_repos: number;
  followers: number;
};

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const username = searchParams.get("username") || "";
  try {
    const me: User = await fetch(
      `https://api.github.com/users/${username}`
    ).then((result) => result.json());

    const repos: Repository[] = await fetch(
      `https://api.github.com/users/${username}/repos`
    ).then((result) => result.json());

    const mine = repos.filter((repo) => !repo.fork);
    const stars = mine.reduce((acc, curr) => acc + curr.stargazers_count, 0);

    return new Response(
      JSON.stringify({
        name: me.name,
        login: me.login,
        avatar: me.avatar_url,
        email: me.email,
        stars,
        repos: me.public_repos,
        followers: me.followers,
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
