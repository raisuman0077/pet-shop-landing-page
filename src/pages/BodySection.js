import React, {useState} from 'react';
import flutterlogo from '../images/Flutterwave.png';
import payoneerlogo from '../images/Payoneer.png';
import paypallogo from '../images/PayPal.png';
import petsmartlogo from '../images/PetSmart.png';
import banner from '../images/Banner1.png';
import offerBanner from '../images/offerbanner.png';
import { Rating } from 'react-simple-star-rating';

const BodySection = ({data}) => {
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
                {data.map((d,id)=>(
                    <div className="product-detail" key={id}>
                    <div className="card mx-5">
                    <img src={d.img} className="card-img py-4 px-4" alt="product" />
                    <div className="card-body">
                        <h5 className="card-title">{d.title}</h5>
                        <p className="card-text">N{d.price}</p>
                        <Rating  className='rate-star'
                            onClick={handleRating} 
                            ratingValue={rating} 
                            initialValue={d.star}
                            allowHalfIcon 
                            size={30} />
                        </div>
                    </div>
                </div>                
    ))}        
            </div>
            <div className='fproduct-btn my-2'>
                <button className='btn morepdt-btn my-4'>see more</button>
            </div>
            <div className='offer-section'>
                    <img src={offerBanner} alt="offer-banner" style={{height:'300px', width:"100%"}} />
            </div>
            <h3 className='b2-text py-5'>Latest Products</h3>
            <div className="products mx-5">
            {data.map((d,id)=>(
                <div className="product-detail" key={id}>
                <div className="card mx-5">
                <img src={d.img} className="card-img py-4 px-4" alt="product" />
                <div className="card-body">
                    <h5 className="card-title">{d.title}</h5>
                    <p className="card-text">N{d.price}</p>
                    <Rating  className='rate-star'
                        onClick={handleRating} 
                        ratingValue={rating} 
                        initialValue={d.star}
                        allowHalfIcon 
                        size={30} />
                    </div>
                </div>
            </div>                
))}        
        </div>
        <div className='pproduct-btn my-2'>
                <button className='btn morepdt-btn my-4'>see more</button>
            </div>
        </section>
     );
}
 
export default BodySection;