
import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import FeturedItem from "./Fetured/FeturedItem";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss | Home
                </title>
            </Helmet>
            <Banner/>
            <Category/>
            <PopularMenu/>
            <FeturedItem/>
            <Testimonials/>
        </div>
    );
};

export default Home;