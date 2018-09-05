/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import Drawer from '../../components/Header/Drawer';
import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ProductsPage from 'containers/ProductsPage/Loadable';
import ServicesPage from 'containers/ServicesPage/Loadable';
import Footer from 'components/Footer';
import './style.scss';

const App = () => (
  <div className="container">
    <Helmet
      titleTemplate="%s - PharmaDashboard"
      defaultTitle="PharmaDashboard"
    >
      <meta name="description" content="A PharmaDashboard application" />
    </Helmet>
    <div className="row">
      <Drawer className="col-md-1"/>
      <div className="app-wrapper col-md-10">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/features" component={FeaturePage} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </div>
    </div>
    <Footer />
  </div>
);

export default App;
