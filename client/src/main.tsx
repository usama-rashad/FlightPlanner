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
import { Provider } from "react-redux";
import { store } from "./reduxStore";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Provider store={store}>
          <Navbar />
        </Provider>
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
        <Provider store={store}>
          <Navbar isAdmin={true} />
        </Provider>
        <AdminPage />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Provider store={store}>
          <Navbar />
        </Provider>
        <Login />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <Provider store={store}>
          <Navbar />
        </Provider>
        <Register />
      </>
    ),
  },
  {
    path: "/searchresults",
    element: (
      <>
        <Provider store={store}>
          <Navbar />
        </Provider>
        <SearchResults />
      </>
    ),
  },
  {
    path: "/checkout",
    element: (
      <>
        <Provider store={store}>
          <Navbar />
        </Provider>
        <Checkout />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={mainTheme}>
        <RouterProvider router={appRouter} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
