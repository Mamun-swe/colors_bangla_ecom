import React from 'react';
import '../../styles/showroom.scss';
import { Icon } from 'react-icons-kit';
import { phoneHangUp } from 'react-icons-kit/icomoon';
import NavbarComponent from '../../Components/NavBar/NavBar';
import FooterComponent from '../../Components/Footer/Index';

const Index = () => {
    return (
        <div className="showroom">
            <NavbarComponent />

            <div className="header">
                <div className="overlay">
                    <div className="flex-center flex-column text-center">
                        <h1>Showroom</h1>
                        <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.</p>
                    </div>
                </div>
            </div>

            <div className="main-content">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8 mb-4 mb-lg-5">
                            <h2>Our Showrooms</h2>
                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                        </div>

                        <div className="col-12 map-column mb-4 mb-lg-5">
                            <iframe
                                title="Our locatin find in google map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.592234257487!2d90.32280281543704!3d23.8686092901661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9a9e728879b7600d!2sAshulia%20Model%20Town%20Park!5e0!3m2!1sen!2sbd!4v1600719678565!5m2!1sen!2sbd" width="100%"
                                height="450"
                                frameBorder="0"
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                            />
                        </div>
                    </div>
                </div>


                {/* Locations */}
                <div className="locations">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="region">
                                    <h3>dhaka</h3>
                                </div>
                            </div>
                        </div>

                        <div className="row location">

                            <div className="col-12 col-sm-6">
                                <div className="d-flex">
                                    <div className="flex-box-1">
                                        <h5>location 1</h5>
                                        <p>Reference site about Lorem Ipsum, giving information on</p>
                                        <p>
                                            <Icon icon={phoneHangUp} size={23} />
                                            <span className="ml-2">+8801533592610</span>
                                        </p>
                                    </div>
                                    <div className="pt-3 pl-4">
                                        <h6>Store hours</h6>
                                        <p>10-10 pm</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6">
                                <div className="d-flex">
                                    <div className="flex-box-1">
                                        <h5>location 1</h5>
                                        <p>Reference site about Lorem Ipsum, giving information on</p>
                                        <p>
                                            <Icon icon={phoneHangUp} size={23} />
                                            <span className="ml-2">+8801533592610</span>
                                        </p>
                                    </div>
                                    <div className="pt-3 pl-4">
                                        <h6>Store hours</h6>
                                        <p>10-10 pm</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6">
                                <div className="d-flex">
                                    <div className="flex-box-1">
                                        <h5>location 1</h5>
                                        <p>Reference site about Lorem Ipsum, giving information on</p>
                                        <p>
                                            <Icon icon={phoneHangUp} size={23} />
                                            <span className="ml-2">+8801533592610</span>
                                        </p>
                                    </div>
                                    <div className="pt-3 pl-4">
                                        <h6>Store hours</h6>
                                        <p>10-10 pm</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6">
                                <div className="d-flex">
                                    <div className="flex-box-1">
                                        <h5>location 1</h5>
                                        <p>Reference site about Lorem Ipsum, giving information on</p>
                                        <p>
                                            <Icon icon={phoneHangUp} size={23} />
                                            <span className="ml-2">+8801533592610</span>
                                        </p>
                                    </div>
                                    <div className="pt-3 pl-4">
                                        <h6>Store hours</h6>
                                        <p>10-10 pm</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="region">
                                    <h3>rajshahi</h3>
                                </div>
                            </div>
                        </div>

                        <div className="row location">

                            <div className="col-12 col-sm-6">
                                <div className="d-flex">
                                    <div className="flex-box-1">
                                        <h5>location 1</h5>
                                        <p>Reference site about Lorem Ipsum, giving information on</p>
                                        <p>
                                            <Icon icon={phoneHangUp} size={23} />
                                            <span className="ml-2">+8801533592610</span>
                                        </p>
                                    </div>
                                    <div className="pt-3 pl-4">
                                        <h6>Store hours</h6>
                                        <p>10-10 pm</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6">
                                <div className="d-flex">
                                    <div className="flex-box-1">
                                        <h5>location 1</h5>
                                        <p>Reference site about Lorem Ipsum, giving information on</p>
                                        <p>
                                            <Icon icon={phoneHangUp} size={23} />
                                            <span className="ml-2">+8801533592610</span>
                                        </p>
                                    </div>
                                    <div className="pt-3 pl-4">
                                        <h6>Store hours</h6>
                                        <p>10-10 pm</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6">
                                <div className="d-flex">
                                    <div className="flex-box-1">
                                        <h5>location 1</h5>
                                        <p>Reference site about Lorem Ipsum, giving information on</p>
                                        <p>
                                            <Icon icon={phoneHangUp} size={23} />
                                            <span className="ml-2">+8801533592610</span>
                                        </p>
                                    </div>
                                    <div className="pt-3 pl-4">
                                        <h6>Store hours</h6>
                                        <p>10-10 pm</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6">
                                <div className="d-flex">
                                    <div className="flex-box-1">
                                        <h5>location 1</h5>
                                        <p>Reference site about Lorem Ipsum, giving information on</p>
                                        <p>
                                            <Icon icon={phoneHangUp} size={23} />
                                            <span className="ml-2">+8801533592610</span>
                                        </p>
                                    </div>
                                    <div className="pt-3 pl-4">
                                        <h6>Store hours</h6>
                                        <p>10-10 pm</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <FooterComponent />
        </div>
    );
};

export default Index;