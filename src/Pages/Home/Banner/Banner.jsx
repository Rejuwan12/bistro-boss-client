import pic1 from '../../../../assets/home/01.jpg'
import pic2 from '../../../../assets/home/02.jpg'
import pic3 from '../../../../assets/home/03.png'
import pic4 from '../../../../assets/home/04.jpg'
import pic5 from '../../../../assets/home/05.png'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
    return (
       <div className=' text-center items-center'>
         <Carousel>
        <div>
            <img src={pic1} />
           
        </div>
        <div>
            <img src={pic2} />
          
        </div>
        <div>
            <img src={pic3} />
           
        </div>
        <div>
            <img src={pic4} />
         
        </div>
        <div>
        <img src={pic5} />
 
        </div>
       
    </Carousel>
       </div>
    );
};

export default Banner;