import React from "react";

import logo from "../assets/images/logo.svg";
import { useNavigate, NavLink } from "react-router-dom";
import { Text } from "@chakra-ui/react";
function Logo() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)}>
        <img src={logo} />
      </button>
      <Text 
      colour={'#5FA7CF'}

fontWeight = {'bold'}>
       Propel Health 
      </Text>
    </div>
  );
}

export default Logo;
