import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Main = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Home | Travel Guru
                </title>
            </Helmet>
            <Outlet />
            <Toaster />
        </div>
    );
};

export default Main;