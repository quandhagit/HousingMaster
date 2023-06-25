import React from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  height: 100%;

  & thead {
    height: 42px;
  }
  & tr > th {
    background-color: #ededed;
    text-align: left;
    font-weight: 500;
  }
  & th,
  td {
    padding-left: 12px;
    padding-right: 12px;
  }
  & td {
    height: 42px;
  }
`;

const ApartmentTable = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Địa chỉ</th>
          <th>Giá thuê</th>
          <th>Số phòng</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            adasdasdasdasdasdasdasdasdasdasdasdasdasdasdsadasdadasdasdasdasdasd
          </td>
          <td>b</td>
          <td>c</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ApartmentTable;
