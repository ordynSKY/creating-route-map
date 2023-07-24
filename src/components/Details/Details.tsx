import React, { FC, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../hook";
import { deleteRoute, setFavoriteRoute } from "../../store/routeSlice";
import DisplayMap from "../GoogleMap/DisplayMap";
import styles from "./Details.module.css";
import { IDetails } from "./types";

const Details: FC<IDetails> = ({ active, routeId, setActive }) => {
  const routesArray = useAppSelector((state) => state.routes.list);

  const dispatch = useAppDispatch();

  const route = routesArray.find((item) => item.id === routeId);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [route]);

  return (
    <>
      {active ? (
        <div
          style={
            active
              ? {
                  marginLeft: 20,
                  overflowY: "auto",
                  height: 630,
                  paddingRight: 20,
                }
              : { display: "none" }
          }
        >
          <div className={styles.title} ref={ref} tabIndex={0}>
            <strong>{route?.title}</strong>
            <strong>{route?.length} km</strong>
          </div>
          <div className={styles.description}>{route?.description}</div>
          {route && (
            <DisplayMap origin={route.origin} destination={route.destination} />
          )}
          <div className={styles.buttons}>
            {route?.isFavorite ? (
              <button
                className={styles.favoriteBtn}
                onClick={() => dispatch(setFavoriteRoute(route?.id))}
              >
                Remove from favorites
              </button>
            ) : (
              <button
                className={styles.favoriteBtn}
                onClick={() => dispatch(setFavoriteRoute(route?.id))}
              >
                Add to favorites
              </button>
            )}

            <button
              className={styles.removeBtn}
              onClick={() => (
                dispatch(deleteRoute(route?.id)), setActive(false)
              )}
            >
              Delete path
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.selectPath}>
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
