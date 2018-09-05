import React from 'react';
//import Banner from './images/banner.jpg';
import { Link } from 'react-router-dom';
import { Carousel } from "react-responsive-carousel";
import Homeimage from './images/home_carrousel.gif';
import Productsimage from './images/product_carrousel.gif';
import Serviceimage from './images/services_carrousel.gif';
import './style.scss';

class CarouselComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <Carousel autoPlay showThumbs={false} infiniteLoop={true} interval={10000} >
                <div>
                    
                    <img src={Homeimage} />
                    <Link className="router-link button-left" to="/">Know More</Link> 
                    <Link className="router-link button-right" to="/">Home</Link>                    
                </div>
                <div>
                    <img src={Productsimage} />
                    <Link className="router-link button-left" to="/">Know More</Link> 
                    <Link className="router-link button-right" to="/products">Our Products</Link>                    
                </div>
                <div>
                    <img src={Serviceimage} />
                    <Link className="router-link button-left" to="/">Know More</Link> 
                    <Link className="router-link button-right" to="/services">Our Services</Link>                   
                </div>
                {/* <div>
                    <img src="assets/4.jpeg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="assets/5.jpeg" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="assets/6.jpeg" />
                    <p className="legend">Legend 6</p>
                </div> */}
            </Carousel>
        );
    }
}

export default CarouselComponent;
