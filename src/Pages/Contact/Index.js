import React, { useState } from 'react';
import '../../styles/contact.scss';
import { Icon } from 'react-icons-kit';
import { ic_phone, ic_markunread, ic_location_on } from 'react-icons-kit/md';
import { printer } from 'react-icons-kit/icomoon';
import { useForm } from "react-hook-form";

import NavbarComponent from '../../Components/NavBar/NavBar';
import FooterComponent from '../../Components/Footer/Index';

const Index = () => {
    const { register, handleSubmit, errors } = useForm()
    const [isLoading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        setLoading(true)
        console.log(data)
    }


    return (
        <div className="contact">
            <NavbarComponent />

            <div className="header">
                <div className="overlay">
                    <div className="flex-center flex-column text-center">
                        <h1>contact informations</h1>
                        <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.</p>
                    </div>
                </div>
            </div>

            {/* Contact Main */}
            <div className="main-content">
                <div className="container">
                    <div className="row">
                        {/* Contact Utilities */}
                        <div className="col-12 col-lg-4 contact-utilities mb-4 mb-lg-0">

                            <div className="card border-0 mb-3">
                                <div className="card-body p-4">
                                    <div className="d-flex">
                                        <div>
                                            <Icon icon={ic_phone} size={18} className="icon" />
                                        </div>
                                        <div className="pl-3">
                                            <p>phone number</p>
                                            <small>+0123 4567 9876</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card border-0 mb-3">
                                <div className="card-body p-4">
                                    <div className="d-flex">
                                        <div>
                                            <Icon icon={ic_markunread} size={18} className="icon" />
                                        </div>
                                        <div className="pl-3">
                                            <p>email address</p>
                                            <small>example@gmail.com</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card border-0 mb-3">
                                <div className="card-body p-4">
                                    <div className="d-flex">
                                        <div>
                                            <Icon icon={printer} size={18} className="icon" />
                                        </div>
                                        <div className="pl-3">
                                            <p>fax address</p>
                                            <small>+0123 4567 9876</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card border-0 mb-3">
                                <div className="card-body p-4">
                                    <div className="d-flex">
                                        <div>
                                            <Icon icon={ic_location_on} size={18} className="icon" />
                                        </div>
                                        <div className="pl-3">
                                            <p>location</p>
                                            <small>123 Buisness Avenue, NYC</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Contact form */}
                        <div className="col-12 col-lg-8 contact-form">
                            <div className="card border-0">
                                <div className="card-header border-0 bg-white p-4 pb-0">
                                    <h4 className="pt-2">Send Message</h4>
                                    <p className="text-muted mb-0">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. </p>
                                </div>
                                <div className="card-body p-4">

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row">

                                            {/* Name */}
                                            <div className="col-12 col-lg-6 pr-lg-2">
                                                <div className="form-group mb-3">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className={errors.name ? "form-control shadow-none danger-border" : "form-control shadow-none"}
                                                        placeholder="Your name"
                                                        ref={register({ required: true })}
                                                    />
                                                </div>
                                            </div>

                                            {/* E-mail */}
                                            <div className="col-12 col-lg-6 pl-lg-2">
                                                <div className="form-group mb-3">
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        className={errors.email ? "form-control shadow-none danger-border" : "form-control shadow-none"}
                                                        placeholder="Email address"
                                                        ref={register({
                                                            required: true,
                                                            pattern: {
                                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                                            }
                                                        })}
                                                    />
                                                </div>
                                            </div>

                                            {/* Phone */}
                                            <div className="col-12 col-lg-6 pr-lg-2">
                                                <div className="form-group mb-3">
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        className={errors.phone ? "form-control shadow-none danger-border" : "form-control shadow-none"}
                                                        placeholder="Phone number"
                                                        ref={register({ required: true })}
                                                    />
                                                </div>
                                            </div>

                                            {/* Subject */}
                                            <div className="col-12 col-lg-6 pl-lg-2">
                                                <div className="form-group mb-3">
                                                    <input
                                                        type="text"
                                                        name="subject"
                                                        className={errors.subject ? "form-control shadow-none danger-border" : "form-control shadow-none"}
                                                        placeholder="Subject"
                                                        ref={register({ required: true })}
                                                    />
                                                </div>
                                            </div>

                                            {/* Message */}
                                            <div className="col-12">
                                                <div className="form-group mb-3">
                                                    <textarea
                                                        type="text"
                                                        name="message"
                                                        className={errors.message ? "form-control shadow-none danger-border" : "form-control shadow-none"}
                                                        placeholder="Message"
                                                        rows="3"
                                                        ref={register({ required: true })}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <button type="submit" className="btn text-white shadow-none">Send Message</button>
                                            </div>




                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Map */}
            <div className="map-content">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <h1>Find Us on Google Maps</h1>
                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                        </div>

                        <div className="col-12 map-column">
                            <iframe
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
            </div>

            <FooterComponent />

        </div>
    );
};

export default Index;