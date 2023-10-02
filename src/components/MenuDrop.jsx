import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

import { IconButton } from "@chakra-ui/react";
import { HiMenuAlt2 } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const MenuDrop = () => {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <IconContext.Provider value={{ color: "#080807" }}>
            <MenuButton
              as={IconButton}
              icon={
                isOpen ? <HiMenuAlt2 size={25} /> : <HiMenuAlt3 size={25} />
              }
              aria-label="Options"
              variant="ghost"
              colorScheme="transparent"
            />
          </IconContext.Provider>
          <MenuList variant="ghost" colorScheme="transparent">
            <Link to={"/"}>
              <MenuItem>Home</MenuItem>
            </Link>

            <Link to={"/contact-us"}>
              <MenuItem>Contact US</MenuItem>
            </Link>

            <Link to={"/signup"}>
              <MenuItem>Login</MenuItem>
            </Link>

            <Link to={"/chat"}>
              <MenuItem>Chat</MenuItem>
            </Link>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default MenuDrop;
