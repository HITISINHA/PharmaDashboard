/*
 * ProductsPage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import PaperProduct from './PaperProduct';
import Solares from 'images/logos/solares.png';
import SunPharma from 'images/logos/sun_solares.png';
import AstraZeneca from 'images/logos/astra_zeneca.png';
import ZydusAlidacCadila from 'images/logos/zydus_adilac_cadila.png';
import Spectra from 'images/logos/spectra.png';
import NuserchOrganics from 'images/logos/nuserch_organics.png';
import Medispan from 'images/logos/medispan.png';
import Leeford from 'images/logos/leeford.png';
import Msd from 'images/logos/msd.png';
import WallacePharma from 'images/logos/wallace.png';
import Seagull from 'images/logos/seagull.png';
import Biosearch from 'images/logos/biosearch.png';
import Comed from 'images/logos/comed.png';

import './style.scss';

const companyList =[
['Sun Solares', Solares], //to be changed later
['Astra Zeneca', AstraZeneca],
['Zydus Alidac-Cadila',ZydusAlidacCadila],
['Spectra', Spectra],
['Nuserch Organics', NuserchOrganics],
['Sun Pharma', SunPharma],
['Ozone', Ozone],
['Medispan', Medispan],
['Leeford', Leeford],
['MSD', Msd],
['Wallace Pharma', WallacePharma],
['Seagull Pharma', Seagull],
['Comed', Comed],
['BioSearch', BioSearch]
];

export default class ProductsPage extends React.Component {
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
          <title>Products Page</title>
          <meta
            name="description"
            content="Products Page of Gulati Pharma application"
          />
        </Helmet>
        <PaperProduct companyProducts={companyList}/>
      </div>
    );
  }
}
