import React from 'react';
import '../../styles/checkout.scss';
import NavBarComponent from '../../Components/NavBar/NavBar';
import FooterComponent from '../../Components/Footer/Index';

const Index = () => {
    return (
        <div className="checkout">
            <NavBarComponent />

            <div className="container py-4">
                <div className="row">
                    <div className="col-12 text-center mb-4 mb-lg-5 mt-lg-3">
                        <div className="checkout-header">
                            <h5 className="mb-0">
                                <span className="text-muted">shopping cart/</span>
                                <span className="text-black">ceckout</span>
                                <span className="text-muted">/order status</span>
                            </h5>
                        </div>
                    </div>
                </div>

                <form>
                    <div className="row">
                        {/* User Details */}
                        <div className="col-12 col-lg-8 user-details-column">
                            <div className="card rounded-0">
                                <div className="card-body">
                                    <div className="title border-bottom mb-3">
                                        <h6 className="mb-2">billing details</h6>
                                    </div>

                                    {/* Input Fields */}
                                    <div className="input-fields">
                                        {/* Name */}
                                        <div className="form-group mb-3">
                                            <p className="text-muted">Name*</p>
                                            <input
                                                type="text"
                                                className="form-control shadow-none"
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div className="form-group mb-3">
                                            <p className="text-muted">Phone*</p>
                                            <input
                                                type="text"
                                                className="form-control shadow-none"
                                            />
                                        </div>

                                        {/* District */}
                                        <div className="form-group mb-3">
                                            <p className="text-muted">District*</p>
                                            <input
                                                type="text"
                                                className="form-control shadow-none"
                                            />
                                        </div>

                                        {/* Delivery Address */}
                                        <div className="form-group mb-3">
                                            <p className="text-muted">Delivery Address*</p>
                                            <input
                                                type="text"
                                                className="form-control shadow-none"
                                            />
                                        </div>

                                        {/* Courier */}
                                        <div className="form-group mb-3">
                                            <p className="text-muted">Courier*</p>

                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="sundarban" />
                                                <label className="form-check-label" htmlFor="sundarban">সুন্দরবন কুরিয়ার</label>
                                            </div>

                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="kartua" />
                                                <label className="form-check-label" htmlFor="kartua">করতোয়া কুরিয়ার</label>
                                            </div>

                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="janani" />
                                                <label className="form-check-label" htmlFor="janani">জননী কুরিয়ার</label>
                                            </div>

                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="dhaka-home" />
                                                <label className="form-check-label" htmlFor="dhaka-home">ঢাকা হোম ডেলিভারি</label>
                                            </div>

                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="sa-paribahan" />
                                                <label className="form-check-label" htmlFor="sa-paribahan">এস এ পরিবহন</label>
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="form-group mb-3">
                                            <p className="text-muted">Email Address(optional)</p>
                                            <input
                                                type="text"
                                                className="form-control shadow-none"
                                                placeholder="example@gmail.com"
                                            />
                                        </div>

                                    </div>




                                </div>
                            </div>
                        </div>

                        {/* Cart Details */}
                        <div className="col-12 col-lg-4 mt-4 mt-lg-0">
                            <div className="card rounded-0">
                                <div className="card-body"></div>
                            </div>
                        </div>
                    </div>
                </form>


            </div>

            <FooterComponent />
        </div>
    );
};

export default Index;