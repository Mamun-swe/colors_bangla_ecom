import React, { useEffect, useState } from 'react';
import '../../styles/slider.scss';
import Slider from 'react-slick';
import axios from 'axios';
import { apiURL } from '../../utils/apiURL';
import SliderImg from '../../assets/images/banner3.jpg';

const SliderComponent = () => {
    const customeSlider = React.useRef()
    const [sliders, setSliders] = useState([])

    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true
    }

    useEffect(() => {
        const fetchSliders = async () => {
            try {
                const response = await axios.get(`${apiURL}users`)
                setSliders(response.data.slice(0, 5))
            } catch (error) {
                console.log(error);
            }
        }

        fetchSliders()
    }, [])


    return (
        <div className="slider">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Slider ref={customeSlider} {...settings}>
                            {sliders.length > 0 && sliders.map((slider, i) =>
                                <div className="slider-card" key={i}>
                                    <img src={SliderImg} className="img-fluid" alt="..." />
                                    <div className="overlay">
                                        <h1 className="text-uppercase">new collection</h1>
                                        <button type="button" className="btn rounded-0 shadow-none">Shop Now</button>
                                    </div>
                                </div>
                            )}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderComponent;