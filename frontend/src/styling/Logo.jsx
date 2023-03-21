import React from "react";

import logo from "../assets/images/logo.svg";
import { useNavigate, NavLink } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)}>
        <img src={logo} />
      </button>

      <h5> Propel Health </h5>
    </div>
  );
}

export default Logo;
