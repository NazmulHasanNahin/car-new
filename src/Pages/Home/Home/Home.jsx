import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import CoreFea from "./CoreFea";
import PopularProduct from "./PopularProduct";
import Service from "./Service";
import Team from "./Team";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Home = () => {

    useEffect(() => {
            AOS.init();
          }, []);
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Contact></Contact>
            <PopularProduct></PopularProduct>
            <Team></Team>
            <CoreFea></CoreFea>

        </div>
    );
};

export default Home;