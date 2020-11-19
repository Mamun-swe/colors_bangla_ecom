import React from 'react';
import '../../styles/slider.scss';
import Slider from 'react-slick';

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
                                    <img src={slider.image} className="img-fluid" alt="..." />
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