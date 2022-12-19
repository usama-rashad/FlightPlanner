import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Theme
import { ThemeProvider } from "@emotion/react";
import { mainTheme } from "./themes";

// Router
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

// Pages
import App from "./App"; // Home page
import Login from "./pages/Login/login";
import Home from "./pages/Home/home";
import Register from "./pages/Register/register";
import SearchResults from "./pages/SearchResults/searchResults";
import Checkout from "./pages/Checkout/Checkout";
import AdminPage from "./pages/Admin/AdminPage";

// Components
import Navbar from "./components/Common/Navbar/Navbar";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/test",
    element: <div>Hello world</div>,
  },
  {
    path: "/admin",
    element: (
      <>
        <Navbar isAdmin={true} />
        <AdminPage />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Navbar />
        <Login />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <Navbar />
        <Register />
      </>
    ),
  },
  {
    path: "/searchresults",
    element: (
      <>
        <Navbar />
        <SearchResults />
      </>
    ),
  },
  {
    path: "/checkout",
    element: (
      <>
        <Navbar />
        <Checkout />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  </React.StrictMode>
);
