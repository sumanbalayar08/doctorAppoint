import React from "react";
import "../styles/Layout.css";
import SidebarData from "../Data/SidebarData";
import { Link } from "react-router-dom";

const Layout = ({children}) => {
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
                return(
                    <>
                    <div className="menu-item">
                        <i class={item.icon}></i>

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
