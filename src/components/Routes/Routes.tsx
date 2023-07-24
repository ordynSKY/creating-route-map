import React, { FC, useMemo } from "react";
import { useAppSelector } from "../../store/hook";
import RouteItem from "./RouteItem";
import { IRoutes } from "./types";

const Routes: FC<IRoutes> = ({ setActive, setRoute }) => {
  const routeArray = useAppSelector((state) => state.routes.list);

  const searchRoute = useAppSelector((state) => state.routes.searchRoute);

  const searchResult = useMemo(() => {
    const searchArray = routeArray?.filter(({ title, shortDescription }) => {
      const searchTolowerCase = searchRoute.toLowerCase();

      const isSearchedText = searchRoute
        ? title.toLowerCase().includes(searchTolowerCase)
        : true;

      const isSearchedDescText = searchRoute
        ? shortDescription.toLowerCase().includes(searchTolowerCase)
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
