import { Outlet } from "react-router-dom"
import NavBar from "./Pages/NavBar"

export function Layout() {
    return (
         <div className="flex flex-col h-[100vh]"> 
            <NavBar />
            <div className="flex-1 ">
                <Outlet/>
            </div>
        </div> 
    )
}