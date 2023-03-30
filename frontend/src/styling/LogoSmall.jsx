import React from "react";
import logo from "../assets/images/logo.svg";
import { useNavigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function LogoSmall() {
  const navigate = useNavigate();
  const {user } = useSelector((state) => state.auth)

  return (
<div>
  {user.role === "patient" ? (
    <button onClick={() => navigate('/home')}>
      <img src={logo} width="70" height="70" />
    </button>
  ) : null}

  {user.role === "staff" ? (
    <button onClick={() => navigate('/staffhome')}>
      <img src={logo} width="70" height="70" />
    </button>
  ) : null}

  <h5> Propel Health </h5>
</div>

  );
}

export default LogoSmall;
