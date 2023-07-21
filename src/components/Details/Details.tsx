import React, { FC } from "react";
import IRoute from "../Routes/types";
import { useAppDispatch, useAppSelector } from "../../hook";
import { deleteRoute } from "../../store/routeSlice";

interface IDetails {
  active: boolean;
  routeId: number | undefined;
  setActive: (arg: boolean) => void;
  //   deleteRoute: (id: number | undefined) => void;
}

const Details: FC<IDetails> = ({ active, routeId, setActive }) => {
  const routesArray = useAppSelector((state) => state.routes.list);
  const dispatch = useAppDispatch();

  const route = routesArray.find((item) => {
    if (item.id === routeId) {
      return true;
    }
  });
  return (
    <>
      {active ? (
        <div
          style={
            active
              ? { marginLeft: 20, overflowY: "auto", height: 500 }
              : { display: "none" }
          }
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 30,
              fontSize: 25,
            }}
          >
            <strong>{route?.title}</strong>
            <strong>{route?.length} km</strong>
          </div>
          <div style={{ fontSize: 15, marginBottom: 20 }}>
            {route?.description}
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2645.6028426167713!2d35.04702845275926!3d48.464149312688455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1689619435168!5m2!1sru!2sua"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              marginTop: 20,
            }}
          >
            <button style={{ marginBottom: 10 }}>Add to favorites</button>
            <button
              onClick={() => (
                dispatch(deleteRoute(route?.id)), setActive(false)
              )}
            >
              Delete path
            </button>
          </div>
        </div>
      ) : (
        <div
          style={{
            width: 600,
            height: 450,
            marginLeft: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            src="/arrows.svg"
            alt=""
            style={{
              width: 100,
              marginRight: 15,
              marginBottom: 20,
            }}
          />
          Select any path
        </div>
      )}
    </>
  );
};

export default Details;
