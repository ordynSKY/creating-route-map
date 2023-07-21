import { Button } from "@chakra-ui/button";
import { CheckIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import { Text } from "@chakra-ui/layout";
import React, { FC, useState } from "react";
import IRoute, { IRouteForm } from "./types";
import { useAppDispatch } from "../../hook";
import { oneNewRoute } from "../../store/routeSlice";

const RouteForm: FC<IRouteForm> = ({ setActive }) => {
  const [title, setTitle] = useState<string>("");
  const [shortDescription, setShortDescription] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [length, setLength] = useState<number>(1);

  const dispatch = useAppDispatch();

  const addNewRoute = (e: any) => {
    e.preventDefault();

    setActive(false);

    const newRoute: IRoute = {
      id: Date.now(),
      title,
      shortDescription,
      description,
      length,
    };

    dispatch(oneNewRoute(newRoute));

    setTitle("");

    setDescription("");

    setShortDescription("");
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
      <Input
        placeholder="Enter short description..."
        style={{ width: 450, height: 100, border: "2px solid gray" }}
        value={shortDescription}
        onChange={(e) => setShortDescription(e.target.value)}
      />
      <Text mb="8px" mt="15px">
        Full description
      </Text>
      <Input
        placeholder="Enter full description..."
        style={{ width: 450, height: 150, border: "2px solid gray" }}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
          fontSize: 20,
        }}
      >
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
        <strong>Length 1.13 km</strong>
      </div>
      <div style={{ marginTop: 50, marginBottom: 20, textAlign: "center" }}>
        <Button
          leftIcon={<CheckIcon />}
          colorScheme="black"
          variant="outline"
          onClick={addNewRoute}
        >
          Add path
        </Button>
      </div>
    </form>
  );
};

export default RouteForm;
