
import { useContext, useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, Toaster } from 'sonner';
import loginimg from "../../assets/login.svg"
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../../Providers/Authcontext";
import { useEffect } from "react";
import axios from "axios";




const Login = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
    const location = useLocation();
    const navigate = useNavigate();


    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const { signInUser, creategoogleUser } = useContext(AuthContext);


    console.log(location);

    const handlesignin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");

        signInUser(email, password)
            .then(result => {
                toast.success('Successfully logged in!');
                console.log(result.user);
                // navigate(location?.state ? location?.state : "/")
                const user = { email };
                axios.post("http://localhost:5000/jwt", user,{withCredentials : true})
                .then(res => console.log(res.data));
                                                                                            


            })
            .catch(error => {
                toast.error('Failed to log in');
                console.error(error);

            })

    };

    // google er login 
    const handlegoogle = () => {
        creategoogleUser()
            .then(result => {
                toast.success('Successfully logged in with Google!');
                console.log(result.user);
                navigate(location?.state ? location?.state : "/")


            })
            .catch(error => {
                toast.error('Failed to log in with Google');
                console.error(error);
            })
    };



    return (
        <section className="min-h-screen mb-5 flex items-center justify-center bg-gray-100 px-4 py-10">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Image */}
                <div
                    className="hidden md:block w-full md:w-1/2"
                    data-aos="fade-right"
                >
                    <img src={loginimg} alt="Login Visual" className="w-full max-w-md mx-auto" />
                </div>

                {/* Form  */}
                <div
                    className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
                    data-aos="fade-left"
                >
                    <Typography variant="h3" color="blue-gray" className="mb-2 text-center">
                        Sign In
                    </Typography>
                    <Typography className="mb-8 text-gray-600 font-normal text-center text-[17px]">
                        Enter your email and password to sign in
                    </Typography>

                    <form onSubmit={handlesignin} className="text-left">
                        {/* Email */}
                        <div className="mb-6">
                            <label htmlFor="email">
                                <Typography
                                    variant="small"
                                    className="mb-2 block font-medium text-gray-900"
                                >
                                    Your Email
                                </Typography>
                            </label>
                            <Input
                                id="email"
                                required
                                color="gray"
                                size="lg"
                                type="email"
                                name="email"
                                placeholder="you@email.com"
                                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                labelProps={{ className: "hidden" }}
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-6">
                            <label htmlFor="password">
                                <Typography
                                    variant="small"
                                    className="mb-2 block font-medium text-gray-900"
                                >
                                    Password
                                </Typography>
                            </label>
                            <Input
                                id="password"
                                name="password"
                                size="lg"
                                placeholder="********"
                                labelProps={{ className: "hidden" }}
                                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                type={passwordShown ? "text" : "password"}
                                required
                                icon={
                                    <i onClick={togglePasswordVisiblity} className="cursor-pointer">
                                        {passwordShown ? (
                                            <EyeIcon className="h-5 w-5" />
                                        ) : (
                                            <EyeSlashIcon className="h-5 w-5" />
                                        )}
                                    </i>
                                }
                            />
                        </div>

                        {/* Sign In Button */}
                        {/* color="gray" */}
                        <Button
                            type="submit"
                            size="lg"
                            fullWidth
                            className="mt-4 bg-[#FF3811] hover:bg-[#ff5722] text-white transition-colors duration-300"
                        >
                            Sign In
                        </Button>

                    </form>

                    {/* Forgot Password */}
                    <div className="mt-3 flex justify-end">
                        <Typography
                            as="a"
                            href=""
                            color="blue-gray"
                            variant="small"
                            className="font-medium hover:underline text-sm"
                        >
                            Forgot password?
                        </Typography>
                    </div>

                    {/* Google Sign In */}
                    <Button
                        onClick={handlegoogle}

                        variant="outlined"
                        size="lg"
                        className="mt-6 flex h-12 items-center justify-center gap-2"
                        fullWidth
                    >
                        <img
                            src="https://www.material-tailwind.com/logos/logo-google.png"
                            alt="google"
                            className="h-6 w-6"
                        />
                        Sign in with Google
                    </Button>

                    {/* Create Account */}
                    <Typography
                        variant="small"
                        color="gray"
                        className="mt-6 text-center font-normal"
                    >
                        Not registered?{' '}
                        <Link to={'/reg'} className="font-medium text-gray-900 hover:underline">
                            Create account
                        </Link>
                    </Typography>
                </div>
            </div>
        </section>
    );
};



export default Login;
