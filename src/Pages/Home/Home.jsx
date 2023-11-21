import Navbar from "../Shared/Navbar/Navbar";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import FeturedItem from "./Fetured/FeturedItem";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Category/>
            <PopularMenu/>
            <FeturedItem/>
            <Testimonials/>
        </div>
    );
};

export default Home;