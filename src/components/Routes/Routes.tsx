import { Button } from "@chakra-ui/button";
import React, { FC } from "react";
import RouteItem from "./RouteItem";
import { TRouteArray } from "./types";

interface IRoutes {
  routeArray: TRouteArray;
  setActive: (arg: boolean) => void;
}

const Routes: FC<IRoutes> = ({ routeArray, setActive }) => {
  //   const routes = [
  //     {
  //       id: 1,
  //       title: "Title",
  //       shortDescription: "short",
  //       description: "Description",
  //       length: 1.75,
  //     },
  //     {
  //       id: 2,
  //       title: "Title",
  //       shortDescription: "short",
  //       description: "Description",
  //       length: 1.75,
  //     },
  //     {
  //       id: 3,
  //       title: "Title",
  //       shortDescription: "short",
  //       description: "Description",
  //       length: 1.75,
  //     },
  //     {
  //       id: 4,
  //       title: "Title",
  //       shortDescription: "short",
  //       description: "Description",
  //       length: 1.75,
  //     },
  //     {
  //       id: 5,
  //       title: "Title",
  //       shortDescription: "short",
  //       description: "Description",
  //       length: 1.75,
  //     },
  //     {
  //       id: 6,
  //       title: "Title",
  //       shortDescription: "short",
  //       description: "Description",
  //       length: 1.75,
  //     },
  //     {
  //       id: 7,
  //       title: "Title",
  //       shortDescription: "short",
  //       description: "Description",
  //       length: 1.75,
  //     },
  //   ];

  return (
    <div>
      {routeArray.map((route, index) => (
        <RouteItem
          index={index + 1}
          route={route}
          key={index}
          setActive={setActive}
        />
      ))}
    </div>
  );
};

export default Routes;
