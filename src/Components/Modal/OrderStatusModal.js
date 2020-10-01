import React from 'react';
import '../../styles/order-status-modal.scss';
import { Icon } from 'react-icons-kit';
import { ic_close, ic_done_all } from 'react-icons-kit/md';

const OrderStatusModal = ({ data, orderCode, hidemodal }) => {
    return (
        <div className="order-status-modal">
            <div className="backdrop">
                <div className="custom-dialog">

                    <div className="card border-0 shadow">
                        <div className="card-header border-0 bg-white">
                            <div className="d-flex mb-2">
                                <div className="flex-fill text-right">
                                    <h5>Order Status</h5>
                                </div>
                                <div className="flex-fill text-right">
                                    <button
                                        type="button"
                                        className="btn rounded-circle shadow-none"
                                        onClick={hidemodal}
                                    >
                                        <Icon icon={ic_close} size={25} />
                                    </button>
                                </div>
                            </div>
                            <div className="boder"></div>
                        </div>
                        <div className="card-body pt-0">
                            <div className="text-center">
                                <Icon icon={ic_done_all} className="text-success" size={30} />
                                <h6>thank you, your order has been recived</h6>
                            </div>

                            <div className="row border m-2 py-3 order-details">
                                <div className="col-12 col-lg-6">
                                    <p>{data.name ?? null}</p>
                                    <p>{data.phone ?? null}</p>
                                    <p>{data.email ?? null}</p>
                                    <p>order code: {orderCode ?? null}</p>
                                </div>
                                <div className="col-12 col-lg-6 mt-3 mt-lg-0">
                                    <h6>Delivery info</h6>
                                    <p>Total price: {data.total_price ?? null}</p>
                                    <p>delivery charge: {data.delivery_charge ?? null}</p>
                                    <p>delivery method: {data.delivery_method ?? null}</p>
                                    <p>delivery address: {data.delivery_address ?? null}</p>
                                    <p>shipping area: {data.shipping_area ?? null}</p>
                                </div>
                            </div>

                            <div className="row products">
                                <div className="col-12 px-4 pt-4">
                                    <table className="table table-sm table-borderless">
                                        <thead>
                                            <tr>
                                                <td><p>Name</p></td>
                                                <td className="text-right"><p>Quantity</p></td>
                                                <td className="text-right"><p>Price</p></td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.products ?
                                                data.products.length > 0 &&
                                                data.products.map((product, i) =>
                                                    <tr key={i}>
                                                        <td><p>{product.name}</p></td>
                                                        <td className="text-right"><p>{product.quantity}</p></td>
                                                        <td className="text-right"><p>{product.price}</p></td>
                                                    </tr>
                                                ) : null}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="message text-center mt-2">
                                <h5 className="text-success mb-0">Take a screenshot before leave.</h5>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default OrderStatusModal;