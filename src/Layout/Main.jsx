import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Main = () => {
    return (
        <div
            className="main-bg">
            <div
                className='bg-layer'>
                <Helmet>
                    <title>
                        Home | Travel Guru
                    </title>
                </Helmet>
                <NavBar />
                <div
                    className='container mx-auto flex flex-col justify-center h-screen'>
                    <Outlet />
                    <Toaster />
                </div>
            </div>
        </div>
    );
};

export default Main;