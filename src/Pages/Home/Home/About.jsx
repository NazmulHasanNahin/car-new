import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const About = () => {


    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div className="hero min-h-screen my-2 px-4">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 relative mb-10 lg:mb-0" data-aos="fade-right" 
                    data-aos-duration="1500" >
                    <img
                        src="https://i.ibb.co.com/gZg6jygJ/person.jpg"
                        className="w-11/12 rounded-lg shadow-2xl mx-auto"
                    />
                    <img
                        src="https://i.ibb.co.com/Q7pJKkT5/parts.jpg"
                        className="w-[60%] absolute -right-4 top-1/2 border-8 border-white rounded-lg shadow-2xl hidden sm:block"
                    />
                </div>
                <div className="w-full lg:w-1/2 lg:ml-12 space-y-4">
                    <h3 className="text-[#FF3811] text-2xl md:text-4xl font-bold">About Us</h3>
                    <h2 className="text-neutral-900 text-3xl md:text-5xl font-bold max-w-md">
                        We are qualified & of experience in this field
                    </h2>
                    <p className="text-neutral-500 text-base capitalize leading-loose max-w-xl">
                    With over a decade of hands-on experience, our dedicated team delivers top-notch automotive services with precision and care. We believe in quality, transparency, and building long-term relationships with our clients.
                    </p>
                    <p className="text-neutral-500 text-base capitalize leading-loose max-w-xl">
                    Our technicians are highly trained and equipped with the latest tools to ensure your vehicle service. 
                    </p>
                    <div data-aos="fade-up" 
                    data-aos-duration="1500" className="w-44 h-14 bg-[#FF3811] rounded-[5px] mt-3 flex items-center justify-center">
                        <h1 className="text-white text-xl text-center">Get More Info</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
