/*
 * LocateUsPage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import CardLocateUs from './CardLocateUs';
import './style.scss';

export default class LocateUsPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="feature-page">
        <Helmet>
          <title>Locate Us Page</title>
          <meta
            name="description"
            content="Locate Us Page of Gulati Pharma application"
          />
        </Helmet>
        <h1 className="heading-page">We are there for you!</h1>
        <CardLocateUs/>
      </div>
    );
  }
}
