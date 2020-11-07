import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiURL } from '../utils/apiURL';

import NavbarComponent from '../Components/NavBar/NavBar';
import SliderComponent from '../Components/Slider/SliderComponent';
// import CampaignComponent from '../Components/Campaigns/Index';
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

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`${apiURL}home`)
                if (response.status === 200) {
                    setSliders(response.data.sliders)
                    setCategories(response.data.categories)
                    setLatestProducts(response.data.latestProducts)
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
                    {/* <CampaignComponent campaigns={sliders} /> */}
                    <CategoryComponent categories={categories} />
                    <LatestProductsComponent latestProducts={latestProducts} />
                    {categories.length > 0 ? <TopSellingProductsComponent categories={categories} /> : null}
                    <FooterComponent />
                </div>
            }
        </div>
    );
};

export default Index;