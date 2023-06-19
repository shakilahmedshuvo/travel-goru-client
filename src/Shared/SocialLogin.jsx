import { toast } from "react-hot-toast";
import useAuth from "../Hooks/UseAuth";

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
            onClick={handleGoogleSignIn}
            className="w-full max-w-md mx-auto">
            
        </div>
    );
};

export default SocialLogin;