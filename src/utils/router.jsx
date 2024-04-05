import { createBrowserRouter } from "react-router-dom";

import LoginPage from "../pages/Login";
import HomePage from "../pages/Home";
import WikiPage from "../pages/Wiki";
import CustomerPage from "../pages/Customer";
import ItemPage from "../pages/Item";
import MaterialPage from "../pages/Material";

import DefaultLayout from "../layouts/Default";

const router = createBrowserRouter([
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/",
        element: <DefaultLayout/>,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/item",
				element: <ItemPage />,
			},
			{
				path: "/customer",
				element: <CustomerPage />,
			},
			{
				path: "/wiki",
				element: <WikiPage />,
			},
			{
				path: "/material",
				element: <MaterialPage />,
			},
		],
	},
]);

export default router;
