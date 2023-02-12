import React from "react";

const Home = React.lazy(() => import('./Pages/Home'));
const SignIn = React.lazy(() => import("./Pages/SignIn"));
const EduHome = React.lazy(() => import("./Pages/EduHome"));
const Events = React.lazy(() => import("./Pages/Events"));
const Env = React.lazy(() => import("./Pages/EnvHome"));
const Educate = React.lazy(() => import("./Pages/Educate"));
const Environment = React.lazy(() => import("./Pages/Environment"));
const News = React.lazy(() => import("./Pages/News"));
const Skills = React.lazy(() => import("./Pages/Skills"));
const SkillHome = React.lazy(() => import("./Pages/SkillHome"));
const Volunteer = React.lazy(() => import("./Pages/Volunteer"));
const Docs = React.lazy(() => import("./Pages/Docs"));
const About = React.lazy(() => import("./Pages/About"));
const ElderlyHome = React.lazy(() => import("./Pages/ElderlyHome"));
const EmpowerHome = React.lazy(() => import("./Pages/EmpowerHome"));
const Team = React.lazy(() => import("./Pages/Team"));
const ElderlyCare = React.lazy(() => import("./Pages/ElderlyCare"));
const Empowerment = React.lazy(() => import("./Pages/Empowerment"));
const Banner = React.lazy(() => import("./Pages/Banner"));
const EventsMainPage = React.lazy(() => import("./Pages/EventsPage"));
const TeamMainPage = React.lazy(() => import("./Pages/TeamPage"));
const Journey = React.lazy(() => import("./Pages/JourneyImage"));
const JourneyText = React.lazy(() => import("./Pages/JourneyText"));

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
    },
    {
        path: "/env",
        component: <Env/>,
        privateRoute: true
    },
    {
        path: "/educate",
        component: <Educate/>,
        privateRoute: true
    },
    {
        path: "/environment",
        component: <Environment/>,
        privateRoute: true
    },
    {
        path: "/news",
        component: <News/>,
        privateRoute: true
    },
    {
        path: "/skills",
        component: <Skills/>,
        privateRoute: true
    },
    {
        path: "/skillhome",
        component: <SkillHome/>,
        privateRoute: true
    },
    {
        path: "/volunteer",
        component: <Volunteer/>,
        privateRoute: true
    },
    {
        path: "/docs",
        component: <Docs/>,
        privateRoute: true
    },
    {
        path: "/about",
        component: <About/>,
        privateRoute: true
    },
    {
        path: "/elderlyCare",
        component: <ElderlyHome/>,
        privateRoute: true
    },
    {
        path: "/empowerment-home",
        component: <EmpowerHome/>,
        privateRoute: true
    },
    {
        path: "/team",
        component: <Team/>,
        privateRoute: true
    },
    {
        path: "/elderly",
        component: <ElderlyCare/>,
        privateRoute: true
    },
    {
        path: "/empowerment",
        component: <Empowerment/>,
        privateRoute: true
    },
    {
        path: "/banner",
        component: <Banner/>,
        privateRoute: true
    },
    {
        path: "/eventsPage",
        component: <EventsMainPage/>,
        privateRoute: true
    },
    {
        path: "/teamPage",
        component: <TeamMainPage/>,
        privateRoute: true
    },
    {
        path: "/journey",
        component: <Journey/>,
        privateRoute: true
    },
    {
        path: "/journeytext",
        component: <JourneyText/>,
        privateRoute: true
    },

];
export default routes;