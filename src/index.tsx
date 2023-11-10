import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import { App } from "./App";
import "./index.css";
import { Error404 } from "./pages/Error404";
import { Home } from "./pages/Home";
import { reportWebVitals } from "./reportWebVitals";
import { enableMsw } from "./util/api";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="*" element={<Error404 />} />
    </Route>
  ),
  { basename: process.env.PUBLIC_URL }
);

async function main() {
  if (enableMsw) {
    if (window.location.pathname === process.env.PUBLIC_URL) {
      window.location.pathname = process.env.PUBLIC_URL + "/";
    }

    const { worker } = await import("./mocks/browser");
    await worker.start({
      serviceWorker: {
        url: process.env.PUBLIC_URL + "/mockServiceWorker.js"
      },
      onUnhandledRequest: "bypass"
    });
  }

  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

main();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
