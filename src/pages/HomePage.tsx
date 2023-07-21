import React, { useState } from "react";
import Header from "../components/Header/Header";
import RouteBlock from "../components/Routes/RouteBlock";
import Details from "../components/Details/Details";
import Modal from "../components/Modal/Modal";

const HomePage = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);

  const [detailsActive, setDetailsActive] = useState<boolean>(false);

  const [route, setRoute] = useState<number>();

  return (
    <>
      <Header setActive={setModalActive} />
      <div className="section">
        <RouteBlock setActive={setDetailsActive} setRoute={setRoute} />
        <Details
          active={detailsActive}
          routeId={route}
          setActive={setDetailsActive}
        />
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  );
};

export default HomePage;
