import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/stores";
import TableContainer from "./components/TableContainer";

const Apartment = () => {
  const departments = useSelector((state: RootState) => state.apartment);
  console.log(departments);
  const dispatch = useDispatch();

  return (
    <div className="flex-auto">
      <TableContainer />
    </div>
  );
};

export default Apartment;
