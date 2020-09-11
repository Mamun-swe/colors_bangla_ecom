import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiURL } from '../utils/apiURL';

import SliderComponent from '../Components/Slider/SliderComponent';
import CategoryComponent from '../Components/Category/CategoryComponent';
import LatestProductsComponent from '../Components/LatestProducts/LatestProductComponent';
import TopSellingProductsComponent from '../Components/TopSellingProducts/TopSellingProductsComponent';
import FooterComponent from '../Components/Footer/Index';

const Index = () => {
    const [sliders, setSliders] = useState([])
    const [categories, setCategories] = useState([])
    const [latestProducts, setLatestProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const sliderResponse = await axios.get(`${apiURL}users`)
                const categoryResponse = await axios.get(`${apiURL}users`)
                const latestProductResponse = await axios.get(`${apiURL}users`)
                setSliders(sliderResponse.data.slice(0, 5))
                setCategories(categoryResponse.data)
                setLatestProducts(latestProductResponse.data)
            } catch (error) {
                console.log(error);
            }
        }

        fetchData()
    }, [])

    return (
        <div>
            <SliderComponent sliders={sliders} />
            <CategoryComponent categories={categories} />
            <LatestProductsComponent latestProducts={latestProducts} />
            <TopSellingProductsComponent categories={categories} />
            <FooterComponent />
        </div>
    );
};

export default Index;