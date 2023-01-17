import React from "react";

const Home = React.lazy(() => import('./Pages/Home'));
const SignIn = React.lazy(() => import("./Pages/SignIn"));
const EduHome = React.lazy(() => import("./Pages/EduHome"));
const Events = React.lazy(() => import("./Pages/Events"));

const routes = [
    {
        path: "/",
        component: <Home />,
        privateRoute: true
    },
    {
        path: "/Signin",
        component: <SignIn />,
        privateRoute: false
    },
    {
        path: "/EduHome",
        component: <EduHome/>,
        privateRoute: false
    },
    {
        path: "/Events",
        component: <Events/>,
        privateRoute: false
    }
];
export default routes;