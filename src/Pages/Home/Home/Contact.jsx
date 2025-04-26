import timelogo from "../../../assets/001-timetable.svg";
import location from "../../../assets/Group 35.svg";
import call from "../../../assets/Group 34.svg";

const Contact = () => {
    return (
        <div className="bg-[#151515] m-4 p-6 md:p-12 lg:p-20 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Time Section */}
                <div className="flex items-center">
                    <img src={timelogo} alt="time" className="w-12 h-12" />
                    <div className="ml-5">
                        <h1 className="text-white text-base font-medium">
                            We are open monday-friday
                        </h1>
                        <h1 className="text-white text-2xl font-bold">
                            7:00 am - 9:00 pm
                        </h1>
                    </div>
                </div>

                {/* Call Section */}
                <div className="flex items-center">
                    <img src={call} alt="call" className="w-12 h-12" />
                    <div className="ml-5">
                        <h1 className="text-white text-base font-medium">
                            Have a question?
                        </h1>
                        <h1 className="text-white text-2xl font-bold">
                            +2546 251 2658
                        </h1>
                    </div>
                </div>

                {/* Location Section */}
                <div className="flex items-center">
                    <img src={location} alt="location" className="w-12 h-12" />
                    <div className="ml-5">
                        <h1 className="text-white text-base font-medium">
                            Need a repair? our address
                        </h1>
                        <h1 className="text-white text-2xl font-bold">
                            Liza Street, New York
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
