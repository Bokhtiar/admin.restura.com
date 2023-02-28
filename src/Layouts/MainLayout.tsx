import { Outlet } from 'react-router-dom';
import { Footer } from '../Components/Footer';
import { Navbar } from '../Components/Navbar';
import { Sidebar } from '../Components/Sidebar'

export const MainLayout = () => (
    <>
        <section>
            <Navbar />
            <div className='grid md:grid-cols-5 gap-4'>
                <div className='col-span-1'>
                    <Sidebar />
                </div>
                <div className='col-span-4'>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </section>





    </>
);