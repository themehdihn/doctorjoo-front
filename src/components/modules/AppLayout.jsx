import React from "react";
import { Outlet } from "react-router-dom";
// import Header from "./Header";

import "./AppLayout.css"
import Header from "./Header";

function AppLayout({ children, onOpen }) {
  return (
    <div className="app-layout">
     
      <Header onOpen={onOpen}/>
      {children}

      <div className="app-layout__main">
        <div className="app-layout__container">
          <Outlet />
        </div>
      </div>

      {/* <div className="app-layout__mobile-sidebar">Mobile Sidebar content</div> */}
    </div>
  );
}

export default AppLayout;
