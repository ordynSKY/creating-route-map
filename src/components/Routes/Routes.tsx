import React, { FC } from "react";
import { useAppSelector } from "../../hook";
import RouteItem from "./RouteItem";
import { IRouteBlock } from "./types";

const Routes: FC<IRouteBlock> = ({ setActive, setRoute }) => {
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
