import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiURL } from '../utils/apiURL';

import NavbarComponent from '../Components/NavBar/NavBar';
import SliderComponent from '../Components/Slider/SliderComponent';
import CategoryComponent from '../Components/Category/CategoryComponent';
import LatestProductsComponent from '../Components/LatestProducts/LatestProductComponent';
import TopSellingProductsComponent from '../Components/TopSellingProducts/TopSellingProductsComponent';
import FooterComponent from '../Components/Footer/Index';
import LoadingBannerComponent from '../Components/Modal/HomeLoadingModal';

const Index = () => {
    const [loading, setLoading] = useState(false)
    const [sliders, setSliders] = useState([])
    const [categories, setCategories] = useState([])
    const [latestProducts, setLatestProducts] = useState([])
    // const [topSellingProducts, setTopSellingProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const sliderResponse = await axios.get(`${apiURL}getSliders`)
                const categoryResponse = await axios.get(`${apiURL}getCategory`)
                const latestProductResponse = await axios.get(`${apiURL}getLatestProducts`)
                // const topSellingProductResponse = await axios.get(`${apiURL}getTopSellingProducts`)
                if (
                    sliderResponse.status === 200 &&
                    categoryResponse.status === 200 &&
                    latestProductResponse.status === 200
                    // && topSellingProductResponse.status === 200
                ) {
                    setSliders(sliderResponse.data.result)
                    setCategories(categoryResponse.data.result)
                    setLatestProducts(latestProductResponse.data.result)
                    // setTopSellingProducts(topSellingProductResponse.data.result)
                    setLoading(false)
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [])

    return (
        <div>
            {loading ? <LoadingBannerComponent /> :
                <div>
                    <NavbarComponent />
                    <SliderComponent sliders={sliders} />
                    <CategoryComponent categories={categories} />
                    <LatestProductsComponent latestProducts={latestProducts} />
                    <TopSellingProductsComponent categories={categories} />
                    <FooterComponent />
                </div>
            }
        </div>
    );
};

export default Index;