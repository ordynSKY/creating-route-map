import React, { FC } from "react";
import styles from "./Routes.module.css";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Routes from "./Routes";
import IRoute, { TRouteArray } from "./types";

interface IRouteBlock {
  setActive: (arg: boolean) => void;
  setRoute: (arg: number | undefined) => void;
}

const RouteBlock: FC<IRouteBlock> = ({ setActive, setRoute }) => {
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
      <div style={{ overflowY: "auto", height: 500, paddingRight: 15 }}>
        <Routes setActive={setActive} setRoute={setRoute} />
      </div>
    </div>
  );
};

export default RouteBlock;
