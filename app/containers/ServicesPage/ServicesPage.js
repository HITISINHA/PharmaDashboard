/*
 * ServicesPage
 *
 * List all the features
 */
import React from 'react';
import PaperProduct from './PaperServices';
import { Helmet } from 'react-helmet';
import Heart from 'images/organs/heart.png';
import Skin from 'images/organs/skin.png';
import Cancer from 'images/organs/cancer.png';
import Diab from 'images/organs/diab.png';
import Gene from 'images/organs/gene.png';
import Gyna from 'images/organs/gyna.png';
import Imune from 'images/organs/imune.png';
import Ortho from 'images/organs/ortho.png';
import Pedia from 'images/organs/pedia.png';
import Sera from 'images/organs/sera.png';
import Vete from 'images/organs/vete.png';
import Ora from 'images/organs/ora.png';
import './style.scss';

const companyList =[
  ['Cardiicare', Heart,'Providing products to treat and monitor such diseases is at the core of Gulati Pharma.'],
  ['Skincare', Skin, 'We are concentrating our efforts especially on these areas.'],
  ['Genecare', Gene, 'We understand that here there are important medical needs and we aim that patients can benefit from an adequate treatment regimen.'],
  ['Gynacare', Gyna, 'Our product range makes it possible to offer real improvements to doctors, hospitals and patients.'],
  ['Diabacare', Diab, 'Focusing on prescription drugs, we currently engage in this important area.'],
  ['Orthocare', Ortho, 'For this area and the corresponding indications, Gulati Pharma has provided a large range of therapeutic options.'],
  ['Pediatriccare', Pedia, 'We believe in taking care of the future of the world, and thus serving this domain as well.'],
  ['Oncocare', Cancer, 'Fighting battles is not easy and fighting Cancer is tougher but the fighters never give up. We are here to add on to such fighting spirit.'],
  ['Oracare', Ora, 'We know you love smiling and we care for it too.'],
  ['Imunocare', Imune, 'Even while living in the world of diseases, you can remain prevented from it. We are there by your side.'],
  ['Seracare', Sera, 'Providing services to monitor such diseases is at priority of Gulati Pharma.'] ,
  ['Vetacare', Vete, 'We care for your pets, who are children to you.']
];

export default class ServicesPage extends React.Component {
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
          <title>Services Page</title>
          <meta
            name="description"
            content="Services Page of Gulati Pharma application"
          />
        </Helmet>
        <h1 className="heading-page">Services we offer...</h1>
        <PaperProduct companyProducts={companyList}/>        
      </div>
    );
  }
}
