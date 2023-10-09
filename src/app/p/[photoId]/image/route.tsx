import { IMAGE_OG_SIZE } from "@/constants/image";
import PhotoImageResponse from "@/components/image-response/photo-image-response";
import { getIBMPlexMonoMedium } from "@/config/font";
import { ImageResponse, NextRequest } from "next/server";

const getPhotoCached = (id: string) => {
  return `/${id}-v2.png`;
};

export const runtime = "edge";

export async function GET(
  _: NextRequest,
  context: { params: { photoId: string }; searchParams: {} }
) {
  const id = context.params.photoId;
  const { searchParams } = _.nextUrl;
  const language = searchParams.get("language") || "0";
  const star = searchParams.get("star") || "0";
  const fork = searchParams.get("fork") || "0";
  const [photo, { fontFamily }] = await Promise.all([
    getPhotoCached(id),
    getIBMPlexMonoMedium(),
  ]);
  if (!photo) {
    return new Response("Photo not found", { status: 404 });
  }

  const { width, height } = IMAGE_OG_SIZE;

  return new ImageResponse(
    (
      <PhotoImageResponse
        {...{ photo, id, width, height, fontFamily, language, star, fork }}
      />
    ),
    { height, width }
  );
}
