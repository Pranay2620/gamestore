import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

function LayoutPage() {
    return (
        <>
        <Navigation />
        <Outlet />
        </>
    )
}



export default LayoutPage