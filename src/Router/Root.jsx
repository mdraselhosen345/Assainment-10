import React from 'react';
import Navber from '../component/Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navber className='mx-auto w-[1250px] text-center'></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;