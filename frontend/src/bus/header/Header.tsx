import React, { FC } from "react";
import styled from "@emotion/styled";
import { Menu } from "./Menu";
import { Link } from "react-router-dom";

const StyleHeader = styled.header`
  height: 10vh;
  background-color: #2a2b2b;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
`;

const NavbarBrand = styled.div`
  width: 100px;
  a {
    text-decoration: none;
    color: white;
  }
`;

const Navbar = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 720px) {
    width: 100%;
    padding: 0 20px;
  }
`;

export const Header: FC = () => {
  return (
    <StyleHeader>
      <Navbar>
        <NavbarBrand>
          <Link to="/">PROSHOP</Link>
        </NavbarBrand>
        <Menu />
      </Navbar>
    </StyleHeader>
  );
};
