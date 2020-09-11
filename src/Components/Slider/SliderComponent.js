import React from 'react';
import '../../styles/slider.scss';
import Slider from 'react-slick';
import SliderImg from '../../assets/images/banner3.jpg';

const SliderComponent = ({ sliders }) => {
    const customeSlider = React.useRef()
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