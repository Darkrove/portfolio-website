import { NextRequest, NextResponse } from "next/server";

const query = `query GetUserProfile($username: String!, $limit: Int!) {
  allQuestionsCount {
    difficulty
    count
  }
  userProfile: matchedUser(username: $username) {
    contributions {
      points
    }
    profile {
      reputation
      ranking
    }
    submissionCalendar
    submitStats {
      acSubmissionNum {
        difficulty
        count
        submissions
      }
      totalSubmissionNum {
        difficulty
        count
        submissions
      }
    }
  }
  languageStats: matchedUser(username: $username) {
    languageProblemCount {
      languageName
      problemsSolved
    }
  }
  recentAcSubmissions: recentAcSubmissionList(username: $username, limit: $limit) {
    id
    title
    titleSlug
    timestamp
  }
}`;

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const username = searchParams.get("username") || "";
  const data = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Referer: "https://leetcode.com",
    },
    body: JSON.stringify({
      query: query,
      variables: { username: username, limit: 10 },
    }),
  }).then((result) => result.json());

  return new Response(JSON.stringify(data), {
    status: 200,
  });
}
