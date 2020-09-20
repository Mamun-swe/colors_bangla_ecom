import React from 'react';
import '../../styles/footer.scss';
import { Icon } from 'react-icons-kit';
import {
    user,
    earth,
    twitter,
    facebook,
    instagram
} from 'react-icons-kit/icomoon'
import Logo from '../../assets/static/logo.png';
import { Link } from 'react-router-dom';

const Index = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-3 text-center text-lg-left pr-lg-5">
                        <img src={Logo} className="img-fluid" alt="..." />
                        <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter</p>
                        <ul>
                            <li><a href="https://www.facebook.com/"><Icon icon={user} size={20} /></a></li>
                            <li><a href="https://www.facebook.com/"><Icon icon={earth} size={20} /></a></li>
                            <li><a href="https://www.facebook.com/"><Icon icon={twitter} size={20} /></a></li>
                            <li><a href="https://www.facebook.com/"><Icon icon={facebook} size={20} /></a></li>
                            <li><a href="https://www.facebook.com/"><Icon icon={instagram} size={19} /></a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-3 text-center text-lg-left">
                        <h5>my account</h5>
                        <div><Link to="/" type="button" className="btn shadow-none rounded-0">my account</Link></div>
                        <div><Link to="/" type="button" className="btn shadow-none rounded-0">my wishlist</Link></div>
                        {/* <div><Link to="/" type="button" className="btn shadow-none rounded-0">compare</Link></div> */}
                        <div><Link to="/" type="button" className="btn shadow-none rounded-0">checkout</Link></div>
                        <div><Link to="/" type="button" className="btn shadow-none rounded-0">login</Link></div>
                    </div>
                    <div className="col-12 col-lg-3 text-center text-lg-left">
                        <h5>customer service</h5>
                        <div><Link to="/" type="button" className="btn shadow-none rounded-0">about us</Link></div>
                        {/* <div><Link to="/" type="button" className="btn shadow-none rounded-0">shipping & return</Link></div> */}
                        <div><Link to="/" type="button" className="btn shadow-none rounded-0">shipping guide</Link></div>
                        <div><Link to="/" type="button" className="btn shadow-none rounded-0">faq</Link></div>
                    </div>
                    <div className="col-12 col-lg-3 text-center text-lg-left mb-0">
                        <h5>stay connected</h5>
                        <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.</p>
                        <form>
                            <div className="form-group mb-2">
                                <input
                                    type="text"
                                    className="form-control rounded-0 shadow-none"
                                    placeholder="Enter email address"
                                />
                            </div>
                            <button type="submit" className="btn btn-block submit-btn shadow-none rounded-0">join newsletter</button>
                        </form>
                    </div>

                    <div className="col-12 mt-4">
                        <div className="boder"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;