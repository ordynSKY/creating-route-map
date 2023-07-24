import React, { FC } from "react";
import styles from "./Routes.module.css";
import { ITruncatedText } from "./types";

const TruncatedText: FC<ITruncatedText> = ({ text, maxLength }) => {
  const truncatedText =
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return <div className={styles.shortDescription}>{truncatedText}</div>;
};

export default TruncatedText;
