import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './Components/PrivateRoute';
import ScrollToTop from './Components/ScrollToTop/Index';

import Index from './Pages/Index';
import CategoryIndex from './Pages/Category/Index';
import CartIndex from './Pages/Cart/Index';
import CheckoutIndex from './Pages/Checkout/Index';

import LoginPage from './Pages/Auth/Login';
import RegisterPage from './Pages/Auth/Register';
import ResetPage from './Pages/Auth/Reset';

import AccountMaster from './Pages/Account/Master';
import FourOFour from './Pages/FourOFour/Index';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/category/:categoryId" component={CategoryIndex} />
            <Route exact path="/shopping-cart" component={CartIndex} />
            <Route exact path="/checkout" component={CheckoutIndex} />

            <Route exact path="/sign-in" component={LoginPage} />
            <Route exact path="/sign-up" component={RegisterPage} />
            <Route exact path="/reset" component={ResetPage} />

            <PrivateRoute>
              <Route path="/account" component={AccountMaster} />
            </PrivateRoute>
            {/* <Route exact path="/page-not-found" component={FourOFour} /> */}
            <Route path="*" component={FourOFour} />

          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
