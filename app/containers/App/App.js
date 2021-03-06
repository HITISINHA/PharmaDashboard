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
import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ProductsPage from 'containers/ProductsPage/Loadable';
import ServicesPage from 'containers/ServicesPage/Loadable';
import LocateUsPage from 'containers/LocateUsPage/Loadable';
import ConatactUsPage from 'containers/ContactUsPage/Loadable';
import Footer from 'components/Footer';
import Drawer from '../../components/Header/Drawer';
import { BUSINESSCONFIG } from '../../constants/BusinessConfig';
import './style.scss';

const companyName = BUSINESSCONFIG.COMPANY;
const App = () => (
  <div>
    <Helmet
      titleTemplate={'%s'.concat(' - ', companyName.CAMELCASENAME)}
      defaultTitle={companyName.CAMELCASENAME}
    >
      <meta name="description" content={companyName.HELMETMESSAGE} />
    </Helmet>
    <div>
      <Drawer/>
      <div className="app-wrapper">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/features" component={FeaturePage} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/locateus" component={LocateUsPage} />
          <Route path="/contactus" component={ConatactUsPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </div>
    </div>
    <Footer />
  </div>
);

export default App;
