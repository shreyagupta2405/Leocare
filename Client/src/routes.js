import React from "react";

const Home = React.lazy(() => import("./Pages/Home"));;
const SignUp = React.lazy(() => import("./Pages/SignUp"));
const SignIn = React.lazy(() => import("./Pages/SignIn"));

const routes = [ 
	{
        path: "/",
		component: <Home/>,
	},
	{
        path: "/signup",
		component: <SignUp/>,
	},
	{
        path: "/signin",
		component: <SignIn/>,
	},
	

	
];
export default routes;
