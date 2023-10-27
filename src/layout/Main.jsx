import { Outlet } from "react-router-dom";
import Footer from "../pages/home/shared/Footer";
import Navbar from "../pages/home/shared/Navbar";


const Main = () => {
    return (
        <div><Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;