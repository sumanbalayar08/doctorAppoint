import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/appoint">Appointment</Link>
      </li>
    </ul>
  );
};
export default Sidebar;
