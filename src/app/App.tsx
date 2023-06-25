import React from "react";
import Header from "../layouts/Header";
import MainContainer from "../layouts/MainContainer";
import Sidebar from "../layouts/Sidebar";

function App() {
  return (
    <div className="flex overflow-y-hidden">
      <Sidebar />
      <div className="flex-col flex-auto">
        <Header />
        <div className="flex flex-auto p-[30px]">
          <MainContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
