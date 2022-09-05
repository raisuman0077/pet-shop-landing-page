import React, {useEffect} from 'react';
import footericon from '../icon/Vector.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    useEffect(()=>{
        const ifameData=document.getElementById("iframeId")
        const lat=27.698597;
        const lon=85.300383;
        ifameData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    })
    return ( 
        <footer>
            <div className="footer-section py-2">
                <div className="top-section my-5">
                    <img className="fbrand-icon mx-3" href="true" src={footericon} alt="brand-logo-icon" />
                    <a className="fbrand-logo mr-3" href="true"><span className="aftxt-logo">PET</span>SHOP</a>
                </div>
                <div className="mid-section">
                    <div className='mid-item pr-4'>
                        <h2>About</h2>
                        <p>Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo. Vestibulum sit amet ipsum vitae mauris mattis vulputate lacinia nec neque. Aenean</p>
                    </div>
                    <div className='mid-item mb-2'>
                        <h2>Locate us</h2>
                        <iframe id="iframeId" title='map' height="300px" width="90%" />
                        </div>
                    <div className='mid-item pr-1'>
                        <h2>Quick Links</h2>
                        <ul className='link-items'>
                            <li><a href='true' className='link-item'>Home</a></li>
                            <li><a href='true' className='link-item'>Featured</a></li>
                            <li><a href='true' className='link-item'>About</a></li>
                            <li><a href='true' className='link-item'>Blogs</a></li>
                            <li><a href='true' className='link-item'>Contact us</a></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div className="end-section mt-2 mx-3 d-flex justify-content-between">
                <p>Copyright - 2022-PetShop- All rights reserved</p>
                <ul className='d-flex'>
                    <li><a className='media-icon mr-4' href="true"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a className='media-icon ' href="true"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a className='media-icon mx-3' href="true"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                </ul>
            </div>
        </footer>
     );
}
 
export default Footer;