import exprtteam from "../../../assets/Group 71.svg";
import time from "../../../assets/Group 38729.svg";
import grp from "../../../assets/Group.svg";
import wrnc from "../../../assets/Wrench.svg";
import chk from "../../../assets/Group 38730.svg";
import delv from "../../../assets/Group 38731.svg";

const CoreFea = () => {
    const features = [
        {
            id: 1,
            icon: exprtteam,
            title: "Expert Team",
            description: "Certified professionals with years of experience",
            aos: "fade-left",
            delay: 0
        },
        {
            id: 2,
            icon: time,
            title: "Timely Delivery",
            description: "We respect your time with on-time service",
            aos: "fade-left",
            delay: 100
        },
        {
            id: 3,
            icon: grp,
            title: "24/7 Support",
            description: "Round-the-clock assistance for your needs",
            aos: "fade-left",
            delay: 200
        },
        {
            id: 4,
            icon: wrnc,
            title: "Best Equipment",
            description: "State-of-the-art tools for quality service",
            aos: "fade-right",
            delay: 0
        },
        {
            id: 5,
            icon: chk,
            title: "100% Guaranty",
            description: "Quality assurance on all our services",
            aos: "fade-right",
            delay: 100
        },
        {
            id: 6,
            icon: delv,
            title: "Fast Service",
            description: "Quick turnaround without compromising quality",
            aos: "fade-right",
            delay: 200
        }
    ];

    return (
        <div className="container mx-auto px-4 py-16">
            {/* Header Section */}
            <div className="text-center mb-16">
                <span className="text-[#FF3811] text-lg font-semibold">Why Choose Us</span>
                <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">Our Core Features</h2>
                <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
                    We provide premium automotive services with these key advantages that set us apart.
                </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                {features.map((feature) => (
                    <div
                        key={feature.id}
                        data-aos={feature.aos}
                        data-aos-duration="1000"
                        data-aos-delay={feature.delay}
                        className="group p-8 border-2 border-gray-200 rounded-2xl hover:border-[#FF3811] transition-all duration-300 hover:shadow-lg flex flex-col items-center text-center"
                    >
                        <div className="w-16 h-16 bg-gray-100 group-hover:bg-[#FF3811] rounded-full flex items-center justify-center mb-5 transition-colors duration-300">
                            <img 
                                src={feature.icon} 
                                alt={feature.title} 
                                className="w-8 h-8 group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
                            />
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-[#FF3811] transition-colors duration-300">
                            {feature.title}
                        </h3>
                        <p className="text-gray-500 text-sm">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoreFea;
