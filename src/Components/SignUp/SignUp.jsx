import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../Hooks/UseAuth";
import { toast } from "react-hot-toast";

const SignUp = () => {
    // show pass and hide pass
    const [show, setShow] = useState();
    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();

    const onSubmit = event => {
        // stop reloading
        event.preventDefault();
        // get the info form the field
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photo.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user)
                updateUserProfile(name, photoURL)
                    .then(() => {
                        toast.success('successfully Register')
                        navigate('/')
                    })
            })
            .catch(error => console.log(error))
    };

    return (
        <div
            className="max-w-7xl mx-auto mt-6">
            <Helmet>
                <title>
                    Sign Up | Travel Guru
                </title>
            </Helmet>
            <div
                className="w-full max-w-md mx-auto border-2 px-8 py-4 rounded-md">
                <h2
                    className="text-3xl p-3">
                    Create an account
                </h2>
                {/* form section start */}
                <form
                    onSubmit={onSubmit}>
                    <div className="form-control">
                        <label
                            className="label">
                            <span
                                className="label-text">
                                Enter Name
                            </span>
                        </label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered"
                            required />
                    </div>
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
                            placeholder="Your Email"
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control">
                        <label
                            className="label">
                            <span
                                className="label-text">
                                Enter Your Photo URL
                            </span>
                        </label>
                        <input
                            name="photo"
                            type="photo"
                            placeholder="Your Photo URL"
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
                    {/* submit btn */}
                    <div
                        className="form-control mt-4"
                        type="submit">
                        <button
                            className="btn btn-block btn-warning text-base font-medium">
                            Sign Up Now
                        </button>
                    </div>
                    <p
                        className="font-medium text-base mt-3 mb-3 text-center">
                        Already have an account?  <Link
                            to="/login"
                            className="link link-warning hover:text-gray-500">
                            Login
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

export default SignUp;