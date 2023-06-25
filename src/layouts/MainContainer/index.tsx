import { Routes, Route } from "react-router-dom";
import { mainRouters } from "../../routers/routers";
import { Suspense } from "react";

const MainContainer = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        {mainRouters.map((router) => {
          return (
            <Route
              key={router.path}
              path={router.path}
              element={<router.component />}
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default MainContainer;
