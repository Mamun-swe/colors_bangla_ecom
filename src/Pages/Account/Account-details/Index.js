import React, { useState } from 'react';
import '../../../styles/Account/account-details.scss';
import { useForm } from "react-hook-form";

const Index = () => {
    const { register, handleSubmit, errors } = useForm()
    const [isLoading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        setLoading(true)
        console.log(data)
    }


    return (
        <div className="account-details">
            <div className="header text-center mt-3">
                <h5>account details</h5>
            </div>

            <div className="body mb-4">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="row">
                        {/* First Name */}
                        <div className="col-12 col-lg-6">
                            <div className="form-group mb-3">
                                {errors.firstname && errors.firstname.message ? (
                                    <p className="text-danger">{errors.firstname && errors.firstname.message}</p>
                                ) : <p className="text-muted">First name*</p>
                                }

                                <input
                                    type="text"
                                    name="firstname"
                                    className="form-control rounded-0 shadow-none"
                                    ref={register({
                                        required: "First name is required*",
                                        minLength: {
                                            value: 5,
                                            message: "Minimun length 5 character"
                                        }
                                    })}
                                />
                            </div>
                        </div>

                        {/* Last Name */}
                        <div className="col-12 col-lg-6">
                            <div className="form-group mb-3">
                                {errors.lastname && errors.lastname.message ? (
                                    <p className="text-danger">{errors.lastname && errors.lastname.message}</p>
                                ) : <p className="text-muted">Last name*</p>
                                }

                                <input
                                    type="text"
                                    name="lastname"
                                    className="form-control rounded-0 shadow-none"
                                    ref={register({
                                        required: "Last name is required*",
                                        minLength: {
                                            value: 5,
                                            message: "Minimun length 5 character"
                                        }
                                    })}
                                />
                            </div>
                        </div>

                        {/* Display name */}
                        <div className="col-12">
                            <div className="form-group mb-3">
                                {errors.display_name && errors.display_name.message ? (
                                    <p className="text-danger">{errors.display_name && errors.display_name.message}</p>
                                ) : <p className="text-muted">Display name*</p>
                                }

                                <input
                                    type="text"
                                    name="display_name"
                                    className="form-control rounded-0 shadow-none"
                                    ref={register({
                                        required: "Display name is required",
                                        minLength: {
                                            value: 5,
                                            message: "Minimun length 5 character"
                                        }
                                    })}
                                />
                                <p className="mb-0 text-muted"><i>This will be how ypur name will be displayed in the account section and in reviews</i></p>
                            </div>
                        </div>

                        {/* E-mail */}
                        <div className="col-12">
                            <div className="form-group mb-3">
                                {errors.email && errors.email.message ? (
                                    <p className="text-danger">{errors.email && errors.email.message}</p>
                                ) : <p className="text-muted">E-mail address*</p>
                                }

                                <input
                                    type="text"
                                    name="email"
                                    className="form-control rounded-0 shadow-none"
                                    ref={register({
                                        required: "E-mail address is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                />
                            </div>
                        </div>

                        {/* Password Change */}
                        <div className="col-12 mt-3 mb-4">
                            <div className="card rounded-0">
                                <div className="title">
                                    <p className="mb-0">password change</p>
                                </div>
                                <div className="card-body">

                                    {/* Current Password */}
                                    <div className="form-group mb-3">
                                        {errors.current_password && errors.current_password.message ? (
                                            <p className="text-danger">{errors.current_password && errors.current_password.message}</p>
                                        ) : <p className="text-muted">Current password (leave blank to leave unchanged)*</p>
                                        }

                                        <input
                                            type="password"
                                            name="current_password"
                                            className="form-control rounded-0 shadow-none"
                                            ref={register({
                                                required: "Current password is required"
                                            })}
                                        />
                                    </div>

                                    {/* New Password */}
                                    <div className="form-group mb-3">
                                        {errors.new_password && errors.new_password.message ? (
                                            <p className="text-danger">{errors.new_password && errors.new_password.message}</p>
                                        ) : <p className="text-muted">New password (leave blank to leave unchanged)*</p>
                                        }

                                        <input
                                            type="password"
                                            name="new_password"
                                            className="form-control rounded-0 shadow-none"
                                            ref={register({
                                                required: "New password is required"
                                            })}
                                        />
                                    </div>

                                    {/* Confirm New Password */}
                                    <div className="form-group mb-0">
                                        {errors.confirm_password && errors.confirm_password.message ? (
                                            <p className="text-danger">{errors.confirm_password && errors.confirm_password.message}</p>
                                        ) : <p className="text-muted">Confirm New Password*</p>
                                        }

                                        <input
                                            type="password"
                                            name="confirm_password"
                                            className="form-control rounded-0 shadow-none"
                                            ref={register({
                                                required: "Confirm password is required"
                                            })}
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div className="col-12">
                            <button type="submit" className="btn rounded-0 shadow-none">
                                {isLoading ? <span>saving...</span> : <span>save changes</span>}
                            </button>
                        </div>


                    </div>


                </form>
            </div>
        </div>
    );
};

export default Index;