import React, { useState } from 'react';
import '../../styles/checkout.scss';
import { useForm } from "react-hook-form";
import NavBarComponent from '../../Components/NavBar/NavBar';
import FooterComponent from '../../Components/Footer/Index';

const Index = () => {
    const { register, handleSubmit, errors } = useForm()
    const [loading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        setLoading(true)
        console.log(data)
    }

    return (
        <div className="checkout">
            <NavBarComponent />

            <div className="container pt-4 pb-4 pb-lg-5">
                <div className="row">
                    <div className="col-12 text-center mb-4 mb-lg-5 mt-lg-3">
                        <div className="checkout-header">
                            <h5 className="mb-0">
                                <span className="text-muted">shopping cart/</span>
                                <span className="text-black">ceckout</span>
                            </h5>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        {/* User Details */}
                        <div className="col-12 col-lg-7 user-details-column">
                            <div className="card rounded-0">
                                <div className="card-body">
                                    <div className="title border-bottom mb-3">
                                        <h6 className="mb-2">billing details</h6>
                                    </div>

                                    {/* Input Fields */}
                                    <div className="input-fields">
                                        {/* Name */}
                                        <div className="form-group mb-3">
                                            {errors.name && errors.name.message ? (
                                                <p className="text-danger">{errors.name && errors.name.message}</p>
                                            ) : <p className="text-muted">Name*</p>
                                            }

                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control shadow-none"
                                                ref={register({
                                                    required: "Name is required*"
                                                })}
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div className="form-group mb-3">
                                            {errors.phone && errors.phone.message ? (
                                                <p className="text-danger">{errors.phone && errors.phone.message}</p>
                                            ) : <p className="text-muted">Phone*</p>
                                            }

                                            <input
                                                type="text"
                                                name="phone"
                                                className="form-control shadow-none"
                                                ref={register({
                                                    required: "Phone is required*"
                                                })}
                                            />
                                        </div>

                                        {/* District */}
                                        <div className="form-group mb-3">
                                            {errors.district && errors.district.message ? (
                                                <p className="text-danger">{errors.district && errors.district.message}</p>
                                            ) : <p className="text-muted">District*</p>
                                            }

                                            <input
                                                type="text"
                                                name="district"
                                                className="form-control shadow-none"
                                                ref={register({
                                                    required: "District is required*"
                                                })}
                                            />
                                        </div>

                                        {/* Delivery Address */}
                                        <div className="form-group mb-3">
                                            {errors.delivery_address && errors.delivery_address.message ? (
                                                <p className="text-danger">{errors.delivery_address && errors.delivery_address.message}</p>
                                            ) : <p className="text-muted">Delivery Address*</p>
                                            }

                                            <input
                                                type="text"
                                                name="delivery_address"
                                                className="form-control shadow-none"
                                                ref={register({
                                                    required: "Delivery Address is required*"
                                                })}
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
                                            {errors.email && errors.email.message ? (
                                                <small className="text-danger">{errors.email && errors.email.message}</small>
                                            ) : <p className="text-muted">Email Address(optional)</p>
                                            }

                                            <input
                                                type="text"
                                                name="email"
                                                className="form-control shadow-none"
                                                placeholder="example@gmail.com"
                                                ref={register({
                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        message: "Invalid email address"
                                                    }
                                                })}
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cart Details */}
                        <div className="col-12 col-lg-5 mt-4 mt-lg-0 order-details">
                            <div className="card rounded-0">
                                <div className="card-body">
                                    <div className="title border-bottom mb-3">
                                        <h6 className="mb-2">your order</h6>
                                    </div>

                                    {/* Cart Produucts */}
                                    <div className="cart-products">

                                        <div className="product d-flex">
                                            <div>
                                                <p>Reference site about Lorem Ipsum.</p>
                                                <small>Quantity: 10</small>
                                            </div>
                                            <div className="ml-auto pl-2">
                                                <p>900 tk.</p>
                                            </div>
                                        </div>

                                        <div className="product d-flex">
                                            <div>
                                                <p>Reference site about Lorem Ipsum.</p>
                                                <small>Quantity: 10</small>
                                            </div>
                                            <div className="ml-auto pl-2">
                                                <p>900 tk.</p>
                                            </div>
                                        </div>

                                    </div>

                                    {/* Sub Total */}
                                    <div className="sub-total border-top d-flex">
                                        <div>
                                            <p>Sub Total</p>
                                        </div>
                                        <div className="ml-auto pl-2">
                                            <p>900 tk.</p>
                                        </div>
                                    </div>

                                    {/* Shipping */}
                                    <div className="shipping mt-3">
                                        <p>Shipping</p>
                                        <div className="d-flex">
                                            <div>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="sundarban" />
                                                    <label className="form-check-label" htmlFor="sundarban">Outside Dhaka</label>
                                                </div>
                                            </div>
                                            <div className="ml-auto">
                                                <p className="mb-2">Tk. 100</p>
                                            </div>
                                        </div>

                                        <div className="d-flex">
                                            <div>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="kartua" />
                                                    <label className="form-check-label" htmlFor="kartua">Dhaka City</label>
                                                </div>
                                            </div>
                                            <div className="ml-auto">
                                                <p>Tk. 80</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Total */}
                                    <div className="sub-total border-bottom d-flex">
                                        <div>
                                            <p>Total</p>
                                        </div>
                                        <div className="ml-auto pl-2">
                                            <p>900 tk.</p>
                                        </div>
                                    </div>

                                    {/* Delivery Method */}
                                    <div className="delivery-method my-3">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="kartua" />
                                            <label className="form-check-label" htmlFor="kartua">Cash on delivery</label>
                                            <p>***ঢাকার বাহিরে ক্যাশ ও ডেলিভারি অর্ডার কনফার্ম করতে হলে ক্যারিয়ার চার্র্জ ১০০ টাকা অগ্রিম প্রদান করতে হবে***
                                            <br />
                                                বিকাশ নাম্বার : ০১৯৯৭-৩৩৫৫০০
                                                <br />
                                                রকেট নাম্বার : ০১৯৯৭-৩৩৫৫০০
                                            <br />
                                                *Send Money* করতে হবে।
                                            </p>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="kartua" />
                                            <label className="form-check-label" htmlFor="kartua">Visa, Master Card & Amex</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="kartua" />
                                            <label className="form-check-label" htmlFor="kartua">Bkash</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="kartua" />
                                            <label className="form-check-label" htmlFor="kartua">Rocket</label>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn text-white btn-block rounded-0 shadow-none order-place-button">
                                        {loading ? <span>Loading...</span> :
                                            <span>place order</span>
                                        }
                                    </button>

                                </div>
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