import React from "react";

import logo from "../assets/images/logo.svg";
import { useNavigate, NavLink } from "react-router-dom";

function LogoSmall() {
  const navigate = useNavigate();
  return (
    <div >
      <button onClick={() => navigate(-1)}>
        <img src={logo} width = "70" height = "70" />
      </button>

      <h5> Propel Health </h5>
    </div>
  );
}

export default LogoSmall;
