import React, { useState, useEffect } from 'react';
import '../../styles/single-product.scss';
import ReactImageMagnify from 'react-image-magnify';
import axios from 'axios';
import { apiURL } from '../../utils/apiURL';
import { Icon } from 'react-icons-kit';
import { plus, minus } from 'react-icons-kit/ionicons';
import { ic_access_time, ic_directions_car } from 'react-icons-kit/md';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import NavBarComponent from '../../Components/NavBar/NavBar';
import FooterComponent from '../../Components/Footer/Index';

import image1 from '../../assets/images/product.png';
import image2 from '../../assets/images/product_2.jpg';
import image3 from '../../assets/images/t-shirt.jpg';

const Index = () => {
    const [isLoading, setLoading] = useState(false)
    const [product, setProduct] = useState({})
    const [productImage, setProductImage] = useState(image2)
    const [quantity, setQuantity] = useState(1)


    const magnifiyHandeller = event => {
        setProductImage(event.target.src)
    }

    return (
        <div className="single-product">
            <NavBarComponent />

            <div className="container py-4">
                <div className="row mb-4">

                    {/* Product Magnify */}
                    <div className="col-12 col-lg-8">
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Product',
                                src: productImage,
                                width: window.innerWidth > 992 ? 410 : 250,
                                height: window.innerWidth > 992 ? 450 : 300
                            },
                            style: { margin: 'auto' },
                            imageClassName: 'magnifiySmallImage',
                            largeImage: {
                                src: productImage,
                                width: 1200,
                                height: 1800
                            },
                            enlargedImageContainerStyle: { background: '#fff', zIndex: 9 }
                        }} />

                        <div className="img-list text-center my-3">
                            <ul>
                                <li><img src={image1} className="img-fluid" onClick={magnifiyHandeller} alt="..." /></li>
                                <li><img src={image2} className="img-fluid" onClick={magnifiyHandeller} alt="..." /></li>
                                <li><img src={image3} className="img-fluid" onClick={magnifiyHandeller} alt="..." /></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 product-info mt-4 mt-lg-0">
                        <h4>product name</h4>
                        <h6>SKU: F221E</h6>

                        <div className="price_policy">
                            <div className="d-flex">
                                <div><h3>850<span>TK</span></h3></div>
                                <div className="pl-4">
                                    <p><Icon icon={ic_access_time} size={20} className="mr-2" />30 days return*</p>
                                    <p><Icon icon={ic_directions_car} size={20} className="mr-2" />Delivary anywhere in banglades</p>
                                </div>
                            </div>
                        </div>

                        <div className="sizes">
                            <div className="d-flex">
                                <div className="pt-2"><h6>SIZE</h6></div>
                                <div>
                                    <ul>
                                        <li><p>xxl</p></li>
                                        <li><p>xl</p></li>
                                        <li><p>l</p></li>
                                        <li><p>m</p></li>
                                        <li><p>s</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="colors">
                            <div className="d-flex">
                                <div className="pt-2"><h6>COLORS</h6></div>
                                <div className="ml-3">
                                    <ul>
                                        <li style={{ background: '#000' }}></li>
                                        <li style={{ background: '#d4b90d' }}></li>
                                        <li style={{ background: '#4dfc08' }}></li>
                                        <li style={{ background: '#7ba7e8' }}></li>
                                        <li style={{ background: '#fa002e' }}></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="cart-option">
                            <div className="d-flex">
                                <div>
                                    <button
                                        type="button"
                                        className="btn rounded-0 shadow-none"
                                        onClick={() => setQuantity(quantity - 1)}
                                        disabled={quantity <= 1 ? true : false}
                                    >
                                        <Icon icon={minus} />
                                    </button>
                                    <button type="button" className="btn rounded-0 shadow-none" disabled>{quantity}</button>
                                    <button
                                        type="button"
                                        className="btn rounded-0 shadow-none"
                                        onClick={() => setQuantity(quantity + 1)}
                                        disabled={quantity >= 5 ? true : false}
                                    >
                                        <Icon icon={plus} />
                                    </button>
                                </div>
                                <div className="pl-2">
                                    <button type="button" className="btn shadow-none rounded-0 border-0 cart-btn">Add to Cart</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Product Description */}
                <div className="row">
                    <div className="col-12 description">
                        <Tabs defaultActiveKey="product_feature">
                            <Tab eventKey="product_feature" title="Product Features">
                                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                            </Tab>
                            <Tab eventKey="product_description" title="Product Descriptions">
                                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                            </Tab>
                        </Tabs>
                    </div>
                </div>



            </div>

            <FooterComponent />
        </div>
    );
};

export default Index;