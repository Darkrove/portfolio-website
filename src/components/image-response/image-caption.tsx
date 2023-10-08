import { ReactNode } from "react";

interface ImageCaptionProps {
  width: number;
  height: number;
  fontFamily?: string;
  subhead?: ReactNode;
  children: ReactNode;
  position?: "top" | "bottom";
}

export default function ImageCaption({
  width,
  height,
  fontFamily,
  subhead,
  children,
  position = "bottom",
}: ImageCaptionProps) {
  const isTopPosition = position === "top";

  const captionStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    color: "white",
    background: `linear-gradient(to ${
      isTopPosition ? "top" : "bottom"
    }, rgba(0,0,0,0), rgba(0,0,0,0.3), rgba(0,0,0,0.7))`, // Adjust gradient angle
    backgroundBlendMode: "multiply",
    fontFamily,
    fontSize: height * 0.089,
    lineHeight: 1,
    left: 0,
    right: 0,
  };

  if (isTopPosition) {
    captionStyles.top = 0;
    captionStyles.paddingBottom = height * 0.6; // Reverse padding
    captionStyles.paddingTop = height * 0.08;
    captionStyles.paddingLeft = captionStyles.paddingRight = height * 0.0875;
  } else {
    captionStyles.bottom = 0;
    captionStyles.paddingBottom = height * 0.08;
    captionStyles.paddingTop = height * 0.6;
    captionStyles.paddingLeft = captionStyles.paddingRight = height * 0.0875;
  }

  return (
    <div style={captionStyles}>
      {subhead && (
        <div
          style={{
            display: "flex",
            gap: height * 0.053,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {subhead}
        </div>
      )}
      <div
        style={{
          display: "flex",
          gap: height * 0.053,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </div>
    </div>
  );
}
