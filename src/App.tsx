import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import { Error404 } from "./pages/Error404";
import { Home } from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home />} />
      <Route path="*" element={<Error404 />} />
    </>
  ),
  { basename: process.env.PUBLIC_URL }
);

export default function App() {
  return <RouterProvider router={router} />;
}
