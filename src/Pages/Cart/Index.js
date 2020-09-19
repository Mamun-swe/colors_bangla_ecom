import React, { useEffect } from 'react';
import '../../styles/shopping-cart.scss';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { productsList } from '../../Redux/Actions/cartAction';

import NavBarComponent from '../../Components/NavBar/NavBar';
import FooterComponent from '../../Components/Footer/Index';

import EmptyShoppingCartImg from '../../assets/static/empty_shopping_cart.png';
import MasterCardLogo from '../../assets/static/master-card.png';
import VisaCardLogo from '../../assets/static/visa-card.png';
import RocketLogo from '../../assets/static/rocket.jpeg';
import BkashLogo from '../../assets/static/bkash.jpg';


const Index = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    let { cartProducts } = useSelector((state => state.products))
    let subTotal = 0

    useEffect(() => {
        dispatch(productsList())
    }, [dispatch])


    return (
        <div className="shopping-cart">
            <NavBarComponent />

            {cartProducts && cartProducts.length > 0 ?
                <div className="container py-4">
                    <div className="row">
                        <div className="col-12 text-center mb-4 mb-lg-5 mt-lg-3">
                            <div className="cart-header">
                                <h5 className="mb-0">
                                    <span className="text-black">shopping cart</span>
                                    <span className="text-muted">/ceckout</span>
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {/* Products Column */}
                        <div className="col-12 col-lg-8">
                            <table className="table table-sm table-borderless table-responsive-sm product-table">
                                <thead>
                                    <tr>
                                        <td>product</td>
                                        <td></td>
                                        <td className="text-center">price</td>
                                        <td className="text-center">quantity</td>
                                        <td className="text-center">sub total</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartProducts.length > 0 && cartProducts.map((product, i) =>
                                        <tr key={i}>
                                            <td>
                                                <div className="img-box">
                                                    <img src={product.image} className="img-fluid" alt="..." />
                                                </div>
                                            </td>
                                            <td style={{ minWidth: '150px' }}>
                                                <p className="mb-1">{product.name}</p>
                                                <small>Remove</small>
                                            </td>
                                            <td className="text-center">Tk. {product.price}</td>
                                            <td className="text-center">{product.quantity}</td>
                                            <td className="text-center">Tk. {product.price * product.quantity}</td>
                                            <td className="d-none">{subTotal += product.price * product.quantity}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

                            <div className="coupon-box">
                                <p className="text-muted">Enter your promotion code</p>
                                <form>
                                    <div className="input-group mb-2">
                                        <input
                                            type="text"
                                            className="form-control rounded-0 shadow-none"
                                            placeholder="Coupon code"
                                        />
                                        <div className="input-group-prepend">
                                            <button
                                                type="submit"
                                                className="btn rounded-0 shadow-none"
                                            >OK</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Cart Total Column */}
                        <div className="col-12 col-lg-4 cart-total mt-4 mt-lg-0">
                            <div className="card rounded-0 mb-4">
                                <div className="card-body">
                                    <div className="title border-bottom mb-3">
                                        <h6 className="mb-2">cart totals</h6>
                                    </div>
                                    <table className="table table-sm table-borderless mb-4">
                                        <tbody>
                                            <tr>
                                                <td>Subtotal</td>
                                                <td className="text-right">{subTotal} tk.</td>
                                            </tr>
                                            <tr>
                                                <td>Total</td>
                                                <td className="text-right">{subTotal} tk.</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <button
                                        type="button"
                                        className="btn btn-block rounded-0 shadow-none"
                                        onClick={() => history.push('/checkout')}
                                    >procced to checkout</button>
                                </div>
                            </div>

                            {/* Payment Security Info */}
                            <div className="payment-security-message pt-3">
                                <div className="border-bottom title mb-3">
                                    <h6 className="mb-2">payment security</h6>
                                </div>
                                <p className="mb-4">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought.</p>

                                <ul>
                                    <li>
                                        <div className="img-box">
                                            <img src={MasterCardLogo} className="img-fluid" alt="..." />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-box">
                                            <img src={VisaCardLogo} className="img-fluid" alt="..." />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-box">
                                            <img src={RocketLogo} className="img-fluid" alt="..." />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-box">
                                            <img src={BkashLogo} className="img-fluid" alt="..." />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                : <div className="container py-4">
                    <div className="row">
                        <div className="col-12 text-center empty-cart">
                            <img src={EmptyShoppingCartImg} className="img-fluid" alt="..." />
                            <h5 className="mt-3">Your Cart is Empty</h5>
                            <Link to="/" type="button" className="btn shadow-none">Back To Shopping</Link>
                        </div>
                    </div>
                </div>
            }

            <FooterComponent />
        </div>
    );
};

export default Index;