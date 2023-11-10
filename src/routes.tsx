import { Route, createRoutesFromElements } from "react-router-dom";
import { App } from "./App";
import "./index.css";
import { Error404 } from "./pages/Error404";
import { Home } from "./pages/Home";

/** React Router routes for this app. */
export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="*" element={<Error404 />} />
  </Route>
);
