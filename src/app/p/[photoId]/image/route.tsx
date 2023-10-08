import { IMAGE_OG_SIZE } from "@/constants/image";
import PhotoImageResponse from "@/components/image-response/photo-image-response";
import { getIBMPlexMonoMedium } from "@/config/font";
import { ImageResponse } from "next/server";

const getPhotoCached = (id: string) => {
  return `/${id}-v2.png`;
};

export const runtime = "edge";

export async function GET(
  _: Request,
  context: { params: { photoId: string } }
) {
  const [photo, { fontFamily }] = await Promise.all([
    getPhotoCached(context.params.photoId),
    getIBMPlexMonoMedium(),
  ]);
  if (!photo) {
    return new Response("Photo not found", { status: 404 });
  }

  const { width, height } = IMAGE_OG_SIZE;

  return new ImageResponse(
    <PhotoImageResponse {...{ photo, width, height, fontFamily }} />
  );
}
