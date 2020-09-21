import React, { useEffect, useState } from 'react';
import '../../styles/category-index.scss';
import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md';
import { shoppingBag } from 'react-icons-kit/feather';
import { heartO } from 'react-icons-kit/fa';
import { apiURL } from '../../utils/apiURL';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import Collapse from 'react-bootstrap/Collapse';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/Actions/cartAction';

import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Index';
import LoadingComponent from '../../Components/Loader';
import ProductModalComponent from '../../Components/Modal/ProductModal';


const Index = () => {
    const history = useHistory()
    const { categoryId } = useParams()
    const [loading, setLoading] = useState(false)
    const [modalShow, setModalShow] = useState(false)
    const [modalData, setModalData] = useState({})
    const [showCategory, setShowCategory] = useState(true)
    const [showPrice, setShowPrice] = useState(true)
    const [showColor, setShowColor] = useState(true)
    const [categories, setCategories] = useState([])
    const [categoryProducts, setCategoryProducts] = useState([])
    const [limit, setLimit] = useState(8)
    const productsPerPage = 8
    const dispatch = useDispatch()
    const [subMenu, setSubMenu] = useState()


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const categoryResponse = await axios.get(`${apiURL}getCategory`)
                const categoryProducts = await axios.get(`${apiURL}categoryProducts/${categoryId}`)
                if (categoryResponse.status === 200 && categoryProducts.status === 200) {
                    setCategories(categoryResponse.data.result)
                    setCategoryProducts(categoryProducts.data.result)
                    setLimit(8)
                    setLoading(false)
                }
            } catch (error) {
                if (error && error.response.status === 500) {
                    history.push('/')
                }
            }
        }

        fetchData()
    }, [categoryId, history])

    const handleModal = data => {
        setModalShow(true)
        setModalData(data)
    }

    const handleSort = async (event) => {
        if (event.target.value === 'sort_latest') {
            const data = categoryProducts.filter(x => moment(x.created_at).startOf('day').fromNow().slice(0, 1) <= 5)
            setCategoryProducts(data)
        }
    }

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
        <div className="category-index">
            {loading ? <LoadingComponent /> :

                <div>
                    <NavBar categories={categories} />

                    <div className="container-fluid py-3">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex">


                                    {/* Desktop Side Menu */}
                                    <div className="flex-side-menu d-none d-lg-block p-3">
                                        <div className="content">

                                            <div className="custom-dropdown p-2">

                                                {/* Category Dropdown */}
                                                <div className="dropdown-header"
                                                    onClick={() => setShowCategory(!showCategory)}
                                                >
                                                    <div className="d-flex">
                                                        <div><h6 className="mb-0">product categories</h6></div>
                                                        <div className="ml-auto">
                                                            <Icon
                                                                icon={ic_keyboard_arrow_right}
                                                                size={25}
                                                                style={{ color: '#000' }}
                                                                className={showCategory ? "angle-icon rotate" : "angle-icon"}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <Collapse in={showCategory}>
                                                    <div className="dropdown-body">
                                                        {categories.length > 0 && categories.map((category, i) =>

                                                            <div className="menu" key={i}>
                                                                <button
                                                                    type="button"
                                                                    className="btn shadow-none btn-block text-left pr-1"
                                                                    onClick={() => setSubMenu(i)}
                                                                >
                                                                    {category.name}
                                                                    <Icon
                                                                        icon={ic_keyboard_arrow_right}
                                                                        size={20}
                                                                        style={{ color: '#000' }}
                                                                        className={subMenu === i ? "float-right text-danger angle-icon rotate" : "float-right angle-icon"}
                                                                    />
                                                                </button>
                                                                {subMenu === i ?
                                                                    <div className="menu-child">
                                                                        {category.children.map((child, k) =>
                                                                            <NavLink
                                                                                exact
                                                                                to={`/category/${child.id}`}
                                                                                activeClassName="is-active"
                                                                                key={k}
                                                                            >
                                                                                <Icon
                                                                                    icon={ic_keyboard_arrow_right}
                                                                                    size={20}
                                                                                    style={{ color: '#000' }}
                                                                                />{child.name}
                                                                            </NavLink>
                                                                        )}
                                                                    </div>
                                                                    : null}
                                                            </div>
                                                        )}
                                                    </div>
                                                </Collapse>

                                                {/* Price Dropdown  */}
                                                <div className="dropdown-header"
                                                    onClick={() => setShowPrice(!showPrice)}
                                                >
                                                    <div className="d-flex">
                                                        <div><h6 className="mb-0">price</h6></div>
                                                        <div className="ml-auto">
                                                            <Icon
                                                                icon={ic_keyboard_arrow_right}
                                                                size={25}
                                                                style={{ color: '#000' }}
                                                                className={showPrice ? "angle-icon rotate" : "angle-icon"}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <Collapse in={showPrice}>
                                                    <div className="dropdown-body mb-3">
                                                        <div className="form-check mb-3">
                                                            <input type="checkbox" className="form-check-input" id="price-ckeck-1" />
                                                            <label className="form-check-label" htmlFor="price-ckeck-1">0 - 1000</label>
                                                        </div>

                                                        <div className="form-check mb-3">
                                                            <input type="checkbox" className="form-check-input" id="price-ckeck-2" />
                                                            <label className="form-check-label" htmlFor="price-ckeck-2">1000 - 10000</label>
                                                        </div>

                                                        <div className="form-check mb-3">
                                                            <input type="checkbox" className="form-check-input" id="price-ckeck-3" />
                                                            <label className="form-check-label" htmlFor="price-ckeck-3">10000 - above</label>
                                                        </div>
                                                    </div>
                                                </Collapse>

                                                {/* Color Dropdown */}
                                                <div className="dropdown-header"
                                                    onClick={() => setShowColor(!showColor)}
                                                >
                                                    <div className="d-flex">
                                                        <div><h6 className="mb-0">color</h6></div>
                                                        <div className="ml-auto">
                                                            <Icon
                                                                icon={ic_keyboard_arrow_right}
                                                                size={25}
                                                                style={{ color: '#000' }}
                                                                className={showColor ? "angle-icon rotate" : "angle-icon"}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <Collapse in={showColor}>
                                                    <div className="colors">
                                                        <button type="button" className="btn btn-primary rounded-0 shadow-none"></button>
                                                        <button type="button" className="btn btn-info rounded-0 shadow-none"></button>
                                                        <button type="button" className="btn btn-danger rounded-0 shadow-none"></button>
                                                        <button type="button" className="btn btn-warning rounded-0 shadow-none"></button>
                                                        <button type="button" className="btn btn-primary rounded-0 shadow-none"></button>
                                                        <button type="button" className="btn btn-info rounded-0 shadow-none"></button>
                                                        <button type="button" className="btn btn-danger rounded-0 shadow-none"></button>
                                                        <button type="button" className="btn btn-warning rounded-0 shadow-none"></button>
                                                    </div>
                                                </Collapse>

                                            </div>
                                        </div>
                                    </div>


                                    {/* Main Menu */}
                                    <div className="flex-fill flex-main-menu p-lg-3">
                                        <div className="main-content">
                                            <div className="row">

                                                {/* Product Sort */}
                                                <div className="col-12 mb-2 product-sort">
                                                    <select
                                                        onChange={handleSort}
                                                        className="form-control rounded-0 shadow-none"
                                                    >
                                                        <option value="sort_all">Sort by All</option>
                                                        <option value="sort_latest">Sort by Latest</option>
                                                    </select>
                                                </div>

                                                <div className="col-12">
                                                    {categoryProducts.length > 0 && categoryProducts.slice(0, limit).map((product, i) =>
                                                        <div className="card rounded-0 product-card" key={i}>
                                                            <div className="card-body">
                                                                <div className="img-box">
                                                                    <img src={product.image} className="img-fluid" alt="..." />
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
                                                                    <div className="overlay">
                                                                        <div className="flex-center flex-column quick-view">
                                                                            <button
                                                                                type="button"
                                                                                className="btn shadow-none"
                                                                                onClick={() => handleModal(product)}
                                                                            >Quick View</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-card-footer border">
                                                                    <div className="d-sm-flex">
                                                                        <div>
                                                                            <p className="name">{product.name.slice(0, 15)}</p>
                                                                        </div>
                                                                        <div className="ml-auto">
                                                                            <p className="price">${product.selling_price}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    )}
                                                </div>


                                                {categoryProducts.length <= limit ?
                                                    null :
                                                    <div className="col-12 text-center">
                                                        <button
                                                            type="button"
                                                            className="btn shadow-none load-more-btn"
                                                            onClick={() => setLimit(limit + productsPerPage)}
                                                        >Load More</button>
                                                    </div>
                                                }

                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer />

                    {/* Product Modal */}
                    <ProductModalComponent
                        productinfo={modalData}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            }
        </div>
    );
};

export default Index;