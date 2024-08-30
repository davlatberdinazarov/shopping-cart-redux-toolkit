import React from "react";
import Cart from "./Cart";
import "./Header.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
const Header = () => {
  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch(authActions.logout())
  }

  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li className=" d-flex align-items-center">
            <Cart />
      
              <button onClick={handleLogOut} className=" position-relative bottom-2">Logout</button>
  
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;