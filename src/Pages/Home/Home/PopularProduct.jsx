import { FaArrowRight, FaStar } from "react-icons/fa6";

const PopularProduct = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-[#FF3811] text-3xl font-bold">Popular Products</h1>
                <h2 className="my-4 text-neutral-900 text-5xl font-bold">Featured Items</h2>
                <p className="text-neutral-500 text-base max-w-2xl mx-auto">
                    Discover our top-rated products loved by customers
                </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div  className="card bg-base-100 border-2 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <figure className="w-full">
                        <img
                            src="https://i.ibb.co.com/V0nmRHbx/1.png"
                            alt="Product"
                            className="w-full h-72"
                        />
                    </figure>
                    <div className="card-body p-6">
                        <div className="flex justify-center mb-3">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="text-yellow-400 text-lg" />
                            ))}
                        </div>


                        <h3 className="text-xl font-semibold text-center mb-2">Hydraulic Brake </h3>
                        <div className="flex justify-between items-center mt-4">
                            <span className="text-2xl font-bold text-[#FF3811]">$99.99</span>
                            <button className="btn btn-circle btn-outline border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white">
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>


                <div  className="card bg-base-100 border shadow-sm rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <figure className="w-full">
                        <img
                            src="https://i.ibb.co.com/wNdfzqvf/2.png"
                            alt="Product"
                            className="w-full h-72 "
                        />
                    </figure>
                    <div className="card-body p-6">

                        <div className="flex justify-center mb-3">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="text-yellow-400 text-lg" />
                            ))}
                        </div>


                        <h3 className="text-xl font-semibold text-center mb-2">Suspension</h3>


                        <div className="flex justify-between items-center mt-4">
                            <span className="text-2xl font-bold text-[#FF3811]">$99.99</span>
                            <button className="btn btn-circle btn-outline border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white">
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>

                <div  className="card bg-base-100 border shadow-sm rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <figure className="w-full">
                        <img
                            src="https://i.ibb.co.com/5x95C6Rw/3.png"
                            alt="Product"
                            className="w-full h-72 "
                        />
                    </figure>
                    <div className="card-body p-6">

                        <div className="flex justify-center mb-3">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="text-yellow-400 text-lg" />
                            ))}
                        </div>


                        <h3 className="text-xl font-semibold text-center mb-2">Oil Filter || Air Filter</h3>


                        <div className="flex justify-between items-center mt-4">
                            <span className="text-2xl font-bold text-[#FF3811]">$99.99</span>
                            <button className="btn btn-circle btn-outline border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white">
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>

                <div  className="card bg-base-100 border shadow-sm rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <figure className="w-full">
                        <img
                            src="https://i.ibb.co.com/7xDVwgxy/4.png"
                            alt="Product"
                            className="w-full h-72 "
                        />
                    </figure>
                    <div className="card-body p-6">

                        <div className="flex justify-center mb-3">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="text-yellow-400 text-lg" />
                            ))}
                        </div>


                        <h3 className="text-xl font-semibold text-center mb-2">Battery</h3>


                        <div className="flex justify-between items-center mt-4">
                            <span className="text-2xl font-bold text-[#FF3811]">$99.99</span>
                            <button className="btn btn-circle btn-outline border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white">
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
                <div  className="card bg-base-100 border shadow-sm rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <figure className="w-full">
                        <img
                            src="https://i.ibb.co.com/HLpCVZrR/5.png"
                            alt="Product"
                            className="w-full h-72 "
                        />
                    </figure>
                    <div className="card-body p-6">

                        <div className="flex justify-center mb-3">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="text-yellow-400 text-lg" />
                            ))}
                        </div>


                        <h3 className="text-xl font-semibold text-center mb-2">Tyre</h3>


                        <div className="flex justify-between items-center mt-4">
                            <span className="text-2xl font-bold text-[#FF3811]">$99.99</span>
                            <button className="btn btn-circle btn-outline border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white">
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
                <div  className="card bg-base-100 border shadow-sm rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <figure className="w-full">
                        <img
                            src="https://i.ibb.co.com/MyCtHkvr/6.png"
                            alt="Product"
                            className="w-full h-72 "
                        />
                    </figure>
                    <div className="card-body p-6">

                        <div className="flex justify-center mb-3">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="text-yellow-400 text-lg" />
                            ))}
                        </div>


                        <h3 className="text-xl font-semibold text-center mb-2">Full Service</h3>


                        <div className="flex justify-between items-center mt-4">
                            <span className="text-2xl font-bold text-[#FF3811]">$99.99</span>
                            <button className="btn btn-circle btn-outline border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white">
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Button */}
            <div className="flex justify-center mt-12">
                <button data-aos="fade-up" 
                    data-aos-duration="1500" className="btn btn-outline border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white px-8 py-3 text-lg">
                    View All Products
                </button>
            </div>
        </div>
    );
};

export default PopularProduct;