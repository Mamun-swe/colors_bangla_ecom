import React from 'react';
import NavBarComponent from '../../Components/NavBar/NavBar';
import FooterComponent from '../../Components/Footer/Index';

const Index = () => {
    return (
        <div className="checkout">
            <NavBarComponent />

            <h1>Checkout page</h1>

            <FooterComponent />
        </div>
    );
};

export default Index;