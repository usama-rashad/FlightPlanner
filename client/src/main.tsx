import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Theme
import {ThemeProvider} from "@emotion/react";
import {mainTheme} from "./themes";

// Router
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";

// Pages
import App from "./App"; // Home page
import Login from "./pages/login";
import Home from "./pages/home";

// Components
import Navbar from "./components/Navbar/Navbar";

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <div>Hello world!</div>,
	},
	{
		path: "/home",
		element: (
			<>
				<Navbar />
				<Home />
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
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={mainTheme}>
			<RouterProvider router={appRouter} />
		</ThemeProvider>
	</React.StrictMode>
);
