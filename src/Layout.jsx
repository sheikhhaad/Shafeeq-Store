import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    const [collapsed, setCollapsed] = useState(false);

  return (
    <div className=" md:flex">
      {/* Sidebar left side me fix */}
      <div className="md:w-64 w-0">

            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      </div>


      {/* Pages right side me */}
      <main className="flex-1 ">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
