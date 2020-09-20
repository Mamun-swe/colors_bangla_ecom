import React, { useState } from 'react';
import '../../styles/auth.scss';
import axios from 'axios';
import { apiURL } from '../../utils/apiURL';
import { useForm } from "react-hook-form";

import Logo from '../../assets/static/logo.png';
import { Link } from 'react-router-dom';

const Reset = () => {
    const { register, handleSubmit, errors } = useForm()
    const [isLoading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        setLoading(true)
        console.log(data)
    }

    return (
        <div className="Auth">
            <div className="flex-center flex-column">

                <div className="text-center logo-box">
                    <Link to="/">
                        <img src={Logo} className="img-fluid" alt="..." />
                    </Link>
                </div>

                <div className="card shadow border-0">
                    <div className="card-header text-center bg-white">
                        <h4 className="mb-0">Reset Password</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <p className="title">Just enter your e-mail, We will send a new password to your e-mail.</p>

                            {/* E-mail */}
                            <div className="form-group mb-3">
                                {errors.email && errors.email.message ? (
                                    <small className="text-danger">{errors.email && errors.email.message}</small>
                                ) : <small>E-mail</small>
                                }

                                <input
                                    type="text"
                                    name="email"
                                    className="form-control shadow-none"
                                    placeholder="example@gmail.com"
                                    ref={register({
                                        required: "E-mail is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                />
                            </div>

                            <button type="submit" className="btn btn-block shadow-none">
                                {isLoading ? <span>Loading...</span> : <span>Submit</span>}
                            </button>

                        </form>

                        <div className="text-right mt-1">
                            <p>Go to <Link to="/sign-in">Sign-in</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reset;