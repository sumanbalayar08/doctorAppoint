import React from "react";
import "../styles/Layout.css";
import SidebarData from "../Data/SidebarData";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const location = useLocation();
  const { user } = useSelector((state) => state.user);

  return (
    <div className="main">
      <div className="layout">
        <div className="sidebar">
          <div className="logo">
            <h6>DOCAPP</h6>
          </div>
          <hr />
          <div className="menu">
            {SidebarData.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <>
                  <div className={`menu-item ${isActive && "selected"} `}>
                    <i class={item.icon}></i>
                    <Link to={item.path}>{item.name}</Link>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="content">
          <div className="header">
            <div className="header-content">
              <i className="fas fa-bell"></i>
              <Link to="/profile">{user?.name}</Link>
            </div>
          </div>
          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
