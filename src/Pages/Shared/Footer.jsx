import logo from "../../assets/logo.svg";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#151515] text-gray-300 p-10 lg:p-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <aside className="max-w-xs">
                    <img src={logo} alt="Car Doctor Logo" className="w-40 mb-4" />
                    <p>
                        <span className="text-white font-semibold">Car Doctor Ltd.</span>
                        <br />
                        <span className="text-sm text-gray-400 italic">
                            If your hope is in cars, your happiness will soon be found in our mechanic shop.
                        </span>
                    </p>
                    <div className="flex gap-4 mt-4">
                        <a href="#" className="text-gray-400 hover:text-[#1877F2] transition"><FaFacebook size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-[#1DA1F2] transition"><FaTwitter size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-[#E4405F] transition"><FaInstagram size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-[#0A66C2] transition"><FaLinkedin size={20} /></a>
                    </div>
                </aside>

                <nav>
                    <h6 className="text-white text-lg font-semibold mb-4">Services</h6>
                    <div className="grid gap-2">
                        <a className="hover:text-[#FF3811] text-gray-400 transition">Engine Repair</a>
                        <a className="hover:text-[#FF3811] text-gray-400 transition">Transmission</a>
                        <a className="hover:text-[#FF3811] text-gray-400 transition">Brake Service</a>
                        <a className="hover:text-[#FF3811] text-gray-400 transition">Diagnostics</a>
                    </div>
                </nav>

                <nav>
                    <h6 className="text-white text-lg font-semibold mb-4">Company</h6>
                    <div className="grid gap-2">
                        <a className="hover:text-[#FF3811] text-gray-400 transition">About us</a>
                        <a className="hover:text-[#FF3811] text-gray-400 transition">Contact</a>
                        <a className="hover:text-[#FF3811] text-gray-400 transition">Careers</a>
                        <a className="hover:text-[#FF3811] text-gray-400 transition">Locations</a>
                    </div>
                </nav>

                <nav>
                    <h6 className="text-white text-lg font-semibold mb-4">Legal</h6>
                    <div className="grid gap-2">
                        <a className="hover:text-[#FF3811] text-gray-400 transition">Terms of use</a>
                        <a className="hover:text-[#FF3811] text-gray-400 transition">Privacy policy</a>
                        <a className="hover:text-[#FF3811] text-gray-400 transition">Cookie policy</a>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
