import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typewriter } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";





const Banner = () => {
  const images = [
    "https://i.ibb.co/Y70k8Gps/1.jpg",
    "https://i.ibb.co/Jjz4nmFF/2.jpg",
    "https://i.ibb.co/Z1wHNchp/3.jpg",
    "https://i.ibb.co/wZfT7xkx/4.jpg",
  ];

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-[#FF3811] p-3 rounded-full shadow hover:bg-[#e3320f] transition"
      >
        <FaChevronRight size={18} className="text-white" />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/70 p-3 rounded-full shadow hover:bg-white transition"
      >
        <FaChevronLeft size={18} className="text-black" />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div className="absolute bottom-4 w-full flex justify-center">
        <ul className="flex gap-2">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className={`w-3 h-3 rounded-full transition ${i === 0 ? "bg-[#FF3811]" : "bg-gray-400"}`}></div>
    ),
  };


  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full relative overflow-hidden h-[500px] md:h-[700px] md:rounded-xl">
      <Slider {...settings}>
        {images.map((src, i) => (
          <div key={i} className="relative h-[500px] md:h-[700px] ">
            <img
              src={src}
              alt={`slide-${i}`}
              className="w-full h-full object-cover"
            />
            {/* Text Left Box */}
            <div className="absolute inset-0 flex items-center bg-black/30">
              <div className="max-w-xl mx-auto md:mx-16 text-white p-6 rounded-md space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                  <Typewriter
                    words={['Affordable Price For Car Servicing', 'Best Auto Solutions', 'Your Car Deserves the Best']}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h2>

                <p className="text-sm md:text-base">
                  There are many variations of passages of available, but the majority have suffered alteration in some form.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <button
                    className="bg-[#FF3811] text-white px-5 py-2 rounded-md hover:bg-[#e32d0c] transition shadow-md"
                    data-aos="fade-right" 
                    data-aos-duration="1500" 
                  >
                    Discover More
                  </button>

                  <button
                    className="border border-white text-white px-5 py-2 rounded-md hover:bg-white hover:text-black transition shadow-md"
                    data-aos="fade-left" 
                    data-aos-duration="1500" 
                  >
                    Latest Project
                  </button>
                </div>

              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;