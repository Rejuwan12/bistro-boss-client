import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../../assets/menu/banner3.jpg'
import dessertPic from '../../../../assets/menu/dessert-bg.jpeg'
import pizzaPic from '../../../../assets/menu/pizza-bg.jpg'
import saladPic from '../../../../assets/menu/salad-bg.jpg'
import soupPic from '../../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
    const [menu]= useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss | Our Menu
                </title>
            </Helmet>
            <Cover img={menuImg} title={'our menu'}/>
            <section>
                <SectionTitle
                subHeading={"Don't Miss "}
                heading={"todays offer"}
                />
                <MenuCategory items={offered}/>
                {/* dessert */}
                <MenuCategory 
                items={desserts}
                title={'dessert'}
                coverImg={dessertPic}
                />
                {/* pizza  */}
                <MenuCategory 
                items={pizza}
                title={'pizza'}
                coverImg={pizzaPic}
                />
                {/*salad  */}
                <MenuCategory 
                items={salad}
                title={'salad'}
                coverImg={saladPic}
                />
                {/* soup  */}
                <MenuCategory 
                items={soup}
                title={'soup'}
                coverImg={soupPic}
                />
            </section>
         
        </div>
    );
};

export default Menu;