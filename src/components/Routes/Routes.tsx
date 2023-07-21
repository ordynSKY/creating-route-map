import React, { FC, useMemo } from "react";
import { useAppSelector } from "../../hook";
import RouteItem from "./RouteItem";

interface IRoutes {
  setActive: (arg: boolean) => void;
  setRoute: (arg: number | undefined) => void;
}

const Routes: FC<IRoutes> = ({ setActive, setRoute }) => {
  const routeArray = useAppSelector((state) => state.routes.list);

  const searchRoute = useAppSelector((state) => state.routes.searchRoute);

  const searchResult = useMemo(() => {
    console.log("routeArray: ", routeArray);
    console.log("searchRoute: ", searchRoute);

    return routeArray?.filter(({ title, description }) => {
      const searchTolowerCase = searchRoute.toLowerCase();

      const isSearchedText = searchRoute
        ? title.toLowerCase().includes(searchTolowerCase)
        : true;
      console.log(
        "lowercase: ",
        title.toLowerCase().includes(searchTolowerCase)
      );
      return isSearchedText;
    });
  }, [searchRoute, routeArray]);

  console.log("searchro, ", searchResult);

  return (
    <div>
      {searchResult.map((route, index) => (
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
