import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../../Shared/SocialLogin";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useAuth from "../../Hooks/UseAuth";

const Login = () => {
    // show pass and hide pass
    const [show, setShow] = useState();

    const { userLogIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // handleUserLogin function
    const handleUserLogin = (event) => {
        // stop reloading
        event.preventDefault();
        // get the info form the field
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // userLogIn function
        userLogIn(email, password).then(result => {
            const logIn = result.user;
            navigate(from, { replace: true })
            // show the toast
            toast.success('Log in Successful')
        })
            .catch(error => {
                toast.error('Wrong Password')
                console.log(error);
            })
        // reset the from
        form.reset()
    }
    return (
        <div
            className="max-w-7xl mx-auto mt-6">
            <Helmet>
                <title>
                    Login | Travel Guru
                </title>
            </Helmet>
            <div
                className="w-full max-w-md mx-auto border-2 px-8 py-4 rounded-md">
                <h2
                    className="text-3xl p-3">
                    Login
                </h2>
                {/* form section start */}
                <form
                    onSubmit={handleUserLogin}>
                    <div className="form-control">
                        <label
                            className="label">
                            <span
                                className="label-text">
                                Enter Your Email
                            </span>
                        </label>
                        <input
                            name="email"
                            type="text"
                            placeholder="Enter Your Email"
                            className="input input-bordered"
                            required />
                    </div>
                    <div
                        className="form-control">
                        <label
                            className="label">
                            <span
                                className="label-text">
                                Enter Your Password
                            </span>
                        </label>
                        <input
                            name="password"
                            type={
                                show ?
                                    'text'
                                    :
                                    'password'
                            }
                            placeholder="Enter Your Password"
                            className="input input-bordered"
                            required />
                        {/* show or hide btn */}
                        <p
                            onClick={() => setShow(!show)}
                            className="relative bottom-9 left-72 md:left-72 text-3xl">
                            <small>
                                {
                                    show ?
                                        <span>
                                            <FaEyeSlash />
                                        </span>
                                        :
                                        <span>
                                            <FaEye />
                                        </span>
                                }
                            </small>
                        </p>
                    </div>
                    <div
                        className="flex justify-between">
                        {/* check box start */}
                        <div className="form-control">
                            <label
                                className="cursor-pointer flex items-center gap-4">
                                <input
                                    type="checkbox"
                                    className="checkbox checkbox-warning" />
                                <span
                                    className="label-text">
                                    Remember me
                                </span>
                            </label>
                        </div>
                        {/* check box end */}
                        <div>
                            <a
                                className="link link-warning hover:text-gray-500">
                                Forgot Password
                            </a>
                        </div>
                    </div>
                    {/* submit btn */}
                    <div
                        className="form-control mt-8"
                        type="submit">
                        <button
                            className="btn btn-block btn-warning text-base font-medium">
                            Login
                        </button>
                    </div>
                    <p
                        className="font-medium text-base mt-3 mb-3 text-center">
                        Don’t have an account? <Link
                            to="/signUp"
                            className="link link-warning hover:text-gray-500">
                            Create an account
                        </Link>
                    </p>
                </form>
            </div>
            <div>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Login;