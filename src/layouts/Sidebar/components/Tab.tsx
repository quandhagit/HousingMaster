import React, { ReactNode } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavbarLink = styled(NavLink)<{ $isexpand?: boolean }>`
  display: flex;
  height: 48px;
  align-items: center;
  color: white;
  flex-wrap: nowrap;
  white-space: nowrap;
  font-weight: 500;
  transition: all linear 50ms;
  border-radius: ${(props) => (props.$isexpand ? "30px" : "10px")};
  &.active {
    color: #3d99b8;
    background-color: #e0eff5;
    border-left: ${(props) => (props.$isexpand ? "4px" : "0px")} #116bcc solid;
  }
  &.active:hover {
    opacity: 1;
  }
  &:hover {
    opacity: 0.5;
  }
`;

interface IProps {
  icon: ReactNode;
  name: string;
  to: string;
  isExpand: boolean;
}

const Tabbar: React.FC<IProps> = ({ icon, name, to, isExpand }) => {
  return (
    <NavbarLink
      $isexpand={isExpand}
      className={({ isActive }) => (isActive ? "active" : "")}
      to={to}
    >
      <div
        className={`w-[49px] h-[49px] duration-150 flex items-center justify-center shrink-0 ${
          isExpand && "mr-1"
        }`}
      >
        {icon}
      </div>
      <div className={`${!isExpand && "hidden"} whitespace-pre duration-150`}>
        {name}
      </div>
    </NavbarLink>
  );
};

export default Tabbar;
