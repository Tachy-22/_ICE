import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home1 from "./Pages/Page1/Home1";
import RootPage from "./Layouts/RootPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootPage />}>
        <Route index element={<Home1 />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
