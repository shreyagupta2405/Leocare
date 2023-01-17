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
        path: "/signin",
        component: <SignIn />,
        privateRoute: false
    },
    {
        path: "/edu-home",
        component: <EduHome/>,
        privateRoute: true
    },
    {
        path: "/events",
        component: <Events/>,
        privateRoute: true
    }
];
export default routes;