import React, { useState } from "react";
import Header from "../components/Header/Header";
import RouteBlock from "../components/Routes/RouteBlock";
import Details from "../components/Details/Details";
import Modal from "../components/Modal/Modal";
import IRoute, { TRouteArray } from "../components/Routes/types";
import { useAppDispatch } from "../hook";

const HomePage = () => {
  //   const [routeArray, setRouteArray] = useState<TRouteArray>([]);

  const [modalActive, setModalActive] = useState<boolean>(false);

  const [detailsActive, setDetailsActive] = useState<boolean>(false);

  const [route, setRoute] = useState<number>();

  //   const oneNewRoute = (route: IRoute) => {
  //     setRouteArray((prev) => [...(prev || []), route]);
  //     setRoute(route);
  //   };

  //   const deleteRoute = (id: number | undefined) => {
  //     setRouteArray((routes) => routes?.filter((el) => el.id !== id) || null);
  //     setDetailsActive(false);
  //   };
  return (
    <>
      <Header setActive={setModalActive} />
      <div className="section">
        <RouteBlock setActive={setDetailsActive} setRoute={setRoute} />
        <Details
          active={detailsActive}
          routeId={route}
          //   deleteRoute={deleteRoute}
          setActive={setDetailsActive}
        />
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  );
};

export default HomePage;
