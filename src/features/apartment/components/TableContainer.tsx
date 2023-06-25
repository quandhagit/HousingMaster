import { table } from "console";
import React from "react";
import styled from "styled-components";
import SearchTextbox from "../../../components/SearchTextbox";
import ApartmentTable from "./ApartmentTable";

const TableContainer = () => {
  return (
    <div className="rounded-[5px] overflow-hidden shadow-table">
      <div className="h-[48px] text-lg text-white font-medium bg-primary flex justify-between px-[20px] items-center">
        <div>Danh sách tòa nhà (3 tòa nhà)</div>
      </div>
      <div className="min-h-[464px] p-[20px] flex flex-col">
        <SearchTextbox />
        <div className="w-full border mt-[18px] overflow-hidden border-[#A79797] rounded-[5px] flex-auto">
          <ApartmentTable />
        </div>
      </div>
    </div>
  );
};

export default TableContainer;
