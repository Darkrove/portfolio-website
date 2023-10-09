/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import { NextImageWidth, getNextImageUrlForRequest } from "@/utility/image";
import { AiFillApple } from "react-icons/ai";
import { BiGitRepoForked, BiSolidStar, BiSolidCircle, BiLogoGithub } from "react-icons/bi";
import ImageCaption from "./image-caption";
import ImageContainer from "./image-container";
import { Icons } from "../icons";

export default function PhotoImageResponse({
  photo,
  id,
  width,
  height,
  fontFamily,
  imagePosition = "center",
}: {
  photo: string;
  id: string;
  width: NextImageWidth;
  height: number;
  imagePosition?: "center" | "top";
  fontFamily?: string;
}) {
  let count = 1;
  const nextImageWidth = count <= 2 ? 1200 : 640;
  return (
    <ImageContainer {...{ width, height }}>
       <ImageCaption {...{ position: "top", width, height, fontFamily }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <BiLogoGithub />
            {id}
          </div>
        </ImageCaption>
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
