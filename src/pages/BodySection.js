import React, {useState} from 'react';
import flutterlogo from '../images/Flutterwave.png';
import payoneerlogo from '../images/Payoneer.png';
import paypallogo from '../images/PayPal.png';
import petsmartlogo from '../images/PetSmart.png';
import banner from '../images/Banner1.png'
import product1 from '../products/product1.png'
import product2 from '../products/product2.png'
import product3 from '../products/product3.png'
import product4 from '../products/product4.png'
import product5 from '../products/product5.png'
import product6 from '../products/product6.png'

import { Rating } from 'react-simple-star-rating';
const BodySection = () => {
    const [rating, setRating] = useState(0);
    const handleRating = (rate) => {
        setRating(rate);
    }
    return ( 
        <section className="section-body">
            <div className="section-b1 d-flex">
                <div className='section-wb'>
                    <p className="pb-font px-1">.Let's help Treat your Pet Right.</p>
                    <p className="sb-font">Shop the best products for your pets from top brands in the industry</p>
                    <form className="input-form">
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn shop-btn" type="submit">Shop now</button>
                    </form> 
                </div>
                <div className='side-image' style={{backgroundImage:`url(${banner})`}} />
            </div>
            <div className="brands-logo">
                    <img src={flutterlogo} style={{width:'470px',height:"68px"}} alt="flutter-logo" />
                    <img src={petsmartlogo} style={{width:'376px',height:"70px"}} alt="payoneer-logo" />
                    <img src={paypallogo} style={{width:'333px',height:"85px"}} alt="paypal-logo" />
                    <img src={payoneerlogo} style={{width:'314px',height:"75px"}} alt="petsmart-logo" />
            </div>
            <h3 className='b2-text py-5'>Featured Products</h3>
            <div className="products mx-5">
                <div className="product-detail">
                    <div className="card mx-5">
                    <img src={product1} className="card-img py-4 px-4" alt="product" />
                    <div className="card-body">
                        <h5 className="card-title">Dog Rolling Stone</h5>
                        <p className="card-text">N649.99</p>
                        <Rating  className='rate-star'
                            onClick={handleRating} 
                            ratingValue={rating} 
                            initialValue={4}
                            allowHalfIcon 
                            size={30} />
                        </div>
                    </div>
                </div>
                <div className="product-detail mx-5 my-2">
                    <div className="card">
                        <img src={product2} className="card-img py-4 px-4" alt="product" />                    
                    <div className="card-body">
                        <h5 className="card-title">Portable Water Bottle</h5>
                        <p className="card-text">N499.89</p>
                        <Rating className='rate-star'
                            onClick={handleRating} 
                            ratingValue={rating} 
                            initialValue={4}
                            allowHalfIcon 
                            size={30} />
                    </div>
                    </div>
                </div>
                <div className="product-detail mx-5 my-2">
                    <div className="card">
                        <img src={product3} className="card-img py-4 px-4" alt="product" />
                    <div className="card-body">
                        <h5 className="card-title">Dog Colling Mat</h5>
                        <p className="card-text">N649.99</p>
                        <Rating className='rate-star'
                            onClick={handleRating} 
                            ratingValue={rating} 
                            initialValue={4}
                            allowHalfIcon 
                            size={30} />
                    </div>
                    </div>
                </div>
                <div className="product-details mx-5 my-2">
                    <div className="card">
                        <img src={product4} className="card-img py-4 px-4" alt="product" />
                    <div className="card-body">
                    <h5 className="card-title">Portable Water Bottle</h5>
                    <p className="card-text">N499.89</p>
                        <Rating className='rate-star'
                            onClick={handleRating} 
                            ratingValue={rating} 
                            initialValue={4}
                            allowHalfIcon 
                            size={30} />
                    </div>
                    </div>
                </div>
                <div className="product-detail mx-5 my-2">
                    <div className="card">
                        <img src={product5} className="card-img py-4 px-4" alt="product" />                    
                    <div className="card-body">
                        <h5 className="card-title">Portable Water Bottle</h5>
                        <p className="card-text">N499.89</p>
                        <Rating className='rate-star'
                            onClick={handleRating} 
                            ratingValue={rating} 
                            initialValue={4}
                            allowHalfIcon 
                            size={30} />
                    </div>
                    </div>
                </div>
                <div className="product-detail mx-5 my-2">
                    <div className="card">
                        <img src={product6} className="card-img py-4 px-4" alt="product" />
                    <div className="card-body">
                    <h5 className="card-title">Dog Colling Mat</h5>
                    <p className="card-text">N649.99</p>
                        <Rating className='rate-star'
                            onClick={handleRating} 
                            ratingValue={rating} 
                            initialValue={4}
                            allowHalfIcon 
                            size={30} />
                    </div>
                    </div>
                </div>         
            </div>
            <div className='product-btn'>
                <button className='btn morepdt-btn'>see more</button>
                </div>
        </section>
     );
}
 
export default BodySection;