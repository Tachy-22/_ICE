import React from "react";
import {  Outlet } from "react-router-dom";

function RootPage(props) {
  return (
    <div className="root-layout">
      <header>
        <nav className="flex justify-end gap-6 px-10 py-4  border-b-2 border-gray-400 ">
        </nav>
      </header>
      <main className="h-[100%] px-[1rem]">
        <Outlet />
      </main>
    </div>
  );
}

export default RootPage;
