import footericon from '../icon/Vector.png'

const Footer = () => {
    return ( 
        <div className="footer-section">
            <div className="top-section">
                <img className="fbrand-icon mx-3" href="true" src={footericon} alt="brand-logo-icon" />
                <a className="fbrand-logo" href="true"><span className="aftxt-logo">PET</span>SHOP</a>
            </div>
            <div className="mid-section">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
            <div className="end-section">
                end
            </div>
        </div>
     );
}
 
export default Footer;