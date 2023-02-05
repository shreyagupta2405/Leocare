import React from "react";

const Home = React.lazy(() => import("./Pages/Home"));;
const SignUp = React.lazy(() => import("./Pages/Signup.jsx"));
const Educate = React.lazy(() => import("./Pages/Educate"));
const Skills = React.lazy(() => import("./Pages/Env"));
const Training = React.lazy(() => import("./Pages/Training"));
const Articles = React.lazy(() => import("./Pages/Articles"));
const Docs = React.lazy(() => import("./Pages/Docs"));
const Elder = React.lazy(() => import("./Pages/Elder"));
const Empower = React.lazy(() => import("./Pages/Empower"));

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
        path: "/educate",
		component: <Educate/>,
	},
	{
        path: "/env",
		component: <Skills/>,
	},
	{
        path: "/training",
		component: <Training/>,
	},
	{
        path: "/articles",
		component: <Articles/>,
	},
	{
        path: "/docs",
		component: <Docs/>,
	},
	{
        path: "/elderlyCare",
		component: <Elder/>,
	},
	{
        path: "/empowerment",
		component: <Empower/>,
	},

	
];
export default routes;
