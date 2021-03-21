import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
      
            <div className="footer-section">
            <div id='footer' className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="py-5">
                    <a href="#footer" className="text-white logo-name h2">Fast Rider</a>
                  </div>
                <div className="text-white">
                  <p className="pt-2">Uttara, Sector-13, Dhaka-1230</p>
                  <p>Official: <a href="#footer" className="text-white">ahossain38900@gmail.com</a></p>
                  <p>Helpline : 01957930032 (Available : 09:00am to 11:00pm)</p>
                
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                  <div className="text-white pt-5 mt-5 ">
                      <ul>
                          <li>
                            <a href="#footer" className="text-white ">About Us</a>
                          </li>
                        <li>
                            <a href="#footer" className="text-white">Success</a>
                        </li>
                        <li>
                            <a href="#footer" className="text-white">Terms and Condition</a>
                        </li>
                        <li>
                            <a href="#footer" className="text-white">Privacy Policy</a>
                        </li>
                      </ul>                   
                  </div>
              </div>
            
            </div>
            <footer className="text-white text-center py-3 mt-5">
              <p>All Reserved & Copyright &copy; By Alamgir Hossain</p>
            </footer>
          </div>
    
        </div>
    );
};

export default Footer;