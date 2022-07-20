import React from "react";
import {
  NavbarArea,
  NavbarContainer,
  NavbarRightSide,
  NavbarCenterSide,
  NavbarLeftSide,
} from "./style";

const Navbar = () => {
  return (
    <NavbarArea>
      <NavbarContainer className="container mx-auto">
        <NavbarRightSide>لوگو</NavbarRightSide>
        <NavbarCenterSide>سرچ</NavbarCenterSide>
        <NavbarLeftSide>آیتم ها</NavbarLeftSide>
      </NavbarContainer>
    </NavbarArea>
  );
};

export default Navbar;
