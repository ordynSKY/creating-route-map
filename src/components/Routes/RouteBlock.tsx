import React, { FC } from "react";
import styles from "./Routes.module.css";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Routes from "./Routes";
import { TRouteArray } from "./types";

interface IRouteBlock {
  routeArray: TRouteArray;
  setActive: (arg: boolean) => void;
}

const RouteBlock: FC<IRouteBlock> = ({ routeArray, setActive }) => {
  return (
    <div
      style={{
        borderRight: "2px solid gray",
        paddingRight: 20,
      }}
    >
      <InputGroup>
        <Input
          placeholder="Search..."
          style={{ width: 600, border: "2px solid gray" }}
        />
        <InputRightElement>
          <SearchIcon />
        </InputRightElement>
      </InputGroup>
      <div style={{ overflowY: "auto", height: 410, paddingRight: 15 }}>
        <Routes routeArray={routeArray} setActive={setActive} />
      </div>
    </div>
  );
};

export default RouteBlock;
