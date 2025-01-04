// import React, { lazy, Suspense } from "react";
// import ReactDOM from "react-dom/client";
// import Header from "./src/Components/Header";
// import Body from "./src/Components/Body";
// import Error from "./src/Utils/Error";
// import {
//   AbortedDeferredError,
//   createBrowserRouter,
//   Outlet,
//   RouterProvider,
// } from "react-router-dom";
// import About from "./src/Components/About";
// import Contacts from "./src/Components/Contacts";
// import Shimmer from "./src/Components/Shimmer";
// import WebSocketChat from "./src/Components/WebChatRoom";
// import WebChatRoom from "./src/Components/WebChatRoom";

// const AppLayout = () => {
//   return (
//     <div>
//       <Header />
//       <Outlet></Outlet>
//     </div>
//   );
// };

// const Grocery = lazy(() => import("./src/Components/Grocery"));
// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Body />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contacts />,
//       },
//       {
//         path: "/chat",
//         element: <WebChatRoom />,
//       },
//       {
//         path: "/grocery",
//         element: (
//           <Suspense fallback={<Shimmer />}>
//             {" "}
//             <Grocery />
//           </Suspense>
//         ),
//       },
//     ],
//     errorElement: <Error />,
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<RouterProvider router={appRouter}></RouterProvider>);

import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import Error from "./src/Utils/Error";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import About from "./src/Components/About";
import Contacts from "./src/Components/Contacts";
import Shimmer from "./src/Components/Shimmer";
import WebSocketChat from "./src/Components/WebChatRoom";
import WebChatRoom from "./src/Components/WebChatRoom";
import Login from "./src/Components/Login";
import PrivateRoute from "./PrivateRoute";
import ToastContainerWrapper from "./src/Components/ToastContainerWrapper";

import Loader from "./src/Utils/Loader";
import Footer from "./src/Components/Footer";
import { LoaderProvider } from "./src/Utils/LoaderContext";
import Register from "./src/Components/Register";
import ForgotPassword from "./src/Components/ForgotPassword";
const Grocery = lazy(() => import("./src/Components/Grocery"));
const WebChatRoom = lazy(() => import("./src/Components/WebChatRoom"));
const AppLayout = () => {
  const location = useLocation();
  return (
    <div>
      <Loader />
      {location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "/forgotPass" && <Header />}
      <Outlet />
      <ToastContainerWrapper />
      {(location.pathname !== "/login" ||
        location.pathname !== "/register" ||
        location.pathname !== "/forgotPass") && <Footer />}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forgotPass",
        element: <ForgotPassword />,
      },
      {
        path: "/",
        element: (
          <PrivateRoute>
            element: <Body />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            element: <About />
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            element: <Contacts />
          </PrivateRoute>
        ),
      },
      {
        path: "/chat",
        element: (
          <PrivateRoute>
            {" "}
            <Suspense fallback={<Shimmer />}>
              element: <WebChatRoom />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "/grocery",
        element: (
          <PrivateRoute>
            <Suspense fallback={<Shimmer />}>
              <Grocery />
            </Suspense>
          </PrivateRoute>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <LoaderProvider>
    <RouterProvider router={appRouter}></RouterProvider>
  </LoaderProvider>
);
