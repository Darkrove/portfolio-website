/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import { NextImageWidth, getNextImageUrlForRequest } from "@/utility/image";
import { IMAGE_OG_SIZE } from "@/constants/image";
import { getIBMPlexMonoMedium } from "@/config/font";
import { AiFillApple } from "react-icons/ai";
import {
  BiGitRepoForked,
  BiLogoGithub,
  BiSolidStar,
  BiSolidCircle,
} from "react-icons/bi";
import ImageCaption from "@/components/image-response/image-caption";
import ImageContainer from "@/components/image-response/image-container";

interface Props {}
const getPhotoCached = (id: string) => {
  return `/${id}-v2.png`;
};

const page = async (context: { params: { photoId: string } }) => {
  let count = 1;
  const imagePosition = "center";
  const { width, height } = IMAGE_OG_SIZE;
  const nextImageWidth = count <= 2 ? 1200 : 640;
  const [photo, { fontFamily }] = await Promise.all([
    getPhotoCached(context.params.photoId),
    getIBMPlexMonoMedium(),
  ]);
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <ImageContainer {...{ width, height }}>
        <ImageCaption {...{ position: "top", width, height, fontFamily }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <BiLogoGithub />
            {context.params.photoId}
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
    </div>
  );
};

export default page;
