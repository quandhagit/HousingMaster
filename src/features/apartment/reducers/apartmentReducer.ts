import { createSlice } from "@reduxjs/toolkit";

export interface IApartment {
  id: string;
  address: string;
  price: string;
  roomTotal: Number;
  phoneNumber: string;
  note: string;
}

const initialState: IApartment[] = [
  {
    id: "1",
    address: "36 Nguyễn Trãi Thanh Khê đà nẵng",
    price: "5.000.000 - 10.000.000 đ",
    roomTotal: 10,
    phoneNumber: "0123456789",
    note: "",
  },
  {
    id: "2",
    address: "36 Nguyễn Trãi Thanh Khê đà nẵng",
    price: "5.000.000 - 8.000.000 đ",
    roomTotal: 18,
    phoneNumber: "0123456789",
    note: "",
  },
];

export const apartmentSlice = createSlice({
  name: "apartment",
  initialState,
  reducers: {},
});

export default apartmentSlice.reducer;
