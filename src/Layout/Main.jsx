import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import { Toaster } from "react-hot-toast";

const Main = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Toaster />
        </div>
    );
};

export default Main;