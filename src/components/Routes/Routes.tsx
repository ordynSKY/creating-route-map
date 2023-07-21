import { Button } from "@chakra-ui/button";
import React, { FC } from "react";
import { useAppSelector } from "../../hook";
import RouteItem from "./RouteItem";
import IRoute, { TRouteArray } from "./types";

interface IRoutes {
  //   routeArray: TRouteArray;
  setActive: (arg: boolean) => void;
  setRoute: (arg: number | undefined) => void;
}

const Routes: FC<IRoutes> = ({ setActive, setRoute }) => {
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

  const routeArray = useAppSelector((state) => state.routes.list);

  return (
    <div>
      {routeArray.map((route, index) => (
        <RouteItem
          index={index}
          route={route}
          key={index}
          setActive={setActive}
          setRoute={setRoute}
        />
      ))}
    </div>
  );
};

export default Routes;
