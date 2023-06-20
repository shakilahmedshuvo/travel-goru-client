import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";
import logo from '../../assets/logo.png';
import { BsSearch } from "react-icons/bs";
import { toast } from "react-hot-toast";

const NavBar = () => {
    const { user, userLogOut } = useAuth();

    // handleLogOut function
    const handleLogOut = () => {
        userLogOut()
            .then(() => {
                toast.success('User has been Log Out')
            })
            .catch(error => console.log(error));
    };

    return (
        <div className='flex justify-evenly pt-8 max-w-7xl mx-auto'>
            <div
                className="w-[10%] bg-white py-2 px-4 rounded-lg mr-auto">
                <Link
                    to='/'>
                    <img
                        src={logo}
                        alt="" />
                </Link>
            </div>
            <form
                className='relative rounded-lg px-28  outline-none bg-[#ffffff38] border border-white flex justify-center text-white mx-auto'>
                <button
                    type='submit'
                    className='px-2 text-2xl mr-2'>
                    <BsSearch />
                </button>
                <input
                    className='rounded-lg outline-none bg-transparent text-white input-field'
                    placeholder='Search Your Destination ...'
                    type="text"
                    name="search" />
            </form>
            <div
                className='flex gap-14 items-center rounded-lg'>
                <NavLink>
                    News
                </NavLink>
                <NavLink>
                    Destination
                </NavLink>
                <NavLink>
                    Blog
                </NavLink>
                <NavLink>
                    Contact
                </NavLink>
                {
                    user ?
                        <>
                            {/* tooltip show and the profile picture */}
                            <div
                                className="tooltip tooltip-warning tooltip-bottom flex justify-center items-center font-medium"
                                data-tip={user.displayName}>
                                <img
                                    className="w-12 h-12 rounded-full"
                                    src=
                                    {
                                        user?.photoURL
                                    }
                                    alt="" />
                            </div>
                            <Link
                                onClick={handleLogOut}
                                className='px-8 py-2 rounded-md text-black bg-yellow-500'>
                                Logout
                            </Link>
                        </>
                        :
                        <>
                            <Link
                                to="/login"
                                className='px-8 py-2 rounded-md text-black bg-yellow-500'>
                                Login
                            </Link>
                        </>
                }
            </div>
        </div>
    );
};

export default NavBar;