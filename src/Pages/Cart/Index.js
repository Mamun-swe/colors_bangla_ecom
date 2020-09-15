import React, { useEffect, useState } from 'react';
import '../../styles/shopping-cart.scss';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import NavBarComponent from '../../Components/NavBar/NavBar';
import FooterComponent from '../../Components/Footer/Index';

import ProductImage from '../../assets/images/product_2.jpg';
import MasterCardLogo from '../../assets/static/master-card.png';
import VisaCardLogo from '../../assets/static/visa-card.png';
import RocketLogo from '../../assets/static/rocket.jpeg';
import BkashLogo from '../../assets/static/bkash.jpg';


const Index = () => {
    const history = useHistory()
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setProducts(response.data)
        }
        fetchProducts()
    }, [])


    return (
        <div className="shopping-cart">
            <NavBarComponent />

            <div className="container py-4">
                <div className="row">
                    <div className="col-12 text-center mb-4 mb-lg-5 mt-lg-3">
                        <div className="cart-header">
                            <h5 className="mb-0">
                                <span className="text-black">shopping cart</span>
                                <span className="text-muted">/ceckout/</span>
                                <span className="text-muted">order status</span>
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
                                {products.slice(0, 3).map((product, i) =>
                                    <tr key={i}>
                                        <td>
                                            <div className="img-box">
                                                <img src={ProductImage} className="img-fluid" alt="..." />
                                            </div>
                                        </td>
                                        <td style={{ minWidth: '150px' }}>
                                            <p className="mb-1">{product.name}</p>
                                            <small>Remove</small>
                                        </td>
                                        <td className="text-center">ট 980</td>
                                        <td className="text-center">1</td>
                                        <td className="text-center">980</td>
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
                                            <td className="text-right">980 tk.</td>
                                        </tr>
                                        <tr>
                                            <td>Shipping</td>
                                        </tr>
                                        <tr>
                                            <td>Out side dhaka</td>
                                            <td className="text-right">100 tk.</td>
                                        </tr>
                                        <tr>
                                            <td>Inside dhaka</td>
                                            <td className="text-right">80 tk.</td>
                                        </tr>
                                        <tr>
                                            <td>Total</td>
                                            <td className="text-right">980 tk.</td>
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

            <FooterComponent />
        </div>
    );
};

export default Index;