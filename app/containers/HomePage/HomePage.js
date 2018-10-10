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
import CardHome from './CardHome';
import CardUs from './CardUs';
import Header from 'components/Header/Header';
import { BUSINESSCONFIG } from '../../constants/BusinessConfig';

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
    const companyName = BUSINESSCONFIG.COMPANY;
    return (
      <article>
        <Helmet>
          <title>{companyName.HOMEPAGETITLE}</title>
          <meta name="description" content={companyName.HOMEPAGEHEADER} />
        </Helmet>
        <div className="feature-page">
          <Header />
          <br />
          <h1 className="heading-page">{companyName.HOMEFIRSTCARDTITLE}</h1>
          <CardHome likes={85} />
          <h1 className="heading-page">{companyName.HOMESECONDCARDTITLE} </h1>
          <CardUs likes={85} />
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
