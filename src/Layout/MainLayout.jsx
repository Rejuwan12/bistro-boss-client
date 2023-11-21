
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-screen-lg mx-auto'>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;