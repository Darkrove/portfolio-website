/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import { NextImageWidth, getNextImageUrlForRequest } from "@/utility/image";
import { AiFillApple } from "react-icons/ai";
import { BiGitRepoForked, BiSolidStar, BiSolidCircle } from "react-icons/bi";
import ImageCaption from "./image-caption";
import ImageContainer from "./image-container";
import { Icons } from "../icons";

export default function PhotoImageResponse({
  photo,
  width,
  height,
  fontFamily,
  imagePosition = "center",
}: {
  photo: string;
  width: NextImageWidth;
  height: number;
  imagePosition?: "center" | "top";
  fontFamily?: string;
}) {
  let count = 1;
  const nextImageWidth = count <= 2 ? 1080 : 640;
  return (
    <ImageContainer {...{ width, height }}>
      <div
        style={{
          display: "flex",
          width: width,
          height: height,
          overflow: "hidden",
        }}
      >
        <img
          {...{
            src: getNextImageUrlForRequest(photo, nextImageWidth),
            style: {
              width: "100%",
              ...(imagePosition === "center" && {
                height: "100%",
              }),
              objectFit: "cover",
            },
          }}
        />
      </div>
      <ImageCaption {...{ position: "bottom", width, height, fontFamily }}>
        {photo === "Apple" && (
          <div style={{ display: "flex", gap: "8px" }}>
            <AiFillApple />
          </div>
        )}
        <div style={{ display: "flex", alignItems: "center" }}>
          <BiSolidCircle />
          Javascript
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <BiSolidStar />
          50
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <BiGitRepoForked />0
        </div>
      </ImageCaption>
    </ImageContainer>
  );
}
