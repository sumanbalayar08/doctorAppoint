import React from "react";
import "../styles/Layout.css";
import SidebarData from "../Data/SidebarData";
import { Link,useLocation } from "react-router-dom";

const Layout = ({children}) => {

const location=useLocation();

  return (
    <div className="main">
      <div className="layout">
        <div className="sidebar">
          <div className="logo">
            <h6>DOCAPP</h6>
          </div>
          <hr/>
          <div className="menu">
            {SidebarData.map((item)=>{
              const isActive=location.pathname===item.path;
                return(
                    <>
                    <div className={`menu-item ${isActive && 'selected'} `}>
                        <i class={item.icon}></i>
                        <Link to={item.path}>{item.name}</Link>
                    </div>
                    </>
                )
            })}
          </div>
        </div>
        <div className="content">
          <div className="header">Header</div>
          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
