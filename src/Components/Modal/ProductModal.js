import React from 'react';
import '../../styles/modal.scss';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/Actions/cartAction';

const ProductModal = (props) => {
    const dispatch = useDispatch()

    // Add to cart
    const addToCart = data => {
        const newData = {
            id: data.id,
            name: data.name,
            price: data.selling_price,
            stock: data.stock,
            image: data.image,
            quantity: 1
        }
        dispatch(addProduct(newData))
    }

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
                            <button
                                type="button"
                                className="btn btn-block shadow-none"
                                onClick={() => addToCart(props.productinfo)}
                            >add cart</button>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>
        </div>
    );
};

export default ProductModal;