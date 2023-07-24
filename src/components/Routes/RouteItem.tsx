import { Button } from "@chakra-ui/button";
import React, { FC } from "react";
import { IRouteArray } from "./types";
import TruncatedText from "./TruncatedText";
import styles from "./Routes.module.css";

const RouteItem: FC<IRouteArray> = ({ route, setActive, setRoute }) => {
  const { isFavorite, id, title, shortDescription, length } = route;

  const getDetails = () => {
    setActive(true);
    setRoute(id);
  };

  return (
    <div className={styles.routeItem}>
      <div>
        <strong style={{ display: "flex", alignItems: "center" }}>
          {isFavorite && (
            <img
              src="/star-fill.svg"
              alt=""
              style={{
                width: 16,
                marginRight: 5,
              }}
            />
          )}
          {title}
        </strong>
        <TruncatedText text={shortDescription} maxLength={50} />
      </div>
      <div>
        <strong style={{ marginRight: 10 }}>{length} km</strong>
        <Button colorScheme="blue" onClick={() => getDetails()}>
          Details
        </Button>
      </div>
    </div>
  );
};

export default RouteItem;
