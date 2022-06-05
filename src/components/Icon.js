import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

function Icon({ name }) {
  switch (name) {
    case "cirlce":
      return <FaRegCircle className="icons" />;
    case "cross":
      return <FaTimes className="icons"></FaTimes>;
    default:
      return <FaPen className="icons"></FaPen>;
  }
}

export default Icon;
