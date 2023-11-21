import Navbar from "../Shared/Navbar/Navbar";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import PopularMenu from "./PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Category/>
            <PopularMenu/>
        </div>
    );
};

export default Home;