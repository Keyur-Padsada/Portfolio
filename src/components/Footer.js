import "./FooterStyles.css"

import React from 'react'
import { FaHome , FaPhone , FaMailBulk, FaFacebook ,FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    
                    <div>
                        <p> 82/1 Diamond park Nikol</p>
                        <p>Ahmedabad</p>
                    </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} /> 9664882513</h4>
                    
                   </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />patelkeyur6863.kp@gmail.com </h4>
                    
                   </div>
                </div>
                <div className="right">
                    <h4>About ME</h4>
                    <p>This is me Keyur Padsada , 
                        Currently I am looking for a Intenrship and Job As Well , 
                        Is any opportunity in your Company contact Me</p>
                        <div className="social">
                      <a href="hhttps://www.facebook.com/patel.keyur.18847?mibextid=ZbWKwL" target="blank"><FaFacebook size={20} style={{ color: "#fff", marginRight: "2rem" }} /></a>      
                      <a href="https://www.instagram.com/keyur_6863" target="blank"> <FaInstagram size={20} style={{ color: "#fff", marginRight: "2rem" }} /> </a>
                        <a href="https://www.linkedin.com/in/keyur-padsada-08392a213"  target="blank"><FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }} />  </a>
                        <a href="https://www.linkedin.com/in/keyur-padsada-08392a213"  target="blank"><FaGithub size={20} style={{ color: "#fff", marginRight: "2rem" }} />  </a>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
