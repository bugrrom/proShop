import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../init/rootReducer";
import { logout } from "../authScreen/login/action";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  flex-wrap: wrap;
  a {
    text-decoration: none;
    color: white;
    min-width: 50px;
    display: flex;
    justify-content: center;
    margin: 0 10px;
    &:hover {
      color: #909292;
    }
    i {
      margin 0 4px;  
    }
  }
`;

const Dropdown = styled.div`
  &:hover {
    div {
      display: block;
    }
  }
`;
const Dropbtn = styled.div`
  color: white;
  min-width: 50px;
  display: flex;
  justify-content: center;
  margin: 0 10px;
  background-color: none;
  cursor: pointer;
  font-size: 17px;
  padding: 5px 0;
  &:hover {
      color: #909292;
    }
  i {
      width:10px;
      margin 0 4px;  
    }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  a {
    margin: 10px 0;
    color: black;
    &:hover {
      color: #909292;
    }
  }
`;
const Logout = styled.div`
  color: black;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: #909292;
  }
`;

export const Menu: FC = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state: AppState) => state.userLogin);
  const { userInfo } = userLogin;
  const clickLogout = () => {
    dispatch(logout());
  };
  let name;
  if (userInfo) {
    // @ts-ignore
    name = userInfo.name;
  }
  return (
    <Nav>
      <Link to="/cart">
        <i className="fas fa-shopping-cart"></i>Cart
      </Link>
      {!userInfo ? (
        <>
          <Link to="/login">
            <i className="fas fa-user"></i>Sign In
          </Link>
        </>
      ) : (
        <Dropdown>
          <Dropbtn>
            {name}
            <i className="fas fa-caret-down"></i>
          </Dropbtn>
          <DropdownContent>
            <Link to="/profile">Profile</Link>
            {
              //@ts-ignore
              userInfo.isAdmin ? (
                <>
                  <Link to="/adminAllUsers">Users</Link>
                  <Link to="/adminAllProducts">Products</Link>
                  <Link to="/adminAllOrder">Order</Link>
                </>
              ) : null
            }
            <Link to="/login">
              <Logout onClick={clickLogout}>Logout</Logout>
            </Link>
          </DropdownContent>
        </Dropdown>
      )}
    </Nav>
  );
};
