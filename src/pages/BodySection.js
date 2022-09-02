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
            <div className="row">
                <div className="col">
                    <div className="card h-100">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a short card.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default BodySection;