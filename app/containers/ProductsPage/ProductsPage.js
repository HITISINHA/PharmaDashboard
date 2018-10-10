/*
 * ProductsPage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import PaperProduct from './PaperProduct';
import { BUSINESSCONFIG } from '../../constants/BusinessConfig';
import './style.scss';

export default class ProductsPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const companyName = BUSINESSCONFIG.COMPANY;
    return (
      <div className="feature-page">
        <Helmet>
          <title>{companyName.PRODUCTSMESSAGE}</title>
          <meta
            name="description"
            content={companyName.PRODUCTSPAGEHEADER}
          />
        </Helmet>
        <h1 className="heading-page">{companyName.PRODUCTSQUOTE}</h1>
        <PaperProduct companyProducts={companyName.PRODUCTS} />
      </div>
    );
  }
}
