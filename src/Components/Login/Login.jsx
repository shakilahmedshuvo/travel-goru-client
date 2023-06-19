import useAuth from "../../Hooks/UseAuth";
import { toast } from "react-hot-toast";

const Login = () => {
    const { googleSignIn } = useAuth();

    // handle google log in
    // handleGoogleSignIn function
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                toast.success('Your Google Login Successful')
            })
    }
    return (
        <div>
            <h2>
                this is login
            </h2>
            <p
                onClick={handleGoogleSignIn}>
                goggle
            </p>
        </div>
    );
};

export default Login;