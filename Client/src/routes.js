import React from "react";

const Home = React.lazy(() => import("./Pages/Home"));;
const SignUp = React.lazy(() => import("./Pages/SignUp"));
const Educate = React.lazy(() => import("./Pages/Educate"));
const Skills = React.lazy(() => import("./Pages/Skills"));
const Training = React.lazy(() => import("./Pages/Training"));

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
	

	
];
export default routes;
