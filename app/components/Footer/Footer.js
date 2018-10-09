import React from 'react';
import { BUSINESSCONFIG } from '../../constants/BusinessConfig';
import './style.scss';

const companyName = BUSINESSCONFIG.COMPANY;

const Footer = () => (
  <footer>
    <section></section>
    <section>{companyName.FOOTERSPAN1}<span role="img" aria-label="heart-emoji">{companyName.FOOOTERSPAN2}</span>&nbsp;{companyName.FOOOTERSPAN3}&nbsp;<a>{companyName.AUTHOR}</a></section>
  </footer>
);

export default Footer;
