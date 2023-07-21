import React, { FC } from "react";

interface ITruncatedText {
  text: string;
  maxLength: number;
}

const TruncatedText: FC<ITruncatedText> = ({ text, maxLength }) => {
  const truncatedText =
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return (
    <div
      style={{
        maxWidth: "400px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }}
    >
      {truncatedText}
    </div>
  );
};

export default TruncatedText;
