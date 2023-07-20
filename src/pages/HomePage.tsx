import React, { useState } from "react";
import Header from "../components/Header/Header";
import RouteBlock from "../components/Routes/RouteBlock";
import Details from "../components/Details/Details";
import Modal from "../components/Modal/Modal";
import IRoute, { TRouteArray } from "../components/Routes/types";

const HomePage = () => {
  const [routeArray, setRouteArray] = useState<TRouteArray>([]);

  const [modalActive, setModalActive] = useState<boolean>(false);

  const [detailsActive, setDetailsActive] = useState<boolean>(false);

  const oneNewRoute = (route: IRoute) => {
    setRouteArray((prev) => [...(prev || []), route]);
  };
  return (
    <>
      <Header setActive={setModalActive} />
      <div className="section">
        <RouteBlock routeArray={routeArray} setActive={setDetailsActive} />
        <Details active={detailsActive} />
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        oneNewRoute={oneNewRoute}
      />
    </>
  );
};

export default HomePage;
