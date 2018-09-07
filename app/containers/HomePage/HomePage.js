/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ReposList from 'components/ReposList';
import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (  
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A Gulati Pharma application homepage" />
        </Helmet>
        <div className="home-page">
          <section className="centered">
            <h2>GULATI PHARMA</h2>
            <p>Leading <i> Wholesale </i> Chemists</p>
          </section>
          <section>
          <blockquote>Medication is manifestation of recuperation</blockquote>
            <p>
            Our main focus has been on 
            Since years, PharmaDashboard has been involved in serving science, 
            with one of the best customer satisfactions in the area. To assist 
            your fight against diseases, to ensure no medical issues pull you 
            back from making the world a  safer, cleaner and safer place to 
            live, is our prime objective. We help our customers improve their 
            health, deliver medicines to market and increase laboratory productivity. 
            We offer an unmatched combination of customer focus, purchasing 
            convenience and comprehensive services.
            </p>
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};
