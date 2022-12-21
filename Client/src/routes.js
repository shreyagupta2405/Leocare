import React from "react";

const Home = React.lazy(() => import("./Pages/Home"));;
const SignUp = React.lazy(() => import("./Pages/SignUp"));
const Educate = React.lazy(() => import("./Pages/Educate"));
const Skills = React.lazy(() => import("./Pages/Skills"));
const Training = React.lazy(() => import("./Pages/Training"));
const Articles = React.lazy(() => import("./Pages/Articles"));

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
        path: "/skills",
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
	

	
];
export default routes;
