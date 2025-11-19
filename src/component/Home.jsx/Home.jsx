import React from 'react';
import Banner from '../Banner/Banner';
import Title from '../Title/Title';
import Card from '../Card/Card';
import Login from '../Login.jsx/Login';
import Dashboard from '../Dashboard/Dashboard';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Title></Title>
            <Dashboard></Dashboard>
            <Card></Card>
            <Login></Login>
        </div>
    );
};

export default Home;