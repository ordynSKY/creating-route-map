import React, { FC } from "react";
import { useAppSelector } from "../../hook";
import RouteItem from "./RouteItem";

interface IRoutes {
  setActive: (arg: boolean) => void;
  setRoute: (arg: number | undefined) => void;
}

const Routes: FC<IRoutes> = ({ setActive, setRoute }) => {
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
