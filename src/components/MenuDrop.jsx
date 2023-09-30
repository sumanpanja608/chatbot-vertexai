import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

import { IconButton } from "@chakra-ui/react";
import { HiMenuAlt2 } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";
import { IconContext } from "react-icons";

const MenuDrop = () => {
  const menuiconcolor = "#fafcfb";
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <IconContext.Provider value={{ color: "#fafcfb" }}>
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
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default MenuDrop;
