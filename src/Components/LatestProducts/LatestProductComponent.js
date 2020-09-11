import React from 'react';
import '../../styles/latest-products.scss';
import Slider from 'react-slick';
import { Icon } from 'react-icons-kit';
import {
    ic_keyboard_arrow_left,
    ic_keyboard_arrow_right
} from 'react-icons-kit/md';
import ProductImg from '../../assets/images/product.png';


const LatestProductComponent = ({ latestProducts }) => {
    const customeSlider = React.useRef()

    const next = () => {
        customeSlider.current.slickNext()
    }
    const previous = () => {
        customeSlider.current.slickPrev()
    }

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="latest-product">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-4">
                        <h1 className="text-upperrcase">latest products</h1>
                    </div>

                    {/* Product Slider */}
                    <div className="col-12 product-slider">
                        <Slider ref={customeSlider} {...settings}>
                            {latestProducts.length > 0 && latestProducts.map((product, i) =>
                                <div className="card rounded-0 border-0" key={i}>
                                    <div className="card-body">
                                        <div className="img-box">
                                            <img src={ProductImg} className="img-fluid" alt="..." />
                                        </div>
                                        <div className="footer border">
                                            <div className="d-sm-flex">
                                                <div>
                                                    <p className="name">Product name goes here</p>
                                                </div>
                                                <div className="ml-auto">
                                                    <p className="price">$500</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Slider>

                        <button
                            type="button"
                            className="btn rounded-circle shadow-none prev-btn"
                            onClick={previous}
                        >
                            <Icon
                                size={25}
                                icon={ic_keyboard_arrow_left}
                                style={{ color: '#000' }}
                            />
                        </button>

                        <button
                            type="button"
                            className="btn rounded-circle shadow-none next-btn"
                            onClick={next}
                        >
                            <Icon
                                size={25}
                                icon={ic_keyboard_arrow_right}
                                style={{ color: '#000' }}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestProductComponent;