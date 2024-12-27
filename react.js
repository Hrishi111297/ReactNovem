import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import Error from "./src/Utils/Error";
import {
  AbortedDeferredError,
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import About from "./src/Components/About";
import Contacts from "./src/Components/Contacts";
import Shimmer from "./src/Components/Shimmer";
import WebSocketChat from "./src/Components/WebChatRoom";
import WebChatRoom from "./src/Components/WebChatRoom";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet></Outlet>
    </div>
  );
};

const Grocery = lazy(() => import("./src/Components/Grocery"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contacts />,
      },
      {
        path: "/chat",
        element: <WebChatRoom />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            {" "}
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}></RouterProvider>);
