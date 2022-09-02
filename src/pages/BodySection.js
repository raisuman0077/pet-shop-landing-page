import flutterlogo from '../images/Flutterwave.png';
import payoneerlogo from '../images/Payoneer.png';
import paypallogo from '../images/PayPal.png';
import petsmartlogo from '../images/PetSmart.png';
import banner from '../images/Banner1.png'
const BodySection = () => {
    return ( 
        <section className="section-body">
            <div className="section-b1 d-flex">
                <div className='section-wb'>
                    <p className="pb-font px-1">.Let's help Treat your Pet Right.</p>
                    <p className="sb-font">Shop the best products for your pets from top brands in the industry</p>
                    <form className="input-form">
                        <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn shop-btn" type="submit">Shop now</button>
                    </form> 
                </div>
                <div className='side-image'>
                    <img className='pet-img' src={banner} alt="pet" />
                </div>
            </div>
            <div className="brands-logo">
                    <img src={flutterlogo} style={{width:'470px',height:"68px"}} alt="flutter-logo" />
                    <img src={petsmartlogo} style={{width:'376px',height:"70px"}} alt="payoneer-logo" />
                    <img src={paypallogo} style={{width:'333px',height:"85px"}} alt="paypal-logo" />
                    <img src={payoneerlogo} style={{width:'314px',height:"75px"}} alt="petsmart-logo" />
            </div>
        </section>
     );
}
 
export default BodySection;