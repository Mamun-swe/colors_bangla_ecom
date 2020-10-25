import React, { useEffect, useState } from 'react';
import '../../styles/top-selling.scss';
import axios from 'axios';
import { apiURL } from '../../utils/apiURL';
import Icon from 'react-icons-kit';
import { shoppingBag } from 'react-icons-kit/feather';
import { heartO } from 'react-icons-kit/fa';
import { spinner2 } from 'react-icons-kit/icomoon';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/Actions/cartAction';
import ProductModalComponent from '../Modal/ProductModal';
import { Link } from 'react-router-dom';

const TopSellingProductsComponent = ({ categories }) => {
    const [modalShow, setModalShow] = useState(false)
    const [modalData, setModalData] = useState({})
    const [loading, setLoading] = useState(false)
    const [limit, setLimit] = useState(12)
    const [products, setProducts] = useState([])
    const [id, setId] = useState()
    const productsPerPage = 12
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`${apiURL}categoryProducts/${id || categories[0].id}`)
                setProducts(response.data.result)
                setLimit(12)
                setLoading(false)
            } catch (error) {
                console.log(error.message);
            }
        }

        fetchProducts()
    }, [id, categories])


    const handleModal = data => {
        setModalShow(true)
        setModalData(data)
    }

    const hideModal = () => {
        setModalShow(false)
    }

    // Add to cart
    const addToCart = data => {
        const newData = {
            id: data.id,
            cartId: Date.now(),
            name: data.name,
            price: data.selling_price,
            stock: data.stock,
            image: data.image,
            quantity: 1,
            available_quantity: parseInt(data.quantity),
            size: data.size ? data.size[0] : null,
            color: data.color ? data.color[0] : null
        }
        dispatch(addProduct(newData))
    }


    // Replace white space with (_)
    const replaceWhiteSpace = (data) => {
        let productName = data
        productName = productName.replace(/ /g, "-")
        return productName
    }


    return (
        <div className="top-selling">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="text-upperrcase">browse top selling products</h1>
                    </div>

                    <div className="col-12 text-center">
                        <div className="top-selling-buttons">
                            {categories.length > 0 && categories.map((category, i) =>
                                <button
                                    type="button"
                                    className="btn shadow-none"
                                    key={i}
                                    onClick={() => setId(category.id)}
                                >
                                    {category.name.slice(0, 10)}
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Products */}
                <div className="row products mt-4">

                    <div className="col-12">
                        {loading ?
                            <div className="text-center py-4">
                                <Icon icon={spinner2} size={25} className="spin" />
                            </div>
                            : products && products.length > 0 && products.slice(0, limit).map((product, i) =>
                                <div className="card rounded-0 product-card topselling-card" key={i}>

                                    <div className="card-body">
                                        <Link to={`/product/${product.id}/${replaceWhiteSpace(product.name)}`}>
                                            <div className="img-box">
                                                <img src={product.image} className="img-fluid" alt="..." />
                                            </div>
                                        </Link>

                                        <div className="product-card-footer border">

                                            {/* Quick View Button */}
                                            <div className="quick-view">
                                                <button
                                                    type="button"
                                                    className="btn shadow-none"
                                                    onClick={() => handleModal(product)}
                                                >Quick View</button>
                                            </div>

                                            {/* Action Buttons */}
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

                                            <Link to={`/product/${product.id}/${replaceWhiteSpace(product.name)}`}>
                                                <div className="d-sm-flex">
                                                    <div>
                                                        <p className="name">{product.name.slice(0, 15)}</p>
                                                    </div>
                                                    <div className="ml-auto">
                                                        <p className="price">৳ {product.selling_price}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            )}
                    </div>

                    {products && products.length <= limit ? null :
                        <div className="col-12 text-center">
                            <button type="button" className="btn shadow-none load-more-btn" onClick={() => setLimit(limit + productsPerPage)}>Load More</button>
                        </div>
                    }
                </div>
            </div>

            {/* Product Modal */}
            <ProductModalComponent
                productinfo={modalData}
                show={modalShow}
                hidemodal={hideModal}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

export default TopSellingProductsComponent;