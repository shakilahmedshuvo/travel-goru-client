import { toast } from "react-hot-toast";
import useAuth from "../Hooks/UseAuth";
import fbLogo from '../assets/images/icons/fb.png';
import googleLogo from '../assets/images/icons/google.png';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();

    // handleGoogleSignIn function
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                toast.success('Your Google Login Successful')
            })
    };
    return (
        <div
            className="w-full max-w-sm mx-auto">
            {/* divider */}
            <div className="divider mt-4">
                Or
            </div>
            {/* facebook sigIn start */}
            <div
                className="border-2 rounded-full flex items-center">
                <img
                    className="w-[10%] m-2"
                    src={fbLogo}
                    alt="" />
                <p
                    className="mx-auto pr-6 text-lg">
                    Continue with Facebook
                </p>
            </div>
            {/* facebook sigIn end */}
            {/* Google sigIn start */}
            <div
                onClick={handleGoogleSignIn}
                className="border-2 rounded-full flex items-center my-4">
                <img
                    className="w-[10%] m-2"
                    src={googleLogo}
                    alt="" />
                <p
                    className="mx-auto pr-6 text-lg">
                    Continue with Google
                </p>
            </div>
            {/* Google sigIn end */}
        </div>
    );
};

export default SocialLogin;