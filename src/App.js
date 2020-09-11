import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './Components/PrivateRoute';

import Index from './Pages/Index';
import CategoryIndex from './Pages/Category/Index';
import ProductIndex from './Pages/Product/Index';

import AccountMaster from './Pages/Account/Master';
import FourOFour from './Pages/FourOFour/Index';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/category" component={CategoryIndex} />
          <Route exact path="/product" component={ProductIndex} />

          <PrivateRoute>
            <Route path="/account" component={AccountMaster} />
          </PrivateRoute>

          <Route path="*" component={FourOFour} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
