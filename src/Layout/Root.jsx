import { Navbar } from "@material-tailwind/react";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;