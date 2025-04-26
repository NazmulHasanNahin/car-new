import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Nav from "../Pages/Shared/Nav";

const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;