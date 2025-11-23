import React from 'react';
import Banner from '../Banner/Banner';
import Title from '../Title/Title';
import Card from '../Card/Card';
import Login from '../Login.jsx/Login';
import Dashboard from '../Dashboard/Dashboard';
import Portfolio from '../Portfolio/Portfolio'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Title></Title>
            <Dashboard></Dashboard>
            <Card></Card>
            <Login></Login>
            <Portfolio></Portfolio>
        </div>
    );
};

export default Home;