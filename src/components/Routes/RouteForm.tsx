import { Button } from "@chakra-ui/button";
import { CheckIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import { Text } from "@chakra-ui/layout";
import React, { FC, useState } from "react";
import IRoute, { IRouteForm } from "./types";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { oneNewRoute } from "../../store/routeSlice";
import { Textarea } from "@chakra-ui/textarea";

import styles from "./Routes.module.css";

const RouteForm: FC<IRouteForm> = ({
  setActive,
  maxLength,
  length,
  setMapKey,
  setLength,
}) => {
  const [title, setTitle] = useState<string>("");

  const [shortDescription, setShortDescription] = useState<string>("");

  const [description, setDescription] = useState<string>("");

  const dispatch = useAppDispatch();

  const origin = useAppSelector((state) => state.routes.origin);

  const destination = useAppSelector((state) => state.routes.destination);

  const checkLength = (event: any) => {
    const inputValue = event.target.value;

    if (inputValue.length <= maxLength) {
      setShortDescription(inputValue);
    }
  };

  const addNewRoute = (e: any) => {
    e.preventDefault();

    setActive(false);

    const newRoute: IRoute = {
      id: Date.now(),
      title,
      shortDescription,
      description,
      length,
      isFavorite: false,
      origin,
      destination,
    };

    dispatch(oneNewRoute(newRoute));

    setMapKey((prevKey) => prevKey + 1);

    setTitle("");

    setDescription("");

    setShortDescription("");

    setLength(0);
  };

  return (
    <form>
      <Text mb="8px">Title</Text>
      <Input
        placeholder="Enter title..."
        style={{ width: 450, border: "2px solid gray" }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Text mb="8px" mt="15px">
        Short description
      </Text>
      <Textarea
        placeholder="Enter short description..."
        style={{ width: 450, height: 100, border: "2px solid gray" }}
        value={shortDescription}
        onChange={checkLength}
        maxLength={maxLength}
      />
      <p style={{ textAlign: "right" }}>
        Limit {shortDescription.length} of 160
      </p>
      <Text mb="8px" mt="15px">
        Full description
      </Text>
      <Textarea
        placeholder="Enter full description..."
        style={{ width: 450, height: 150, border: "2px solid gray" }}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className={styles.formLength}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-map"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"
          />
        </svg>
        &nbsp;
        <strong>Length {length} km</strong>
      </div>
      <div className={styles.formBtn}>
        <Button
          leftIcon={<CheckIcon />}
          colorScheme="black"
          variant="outline"
          onClick={addNewRoute}
          isDisabled={title && shortDescription && description ? false : true}
        >
          Add path
        </Button>
      </div>
    </form>
  );
};

export default RouteForm;
