import { Outlet } from "react-router-dom";
import { NavBar } from "../Pages/Shared/NavBar";
import Footer from "../Pages/Shared/Footer";

const Root = () => {
    return (
        <div>
            <NavBar/>
            <Outlet></Outlet>
            <Footer/>
            
        </div>
    );
};

export default Root;