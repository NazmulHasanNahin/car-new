import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {

    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })

    }, [])


    return (
        <div>
            {/* text  */}
            <div>
                <h1 className="text-center text-[#FF3811] text-3xl font-bold ">Service</h1>
                <h1 className="my-6 text-center text-neutral-900 text-5xl font-bold ">Our Service Area</h1>
                <div className="text-center mb-10 text-neutral-500 text-base font-normal  capitalize">We bring fast, reliable car services to every corner of the city. From new and used cars to  rentals and repairs — everything under<br /> one roof. Service made simpler, closer, and smarter.</div>
            </div>
            {/* img  */}
            <div className="grid  my-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10">
                {services.map(service => (
                    <ServiceCard key={service._id} service={service} />
                ))}
            </div>
            <div className="flex mb-10 justify-center items-center">
                <div data-aos="fade-up" 
                    data-aos-duration="1500" className="w-44 h-14 rounded-[5px] border border-orange-600 flex justify-center items-center text-orange-600 font-semibold hover:bg-[#FF3811] hover:text-white transition-colors duration-300 cursor-pointer">
                    More Services
                </div>
            </div>

        </div>
    );
};

export default Service;