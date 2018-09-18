/*
 * ContactUsPage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import CardContactUs from './CardContactUs';
import './style.scss';

export default class ContactUsPage extends React.Component {
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
          <title>Contact Us Page</title>
          <meta
            name="description"
            content="Contact Us Page of Gulati Pharma application"
          />
        </Helmet>
        <CardContactUs/>
      </div>
    );
  }
}
