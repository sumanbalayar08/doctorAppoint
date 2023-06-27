import React from "react";

const Layout = () => {
  return (
    <div className="main">
      <div className="layout">
        <div className="sidebar">
          <div className="logo"></div>
          <div className="menu"></div>
        </div>
        <div className="content">
          <div className="header"></div>
          <div className="body"></div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
