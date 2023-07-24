import React, { FC } from "react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Routes from "./Routes";
import { IRouteBlock } from "./types";
import { useAppDispatch } from "../../hook";
import { filterRoutes } from "../../store/routeSlice";
import styles from "./Routes.module.css";

const RouteBlock: FC<IRouteBlock> = ({ setActive, setRoute }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.routeBlock}>
      <InputGroup>
        <Input
          placeholder="Search..."
          style={{ width: 600, border: "2px solid gray" }}
          onChange={(e) => dispatch(filterRoutes(e.target.value))}
        />
        <InputRightElement>
          <SearchIcon />
        </InputRightElement>
      </InputGroup>
      <div style={{ overflowY: "auto", height: 550, paddingRight: 15 }}>
        <Routes setActive={setActive} setRoute={setRoute} />
      </div>
    </div>
  );
};

export default RouteBlock;
