import React from 'react';
import '../../styles/modal.scss';
import Modal from 'react-bootstrap/Modal';

const ProductModal = (props) => {
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="custom-product-modal"
            >
                <Modal.Header closeButton className="pt-2 pb-0 border-0" />

                <Modal.Body>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <img src={props.productinfo.image} className="img-fluid" alt="..." />
                        </div>
                        <div className="col-12 col-lg-6 pt-3 pt-lg-0">
                            <h5 className="mb-2">{props.productinfo.name}</h5>
                            <p className="mb-0">Price: {props.productinfo.selling_price} tk</p>
                            <p className="mb-2">Available Quantity: {props.productinfo.stock}</p>
                            <p>{props.productinfo.description}</p>
                            <button type="button" className="btn btn-block shadow-none">add cart</button>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>
        </div>
    );
};

export default ProductModal;