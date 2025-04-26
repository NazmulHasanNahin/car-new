import { FaStar, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Team = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Robert Mark",
            position: "Engine Expert",
            image: "https://i.ibb.co.com/1fdWLnnn/1.jpg",
            rating: 5,
            experience: "15 years experience",
            specialties: ["Engine Repair", "Performance Tuning", "Diagnostics"],
            social: {
                facebook: "",
                twitter: "",
                instagram: "",
                linkedin: ""
            }
        },
        {
            id: 2,
            name: "Sarah Johnson",
            position: "Transmission Specialist",
            image: "https://i.ibb.co.com/cX3PbN9c/2.jpg",
            rating: 4,
            experience: "12 years experience",
            specialties: ["Automatic Transmissions", "Manual Transmissions", "Drivetrain"],
            social: {
                facebook: "",
                twitter: "",
                instagram: "",
                linkedin: ""
            }
        },
        {
            id: 3,
            name: "Michael Chen",
            position: "Electrical Systems",
            image: "https://i.ibb.co.com/nqhKwnxy/3.jpg",
            rating: 5,
            experience: "10 years experience",
            specialties: ["Wiring", "ECU Programming", "Hybrid Systems"],
            social: {
                facebook: "",
                twitter: "",
                instagram: "",
                linkedin: ""
            }
        }
    ];

    return (
        <div className="container mx-auto px-4 py-16">
            {/* Team Header */}
            <div className="text-center mb-16">
                <span className="text-[#FF3811] text-lg font-semibold">OUR TEAM</span>
                <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">Meet Our Expert Technicians</h2>
                <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
                    Our certified technicians bring years of experience and specialized knowledge to ensure your vehicle gets the best care.
                </p>
            </div>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamMembers.map((member) => (
                    <div key={member.id} className="group">
                        {/* Team Member Card */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                            {/* Team Member Image */}
                            <div className="relative overflow-hidden h-72">
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Rating Badge */}
                                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md flex items-center">
                                    <FaStar className="text-yellow-400 mr-1" />
                                    <span className="font-semibold">{member.rating}.0</span>
                                </div>
                            </div>

                            {/* Team Member Info */}
                            <div className="p-6 text-center flex-grow">
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-[#FF3811] font-medium mb-3">{member.position}</p>
                                <p className="text-gray-500 mb-4">{member.experience}</p>
                                
                                {/* Specialties */}
                                <div className="mb-5">
                                    <h4 className="text-sm font-semibold text-gray-500 mb-2">SPECIALTIES</h4>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {member.specialties.map((specialty, index) => (
                                            <span key={index} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                                                {specialty}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Social Media Links */}
                            <div className="px-6 pb-6">
                                <div className="flex justify-center space-x-4 border-t pt-4">
                                    <a href={member.social.facebook} className="text-gray-400 hover:text-[#FF3811] transition-colors">
                                        <FaFacebook size={20} />
                                    </a>
                                    <a href={member.social.twitter} className="text-gray-400 hover:text-[#FF3811] transition-colors">
                                        <FaTwitter size={20} />
                                    </a>
                                    <a href={member.social.instagram} className="text-gray-400 hover:text-[#FF3811] transition-colors">
                                        <FaInstagram size={20} />
                                    </a>
                                    <a href={member.social.linkedin} className="text-gray-400 hover:text-[#FF3811] transition-colors">
                                        <FaLinkedin size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
                <button data-aos="fade-up" 
                    data-aos-duration="1500" className="bg-[#FF3811] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e0300f] transition-colors shadow-md hover:shadow-lg">
                    View All Team Members
                </button>
            </div>
        </div>
    );
};

export default Team;