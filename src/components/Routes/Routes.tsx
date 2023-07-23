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

  const searchDescription = useAppSelector(
    (state) => state.routes.searchDescription
  );

  const searchResult = useMemo(() => {
    console.log("routeArray: ", routeArray);
    console.log("searchRoute: ", searchRoute);

    const searchArray = routeArray?.filter(({ title, description }) => {
      const searchTolowerCase = searchRoute.toLowerCase();

      const searchTolowerCaseDesc = searchDescription?.toLowerCase();

      const isSearchedText = searchRoute
        ? title.toLowerCase().includes(searchTolowerCase)
        : true;

      const isSearchedDescText = searchDescription
        ? description.toLowerCase().includes(searchTolowerCaseDesc)
        : true;
      return isSearchedText || isSearchedDescText;
    });
    return searchArray.sort((a, b) => {
      if (a.isFavorite > b.isFavorite) {
        return -1;
      }
      if (a.isFavorite < b.isFavorite) {
        return 1;
      }
      return 0;
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
