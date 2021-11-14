import React from 'react';
import Header from '../Header/Header';
import Service from '../Service/Service';
import TopSection from '../TopSection/TopSection';
import About from './../About/About';

const Home = () => {
    return (
        <div>
            <Header/>
            <TopSection/>
            <About/>
            <Service/>
        </div>
    );
};

export default Home;