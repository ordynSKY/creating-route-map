import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hook";
import { deleteRoute, setFavoriteRoute } from "../../store/routeSlice";
import DisplayMap from "../GoogleMap/DisplayMap";

interface IDetails {
  active: boolean;
  routeId: number | undefined;
  setActive: (arg: boolean) => void;
}

const Details: FC<IDetails> = ({ active, routeId, setActive }) => {
  const routesArray = useAppSelector((state) => state.routes.list);
  const dispatch = useAppDispatch();

  const route = routesArray.find((item) => item.id === routeId);
  console.log("route", route);

  return (
    <>
      {active ? (
        <div
          style={
            active
              ? {
                  marginLeft: 20,
                  overflowY: "auto",
                  height: 500,
                  paddingRight: 20,
                }
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
          <div style={{ fontSize: 15, marginBottom: 20, width: 600 }}>
            {route?.description}
          </div>
          {route && (
            <DisplayMap origin={route.origin} destination={route.destination} />
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              marginTop: 20,
            }}
          >
            {route?.isFavorite ? (
              <button
                style={{
                  marginBottom: 10,
                  color: "blue",
                  textDecoration: "underline",
                }}
                onClick={() => dispatch(setFavoriteRoute(route?.id))}
              >
                Remove from favorites
              </button>
            ) : (
              <button
                style={{
                  marginBottom: 10,
                  color: "blue",
                  textDecoration: "underline",
                }}
                onClick={() => dispatch(setFavoriteRoute(route?.id))}
              >
                Add to favorites
              </button>
            )}

            <button
              style={{ color: "red", textDecoration: "underline" }}
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
