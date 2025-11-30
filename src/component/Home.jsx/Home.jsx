import React from 'react';
import Banner from '../Banner/Banner';
import Title from '../Title/Title';
import Card from '../Card/Card';
import Login from '../Login.jsx/Login';
import Dashboard from '../Dashboard/Dashboard';
import Portfolio from '../Portfolio/Portfolio'
import Registration from '../Registration/Registration';
import Details from '../Details/Details';
import Returns from '../Returns/Returns';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Title></Title>
            <Dashboard></Dashboard>
            <Card></Card>
            <Login></Login>
            {/* <Registration></Registration> */}
            <Portfolio></Portfolio>
             <Details></Details> 
             {/* <Returns></Returns> */}
        </div>
    );
};

export default Home;