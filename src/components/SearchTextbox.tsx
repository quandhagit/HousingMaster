import React from "react";

const SearchTextbox = () => {
  return (
    <div className="flex flex-col">
      <div className="font-medium">Địa chỉ</div>
      <input
        className="border mt-[8px] h-[40px] border-placeholder
        rounded-[5px] placeholder:text-placeholder focus:outline-primary px-[12px]"
        placeholder="VD: Abc"
      ></input>
    </div>
  );
};

export default SearchTextbox;
