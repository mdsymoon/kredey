import React from 'react';
import Footer from '../Footer/Footer';
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
            <Footer/>
        </div>
    );
};

export default Home;