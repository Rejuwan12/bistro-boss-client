import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import feature from '../../../../assets/home/featured.jpg'
import './featured.css'

const FeturedItem = () => {
    return (
        <div className="featured-item bg-fixed text-yellow-700 pt-8">
            <SectionTitle
            subHeading={'check it out'}
            heading={'Featured Item'}
            />
            <div className="md:flex justify-center items-center pb-20 pt-12 px-16">
                    

                    <div>
                        <img src={feature} alt="" />

                    </div>
                    <div className="md:ml-10"> 
                        <p>Aug 20, 2023</p>
                        <p className="uppercase"> where i can some</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim facere pariatur officia, excepturi ex cumque eligendi nostrum atque id animi quos, commodi nam, odit dolores ipsa ducimus culpa omnis maiores.</p>
                        <button className="btn btn-outline border-0 border-b-4" >Order Now</button>
                    </div> 


            </div>
            
        </div>
    );
};

export default FeturedItem;