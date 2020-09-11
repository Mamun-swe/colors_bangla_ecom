import React from 'react';
import SliderComponent from '../Components/Slider/SliderComponent';
import CategoryComponent from '../Components/Category/CategoryComponent';
import LatestProductsComponent from '../Components/LatestProducts/LatestProductComponent';

const Index = () => {
    return (
        <div>
            <SliderComponent />
            <CategoryComponent />
            <LatestProductsComponent />
            <h1>Index</h1>

            <div style={{height: '500px'}}></div>
        </div>
    );
};

export default Index;