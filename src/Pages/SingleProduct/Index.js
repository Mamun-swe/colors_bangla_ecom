import React, { useEffect, useState } from 'react';
import '../../styles/single-product.scss';
import ReactImageMagnify from 'react-image-magnify';
import axios from 'axios';
import { apiURL } from '../../utils/apiURL';
import { Icon } from 'react-icons-kit';
import { plus, minus } from 'react-icons-kit/ionicons';
import { ic_access_time, ic_directions_car } from 'react-icons-kit/md';
import { user_circle } from 'react-icons-kit/ikons/user_circle';
import { shoppingBag } from 'react-icons-kit/feather';
import { heartO } from 'react-icons-kit/fa';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/Actions/cartAction';
import { useForm } from "react-hook-form";

import NavBarComponent from '../../Components/NavBar/NavBar';
import FooterComponent from '../../Components/Footer/Index';
import LoadingComponent from '../../Components/Loader';

import FourOFourImg from '../../assets/static/empty_shopping_cart.png';

const Index = () => {
    const { register, handleSubmit, errors } = useForm()
    const { id, name } = useParams()
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState(false)
    const [product, setProduct] = useState({})
    const [productImage, setProductImage] = useState('')
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()


    const magnifiyHandeller = event => {
        setProductImage(event.target.src)
    }

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`${apiURL}viewProduct/${id}/name`)
                setProduct(response.data.result)
                setProductImage(response.data.result.image)
                console.log(response.data.result)
                setLoading(false)
            } catch (error) {
                if (error.response) {
                    setLoading(false)
                    setError(true)
                }
            }
        }
        fetchProduct()
    }, [id, name])


    // Add to cart
    const addToCart = data => {
        const newData = {
            id: data.id,
            name: data.name,
            price: data.selling_price,
            stock: data.stock,
            image: data.image,
            quantity: quantity || 1
        }
        dispatch(addProduct(newData))
    }

    // Review Submit
    const onSubmit = async (data) => {
        const reviewData = {
            product_id: id,
            name: data.name,
            email: data.email,
            review: data.review
        }

        console.log(reviewData)
    }

    return (
        <div className="single-product">
            {isLoading ? <LoadingComponent /> :
                <div>

                    <NavBarComponent />

                    <div className="container py-4">
                        {isError ?
                            <div className="row">
                                <div className="col-12 py-4 text-center four-o-four">
                                    <img src={FourOFourImg} className="img-fluid" alt="..." />
                                    <h5 className="mt-3">Product not found !!</h5>
                                    <Link to="/" type="button" className="btn shadow-none">Back To Shopping</Link>
                                </div>
                            </div>
                            :
                            <div>
                                <div className="row mb-4">

                                    {/* Product Magnify */}
                                    <div className="col-12 col-lg-8">
                                        <ReactImageMagnify {...{
                                            smallImage: {
                                                alt: 'Product',
                                                src: productImage,
                                                width: window.innerWidth > 992 ? 410 : 250,
                                                height: window.innerWidth > 992 ? 450 : 300
                                            },
                                            style: { margin: 'auto' },
                                            imageClassName: 'magnifiySmallImage',
                                            largeImage: {
                                                src: productImage,
                                                width: 1200,
                                                height: 1800
                                            },
                                            enlargedImageContainerStyle: { background: '#fff', zIndex: 9 }
                                        }} />

                                        <div className="img-list text-center my-3">
                                            <ul>
                                                {product.images &&
                                                    product.images.length > 0 ?
                                                    product.images.map((image, i) =>
                                                        <li key={i}>
                                                            <img src={image.path} className="img-fluid" onClick={magnifiyHandeller} alt="..." />
                                                        </li>
                                                    ) : null}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-4 product-info mt-4 mt-lg-0">
                                        <h4>{product.name}</h4>
                                        <h6>SKU: {product.sku}</h6>

                                        <div className="price_policy">
                                            <div className="d-flex">
                                                <div><h3>{product.selling_price}<span>TK</span></h3></div>
                                                <div className="pl-4">
                                                    <p><Icon icon={ic_access_time} size={20} className="mr-2" />30 days return*</p>
                                                    <p><Icon icon={ic_directions_car} size={20} className="mr-2" />Delivary anywhere in banglades</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="sizes">
                                            <div className="d-flex">
                                                <div className="pt-2"><h6>SIZE</h6></div>
                                                <div>
                                                    <ul>
                                                        {product.size &&
                                                            product.size.length > 0 ? product.size.map((size, i) =>
                                                                <li key={i}><p>{size}</p></li>
                                                            )
                                                            : null}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="colors">
                                            <div className="d-flex">
                                                <div className="pt-2"><h6>COLORS</h6></div>
                                                <div className="ml-3">
                                                    <ul>
                                                        {product.color &&
                                                            product.color.length > 0 ? product.color.map((color, i) =>
                                                                <li key={i} style={{ background: `${color}` }}></li>
                                                            )
                                                            : null}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="cart-option">
                                            <div className="d-flex">
                                                <div>
                                                    <button
                                                        type="button"
                                                        className="btn rounded-0 shadow-none"
                                                        onClick={() => setQuantity(quantity - 1)}
                                                        disabled={quantity <= 1 ? true : false}
                                                    >
                                                        <Icon icon={minus} />
                                                    </button>
                                                    <button type="button" className="btn rounded-0 shadow-none" disabled>{quantity}</button>
                                                    <button
                                                        type="button"
                                                        className="btn rounded-0 shadow-none"
                                                        onClick={() => setQuantity(quantity + 1)}
                                                        disabled={quantity >= 5 ? true : false}
                                                    >
                                                        <Icon icon={plus} />
                                                    </button>
                                                </div>
                                                <div className="pl-2">
                                                    <button
                                                        type="button"
                                                        className="btn shadow-none rounded-0 border-0 cart-btn"
                                                        onClick={() => addToCart(product)}
                                                    >Add to Cart</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* Product Description */}
                                <div className="row">
                                    <div className="col-12 description">
                                        <Tabs defaultActiveKey="product_reviews">
                                            {/* Product feature tab */}
                                            <Tab eventKey="product_feature" title="Product Features">
                                                <p>{product.feature}</p>
                                            </Tab>

                                            {/* Product description tab */}
                                            <Tab eventKey="product_description" title="Product Descriptions">
                                                <p>{product.description}</p>
                                            </Tab>

                                            {/* Product review tab */}
                                            <Tab eventKey="product_reviews" title="Reviews" className="reviews">
                                                <div className="row">
                                                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                                                        <div className="pb-2 border-bottom mb-3">
                                                            <h6 className="text-uppercase mb-0">
                                                                {product.reviews ? <span className="mr-2">{product.reviews.length}</span> : "0"}
                                                                review {name}</h6>
                                                        </div>

                                                        {product.reviews &&
                                                            product.reviews.length > 0 ?
                                                            product.reviews.map((review, i) =>
                                                                <div className="d-flex mb-4" key={i}>
                                                                    <div><Icon icon={user_circle} size={30} className="text-muted" /></div>
                                                                    <div className="pl-3">
                                                                        <h5 className="text-capitalize mb-0">{review.name}</h5>
                                                                        <p className="mb-0">Rating: {review.rating}</p>
                                                                        <p className="mb-0">{review.details}</p>
                                                                    </div>
                                                                </div>
                                                            ) : null}

                                                    </div>
                                                    <div className="col-12 col-lg-6">

                                                        <div className="pb-2 border-bottom">
                                                            <h5 className="mb-0">ADD A REVIEW</h5>
                                                        </div>
                                                        <p>Your email address will not be published. Required fields are marked</p>

                                                        {/* Review Form */}
                                                        <form onSubmit={handleSubmit(onSubmit)}>

                                                            {/* Name */}
                                                            <div className="form-group mb-3">
                                                                {errors.name && errors.name.message ? (
                                                                    <small className="text-danger">{errors.name && errors.name.message}</small>
                                                                ) : <small>Your name *</small>
                                                                }
                                                                <input
                                                                    type="text"
                                                                    name="name"
                                                                    className="form-control shadow-none"
                                                                    ref={register({
                                                                        required: "Name is required",
                                                                    })}
                                                                />
                                                            </div>

                                                            {/* E-mail */}
                                                            <div className="form-group mb-3">
                                                                {errors.email && errors.email.message ? (
                                                                    <small className="text-danger">{errors.email && errors.email.message}</small>
                                                                ) : <small>E-mail *</small>
                                                                }
                                                                <input
                                                                    type="text"
                                                                    name="email"
                                                                    className="form-control shadow-none"
                                                                    ref={register({
                                                                        required: "E-mail is required",
                                                                        pattern: {
                                                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                                            message: "Invalid email address"
                                                                        }
                                                                    })}
                                                                />
                                                            </div>

                                                            {/* Review */}
                                                            <div className="form-group mb-3">
                                                                {errors.review && errors.review.message ? (
                                                                    <small className="text-danger">{errors.review && errors.review.message}</small>
                                                                ) : <small>Review *</small>
                                                                }

                                                                <textarea
                                                                    type="text"
                                                                    name="review"
                                                                    className="form-control shadow-none"
                                                                    rows="5"
                                                                    ref={register({
                                                                        required: "Review is required",
                                                                    })}
                                                                />
                                                            </div>

                                                            <button
                                                                type="submit"
                                                                className="btn shadow-none float-right"
                                                            >Submit Review</button>

                                                        </form>
                                                    </div>
                                                </div>
                                            </Tab>
                                        </Tabs>
                                    </div>
                                </div>

                                {/* Related products */}
                                {product.relatedProducts &&
                                    product.relatedProducts.length > 0 ?
                                    <div className="row related-products">
                                        <div className="col-12">
                                            <h6>Related Products</h6>
                                        </div>
                                        <div className="col-12">

                                            {product.relatedProducts.map((product, i) =>
                                                <div className="card rounded-0 product-card" key={i}>
                                                    <div className="card-body">
                                                        <Link to={`/product/${product.id}/${product.name}`}>
                                                            <div className="img-box">
                                                                <img src={product.image} className="img-fluid" alt="..." />
                                                            </div>
                                                        </Link>
                                                        <div className="product-card-footer border">
                                                            <div className="action-buttons text-right">
                                                                <button
                                                                    type="button"
                                                                    className="btn rounded-circle shadow-none shopping-bag-btn"
                                                                    onClick={() => addToCart(product)}
                                                                >
                                                                    <Icon icon={shoppingBag} size={16} />
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="btn rounded-circle shadow-none wish-list-btn"
                                                                >
                                                                    <Icon icon={heartO} size={18} />
                                                                </button>
                                                            </div>

                                                            <Link to={`/product/${product.id}/${product.name}`}>
                                                                <div className="d-sm-flex">
                                                                    <div>
                                                                        <p className="name">{product.name.slice(0, 15)}</p>
                                                                    </div>
                                                                    <div className="ml-auto">
                                                                        <p className="price">${product.selling_price}</p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>

                                                    </div>
                                                </div>
                                            )}

                                        </div>
                                    </div>
                                    : null}

                            </div>
                        }
                    </div>

                    <FooterComponent />
                </div>
            }
        </div>
    );
};

export default Index;