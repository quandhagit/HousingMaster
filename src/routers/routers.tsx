import { ReactNode, lazy } from "react";
import { LazyExoticComponent } from "react";
const Home = lazy(() => import("../pages/Home"));
const Room = lazy(() => import("../pages/Room"));
const Apartment = lazy(() => import("../pages/Apartment"));
const User = lazy(() => import("../pages/User"));
const Contract = lazy(() => import("../pages/Contract"));
const Income = lazy(() => import("../pages/Income"));

type Route = {
  path: string;
  component: LazyExoticComponent<() => JSX.Element>;
};

export const mainRouters: Route[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/room",
    component: Room,
  },
  {
    path: "/apartment",
    component: Apartment,
  },
  {
    path: "/user",
    component: User,
  },
  {
    path: "/contract",
    component: Contract,
  },
  {
    path: "/income",
    component: Income,
  },
];
