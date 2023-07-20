import { Button } from "@chakra-ui/button";
import React, { FC } from "react";
import { IRouteArray } from "./types";

const RouteItem: FC<IRouteArray> = ({ index, route, setActive }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "20px 0 20px 0",
      }}
    >
      <div>
        <strong>
          {index}. {route.title}
        </strong>
        <div>{route.shortDescription}</div>
      </div>
      <div>
        <strong style={{ marginRight: 10 }}>{route.length}</strong>
        <Button colorScheme="blue" onClick={() => setActive(true)}>
          Details
        </Button>
      </div>
    </div>
  );
};

export default RouteItem;
