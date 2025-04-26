import { FaArrowRight } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;
    // , description, facility

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div  data-aos="zoom-in" data-aos-duration="1500" className="card bg-base-100 border-2 shadow-sm rounded-lg overflow-hidden">
            <figure className="px-10 pt-10">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-60 object-cover rounded-lg" />
            </figure>
            <div className="card-body text-center">
                <h2 className="card-title text-xl font-semibold mb-4">{title}</h2>
                {/* <p className="text-neutral-600 text-sm mb-4">{description}</p> */}
                <div className="flex">
                    <p className="text-xl text-[#FF3811] mr-36 font-bold">Price: <span className="text-2xl">${price}</span></p>
                    <button className="text-[#FF3811] text-2xl transition-all duration-300 transform hover:scale-110 hover:bg-[#FF5700] hover:text-white p-2 rounded-full shadow-md">
                        <FaArrowRight />
                    </button>

                </div>

            </div>
        </div>
    );
};

export default ServiceCard;
