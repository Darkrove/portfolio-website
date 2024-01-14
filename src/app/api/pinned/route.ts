import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const username = searchParams.get("username") || "";
    if (!username) {
      return new Response("Missing 'username' parameter", {
        status: 400,
      });
    }
    const query = `
      query {
        user(login: "${username}") {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                name
                description
                url
                homepageUrl
                languages(first: 1) {
                  nodes {
                    name
                    color
                  }
                }
                stargazerCount
          forkCount
              }
            }
          }
        }
      }
    `;

    const data = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://yourwebsite.com", // Change to your actual website URL
        Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query: query,
      }),
    });

    if (!data.ok) {
      throw new Error(`GitHub API request failed with status ${data.status}`);
    }

    const jsonData = await data.json();

    return new Response(JSON.stringify(jsonData.data.user), {
      status: 200,
    });
  } catch (error) {
    // Handle errors
    console.error("Error fetching data from GitHub API:", error);

    return new Response("Internal Server Error", {
      status: 500,
    });
  }
}
