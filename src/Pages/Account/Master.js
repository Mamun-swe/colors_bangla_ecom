import React, { useState } from 'react';
import { Route, NavLink, useHistory } from 'react-router-dom';
import '../../styles/Account/master.scss';
import { Icon } from 'react-icons-kit';
import { ic_dehaze, ic_close } from 'react-icons-kit/md';

import DashboardIndex from './Dashboard/Index';
import OrderIndex from './Orders/Index';
import AddressesIndex from './Address/Index';
import EditBillingAddress from './Address/EditBillingAddress';
import AccountDetails from './Account-details/Index';

const Master = () => {
    const history = useHistory()
    const [show, setShow] = useState(false)

    const doLogout = () => {
        localStorage.removeItem('token')
        history.push('/')
    }

    return (
        <div className="account-master">
            <div className="container">
                <div className="row">
                    <div className="col-12">

                        {/* Top Menu Mobile */}
                        <div className="top-menu-mobile border-bottom d-lg-none">
                            <div className="d-flex">
                                <div><p className="mb-0 text-capitalize">golam rabby</p></div>
                                <div className="ml-auto">
                                    <button
                                        type="button"
                                        className="btn btn-light rounded-circle shadow-none"
                                        onClick={() => setShow(!show)}
                                    >
                                        {show ? <Icon icon={ic_close} size={25} /> : <Icon icon={ic_dehaze} size={25} />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Drawer */}
                        <div className={show ? "drawer d-lg-none open-drawer" : "drawer d-lg-none"}>
                            <NavLink exact activeClassName="is-Active" to="/account/">dashboard</NavLink>
                            <NavLink exact activeClassName="is-Active" to="/account/orders">orders</NavLink>
                            <NavLink exact activeClassName="is-Active" to="/account/addersses">addresses</NavLink>
                            <NavLink exact activeClassName="is-Active" to="/account/account-details">account details</NavLink>
                            <button
                                type="button"
                                className="btn btn-block rounded-0 shadow-none"
                                onClick={doLogout}
                            >logout</button>
                        </div>

                        <div className="d-flex">
                            {/* Side Menu */}
                            <div className="side-menu px-lg-3 d-none d-lg-block">
                                <NavLink exact activeClassName="is-Active" to="/account/">dashboard</NavLink>
                                <NavLink exact activeClassName="is-Active" to="/account/orders">orders</NavLink>
                                <NavLink exact activeClassName="is-Active" to="/account/addersses">addresses</NavLink>
                                <NavLink exact activeClassName="is-Active" to="/account/account-details">account details</NavLink>
                                <button
                                    type="button"
                                    className="btn btn-block rounded-0 shadow-none"
                                    onClick={doLogout}
                                >logout</button>
                            </div>

                            {/* Main Menu */}
                            <div className="main-menu flex-fill px-lg-3">
                                <Route exact path="/account/" component={DashboardIndex} />
                                <Route exact path="/account/orders" component={OrderIndex} />
                                <Route exact path="/account/addersses" component={AddressesIndex} />
                                <Route exact path="/account/addersses/edit/billing" component={EditBillingAddress} />
                                <Route exact path="/account/account-details" component={AccountDetails} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Master;