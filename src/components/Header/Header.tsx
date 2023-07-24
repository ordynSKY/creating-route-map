import React, { FC } from "react";
import styles from "./Header.module.css";
import { Button } from "@chakra-ui/react";

interface IHeader {
  setActive: (arg: boolean) => void;
}

const Header: FC<IHeader> = ({ setActive }) => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src="/arrows.svg" alt="" className={styles.arrow} />
          Saunter
        </div>
        <div>
          <Button colorScheme="blue" onClick={() => setActive(true)}>
            Add path
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
