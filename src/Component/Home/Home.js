import React from 'react';
import Nasir from '../AboutOfNasir/Nasir';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import TabSection from '../Tabs/TabSection';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <TabSection></TabSection>
            <Nasir></Nasir>
        </div>
    );
};

export default Home;