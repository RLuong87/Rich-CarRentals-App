import React, { useContext, Fragment } from "react";
import NavButton from "./NavButton";
import { AuthContext } from "../Providers/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = (props) => {
  const [auth] = useContext(AuthContext);

  
  return (
    <nav
      style={{
        display: "flex",
        backgroundColor: "yellow",
        position: "absolute",
        width: "100%",
        zIndex: 9999,
        top: 0,
        left: 0,
        flexDirection: "row",
        height: "75px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0em 1.2em",
        }}
      >
        <h1 style={{ color: "black" }}>Rich Car Rentals</h1>
        <FontAwesomeIcon icon={["fas", "car"]} />
      </div>
      <div
        style={{
          flex: 1,
          marginTop: "0em",
          display: "flex",
          flexDirection: "row",
          borderRadius: "70px 0px 0px 70px",
          background: "transparent",
          userSelect: "none",
          alignItems: "center",
          padding: "0em 1.2em",
          justifyContent: "flex-end",
        }}
      >
        <NavButton to="/" label="home" />
        <FontAwesomeIcon icon={["fas", "home"]} />
        <NavButton to="/news" label="news"/>
        <FontAwesomeIcon icon={["fas", "newspaper"]} />
        {auth.token ? (
          <Fragment>
            <NavButton to="/developers" label="Developers" />
            <FontAwesomeIcon icon={["fas", "users"]} />
          </Fragment>
        ) : (
          <Fragment>
            <NavButton to="/login" label="login" />
            <FontAwesomeIcon icon={["fas", "sign-in-alt"]} />
            <NavButton to="/register" label="Sign up" />
            <FontAwesomeIcon icon={["fas", "user-plus"]} />
          </Fragment>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
