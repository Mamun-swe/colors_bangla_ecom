import React, { useEffect, useState } from 'react';
import '../../../styles/Account/order-status.scss';
import { useParams } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { ic_done_all, ic_info_outline } from 'react-icons-kit/md';

// import LoadingComponent from '../../../Components/Loader';

const OrderStatus = () => {
    const { id } = useParams()
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {

    }, [id])

    return (
        <div className="order-status">
            {/* {isLoading ? <LoadingComponent /> : */}
            <div>
                <div className="row py-4 py-lg-2">
                    <div className="col-12">
                        <h6 className="text-center mb-4">shopping cart / checkout /<span className="text-muted"> order status</span></h6>

                        <div className="text-center">
                            <Icon icon={ic_done_all} size={35} className="text-success" />
                            <h6 className="mb-3">thank you. your order has been received</h6>
                        </div>

                        {/* Short Info */}
                        <div className="short-info mb-4">
                            <p>Order number: <span>10194</span></p>
                            <p>Date: <span>Sep 28, 2020</span></p>
                            <p>Email: <span>exmple@gmail.com</span></p>
                            <p>Total: <span>Sep 28, 2020</span></p>
                            <p>Payment method: <span>Cash on delivery</span></p>
                        </div>

                        {/* Messages */}
                        <div className="message bg-primary">
                            <div className="d-flex">
                                <div><Icon icon={ic_info_outline} style={{ color: '#fff' }} /></div>
                                <div className="pl-2"><p>***ঢাকার বাহিরে ক্যাশ ও ডেলিভারিতে অর্ডার কনফার্ম করতে হলে কুরিয়ার চার্র্জ ১০০ টাকা অগ্রিম প্রদান করতে হবে </p></div>
                            </div>
                        </div>

                        <div className="message bg-primary">
                            <div className="d-flex">
                                <div><Icon icon={ic_info_outline} style={{ color: '#fff' }} /></div>
                                <div className="pl-2">
                                    <p>বিকাশ নাম্বার: 01997-335500</p>
                                    <p>রকেট নাম্বার: 01925-618270-7</p>
                                </div>
                            </div>
                        </div>

                        <div className="message bg-primary">
                            <div className="d-flex">
                                <div><Icon icon={ic_info_outline} style={{ color: '#fff' }} /></div>
                                <div className="pl-2"><p>*Send Money করতে হবে</p></div>
                            </div>
                        </div>

                        <div className="message bg-primary">
                            <div className="d-flex">
                                <div><Icon icon={ic_info_outline} style={{ color: '#fff' }} /></div>
                                <div className="pl-2"><p>*Reference এ আপনার নাম্বার দিতে হবে</p></div>
                            </div>
                        </div>

                        {/* Order Details */}
                        <div className="order-details my-4">
                            <h6 className="text-capitalize">Order details</h6>
                            <table className="table table-sm table-borderless table-responsive-sm">
                                <thead>
                                    <tr>
                                        <td><p>product</p></td>
                                        <td className="text-right"><p>total</p></td>
                                    </tr>
                                </thead>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
            {/* } */}
        </div>
    );
};

export default OrderStatus;