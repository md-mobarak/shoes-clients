import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import ShoeProduct from '../ShoeProducts/ShoeProduct';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <marquee direction="left" scrollamount="14">
                <span className='text-4xl font-bold'>NEW COLLECTION IS COMING.. </span>
            </marquee>
            <Banner></Banner>
            <ShoeProduct></ShoeProduct>
        </div>
    );
};

export default Home;