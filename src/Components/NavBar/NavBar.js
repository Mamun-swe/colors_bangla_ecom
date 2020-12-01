import React, { useEffect, useState } from 'react';
import '../../styles/navbar.scss';
import axios from 'axios';
import { Icon } from 'react-icons-kit';
import { apiURL } from '../../utils/apiURL';
import { Link, NavLink } from 'react-router-dom';
import { text_left } from 'react-icons-kit/ikons';
import { useSelector, useDispatch } from 'react-redux';
import { productsList } from '../../Redux/Actions/cartAction';
import { user, facebook, instagram } from 'react-icons-kit/icomoon'
import { ic_add_shopping_cart, ic_dehaze, ic_close, ic_keyboard_arrow_right } from 'react-icons-kit/md';

import SearchComponent from '../Search/Index';
import MegaMenuComponent from '../MegaMenu/Index';
import Logo from '../../assets/static/logo.png';

const NavBar = () => {
    const dispatch = useDispatch()
    // const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false)
    const [categories, setCategories] = useState([])
    let { cartProducts } = useSelector((state => state.products))


    const [isOpen, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(true)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            let isTop = window.scrollY < 150;
            if (isTop !== true) {
                setScrolled(false);
            } else {
                setScrolled(true);
            }
        })

        dispatch(productsList())
        const fetchCategories = async () => {
            try {
                const categoryResponse = await axios.get(`${apiURL}website/categories`)
                if (categoryResponse.status === 200) {
                    setCategories(categoryResponse.data.categories)
                }
            } catch (error) {
                if (error) console.log(error)
            }
        }

        fetchCategories()
    }, [dispatch])


    return (
        <div className={scrolled ? "custom-navbar border-bottom" : "custom-navbar scrolled shadow"}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex">
                            <div>
                                <Link to="/">
                                    <img src={Logo} className="img-fluid" alt="..." />
                                </Link>
                            </div>
                            <div className="page-links d-none d-lg-block px-2">
                                <ul>
                                    <li><NavLink exact activeClassName="is-Active" to="/">home</NavLink></li>
                                    <li><NavLink exact activeClassName="is-Active" to="/shop">shop</NavLink></li>
                                    <li>
                                        <button
                                            type="button"
                                            className="btn shadow-none"
                                            onClick={() => setShow(!show)}
                                        >
                                            categories
                                            <Icon icon={ic_keyboard_arrow_right} size={23} />
                                        </button>
                                    </li>
                                    <li><NavLink exact activeClassName="is-Active" to="/contact">contact</NavLink></li>
                                    <li><NavLink exact activeClassName="is-Active" to="/sign-in">my account</NavLink></li>
                                </ul>
                                {/* Mega Menu */}
                                <div className={show ? "custom-mega-menu shadow open" : "custom-mega-menu shadow"}></div>
                            </div>
                            {/* Cart Button */}
                            <div className="pr-2 ml-auto">
                                <div className="cart-box">
                                    <Link to="/shopping-cart"
                                        type="button"
                                        className="btn rounded-circle shadow-none cart-btn">
                                        <Icon icon={ic_add_shopping_cart} size={22} />
                                    </Link>
                                    {
                                        cartProducts ?
                                            <small>{cartProducts.length}</small>
                                            : <small>0</small>
                                    }
                                </div>
                            </div>
                            {/* Bar Button */}
                            <div className="d-lg-none">
                                <button
                                    type="button"
                                    className="btn rounded-circle shadow-none p-1 bar-btn"
                                    onClick={() => setOpen(true)}>
                                    <Icon icon={ic_dehaze} size={25} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Mobile Navbar */}
            {/* <div className="mobile-nav d-lg-none">
                <div className="top-nav p-3">
                    <div className="d-flex">
                        <div>
                            <Link to="/">
                                <img src={Logo} className="img-fluid" alt="..." />
                            </Link>
                        </div>
                        <div className="flex-fill px-2">
                            <SearchComponent />
                        </div>
                        <div className="pr-2">
                            <div className="cart-box">
                                <Link to="/shopping-cart"
                                    type="button"
                                    className="btn rounded-circle shadow-none cart-btn">
                                    <Icon icon={ic_add_shopping_cart} size={22} />
                                </Link>
                                {
                                    cartProducts ?
                                        <small>{cartProducts.length}</small>
                                        : <small>0</small>
                                }
                            </div>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="btn rounded-circle shadow-none p-1 bar-btn"
                                onClick={() => setOpen(true)}>
                                <Icon icon={ic_dehaze} size={25} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="top-nav-break d-lg-none"></div> */}

            {/* Menu */}
            {/* <div className={open ? "mobile-menu open-menu" : "mobile-menu"}>
                    <div className="content-header p-3 text-right">
                        <button
                            type="button"
                            className="btn rounded-circle shadow-none p-1"
                            onClick={() => setOpen(false)}>
                            <Icon icon={ic_close} size={25} />
                        </button>
                    </div>
                    <div className="content-body px-4">
                        <Link to="/">home</Link>
                        <Link to="/shop">shop</Link>
                        <Link to="/contact">contact</Link>
                        <Link to="/sign-in">my account</Link>
                    </div>
                </div>
            </div> */}

            {/* Desktop Nav One */}
            {/* <div className="desktop-nav-one d-none d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex py-4">
                                <div className="links">
                                    <ul>
                                        <li>
                                            <Link to="/">
                                                <img src={Logo} className="img-fluid" alt="..." />
                                            </Link>
                                        </li>
                                        <li><NavLink exact activeClassName="is-active" to="/">home</NavLink></li>
                                        <li><NavLink exact activeClassName="is-active" to="/shop">shop</NavLink></li>
                                        <li><NavLink exact activeClassName="is-active" to="/contact">contact</NavLink></li>
                                    </ul>
                                </div>
                                <div className="ml-auto account-links">
                                    <ul>
                                        <li>
                                            <Link to="/sign-in">
                                                <div className="d-flex">
                                                    <div><Icon icon={user} size={20} color="#000" className="border p-1" /></div>
                                                    <div className="pl-2">
                                                        <p className="mb-0">my account</p>
                                                        <small>sing in/join</small>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/shopping-cart">
                                                <div className="d-flex">
                                                    <div><Icon icon={ic_add_shopping_cart} size={20} color="#000" className="border p-1" /></div>
                                                    <div className="pl-2">
                                                        <p className="mb-0">my cart</p>
                                                        {
                                                            cartProducts ?
                                                                <small>{cartProducts.length} items</small>
                                                                : <small>0 items</small>
                                                        }
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Desktop Nav Black */}
            {/* <div className="desktop-nav-black d-none d-lg-block py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex">
                                <div>
                                    <div className="d-flex">
                                        <div className="category-btn-box pr-2">
                                            <button
                                                type="button"
                                                className="btn shadow-none"
                                                onClick={() => setIsShow(!isShow)}
                                            >
                                                <Icon icon={text_left} size={18} className="mr-2" />Categories
                                            </button>
                                            {isShow ?
                                                <MegaMenuComponent items={categories} />
                                                : null}
                                        </div>

                                        <div className="search-desktop">
                                            <SearchComponent />
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    <ul>
                                        <li><a href="https://www.facebook.com/urfashion21"><Icon icon={facebook} size={15} /></a></li>
                                        <li><a href="https://www.instagram.com/urfasshion21"><Icon icon={instagram} size={15} /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         */}

        </div>
    );
};

export default NavBar;