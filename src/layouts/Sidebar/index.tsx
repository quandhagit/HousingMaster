import React, { ReactNode, useEffect, useRef, useState } from "react";
import Tabbar from "./components/Tab";

type Tab = {
  icon: ReactNode;
  name: string;
  to: string;
};

const TAB_LIST: Tab[] = [
  {
    icon: <i className="fa fa-home fa-lg" />,
    name: "Trang chủ",
    to: "/",
  },
  {
    icon: <i className="fa fa-city fa-lg" />,
    name: "Danh sách tòa nhà",
    to: "apartment",
  },
  {
    icon: <i className="fa fa-door-closed fa-lg" />,
    name: "Danh sách phòng",
    to: "room",
  },
  {
    icon: <i className="fa fa-user fa-lg" />,
    name: "Khách hàng",
    to: "user",
  },
  {
    icon: <i className="fa fa-file-contract fa-lg" />,
    name: "Hợp đồng",
    to: "contract",
  },
  {
    icon: <i className="fa fa-chart-bar fa-lg" />,
    name: "Doanh thu",
    to: "income",
  },
];

const Sidebar: React.FC = () => {
  const [isExpand, setIsExpand] = useState<boolean>(true);

  const sidebarRef = useRef<HTMLDivElement>(null);

  const drawTab = () => {
    return TAB_LIST.map((tab: Tab) => {
      return (
        <Tabbar
          key={tab.name}
          icon={tab.icon}
          name={tab.name}
          to={tab.to}
          isExpand={isExpand}
        />
      );
    });
  };

  const onClickExpand = () => {
    setIsExpand((isExpand) => !isExpand);
  };

  return (
    <div
      className={`flex flex-col ${
        isExpand ? "w-[250px]" : "w-[74px]"
      } bg-[#0E1927] h-screen items-center duration-150 shadow-sidebar`}
      ref={sidebarRef}
    >
      <div className="w-full px-[20px]">
        <div
          className={`h-[140px] w-full flex items-center duration-150 ${
            !isExpand && "justify-center"
          }`}
        >
          <i className="fa fa-home fa-3x text-[#3D99B8]" />
          <div
            className={`text-xl font-medium text-white whitespace-pre ml-2 ${
              !isExpand && "hidden duration-150"
            }`}
          >
            Housing Master
          </div>
        </div>
      </div>
      <div className="flex flex-col relative w-full px-[13px]">{drawTab()}</div>
      <div className="border-y-2 border-y-white h-[52px] flex w-full items-center justify-center font-medium text-white mt-auto px-[13px]">
        <div className="w-full flex items-center">
          <div
            className={`w-[49px] h-[49px] flex items-center justify-center shrink-0
             duration-150 ${!isExpand && "rotate-180"} cursor-pointer`}
            onClick={onClickExpand}
          >
            <i className="fa fa-angle-double-left fa-lg" />
          </div>
          <div
            className={`duration-150 ${
              !isExpand && "hidden"
            } ml-1 whitespace-nowrap`}
          >
            Thu gọn
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
