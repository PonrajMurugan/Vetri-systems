import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCheckCircle, faCode, faBullhorn, faHandsHelping, faLightbulb, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faAppleAlt, faFileInvoiceDollar, faTaxi, faEnvelope, faTools, faTv } from '@fortawesome/free-solid-svg-icons';
const AboutPage = () => {
    return (
        <div data-aos="fade-right" className="about-container" style={{marginTop:"150px"}}>
        <h1 className="about-title">About Us</h1>
        
        <div className="about-content">
            <div className="about-text">
                <p> <i class="bi bi-send-arrow-up ab"></i>
                    Welcome to <span className="highlight">Vetri IT Systems</span>, your trusted partner in innovative solutions. 
                    We specialize in developing products and services that cater to our clients' needs, ensuring quality and excellence in every project.
                </p>
                <p> <i class="bi bi-send-arrow-up ab"></i>
                    Established with a vision to transform the IT landscape, our company is dedicated to providing top-notch software development, web applications, and digital marketing solutions.
                </p>
                <p> <i class="bi bi-send-arrow-up ab"></i>
                    Our mission is to empower businesses to thrive in a digital world by delivering customized solutions that drive growth and efficiency.
                </p>
                <p> <i class="bi bi-send-arrow-up ab"></i>
                    At Vetri IT Systems, we believe in continuous improvement, creativity, and fostering long-lasting relationships with our clients.
                </p>
            </div>
            <div className="about-images">
                <img 
                    src="https://pollysys.com/srcfxonl/uploads/2023/01/IT-Support-Services-Detailed-IT-Services.jpg" 
                    alt="Service 1" 
                    className="about-image" 
                />
                <img 
                    src="https://www.techopedia.com/wp-content/uploads/2023/11/IT-Services.jpg" 
                    alt="Service 2" 
                    className="about-image" 
                />
                <img 
                    src="https://i.ytimg.com/vi/jm16cb--xJY/maxresdefault.jpg" 
                    alt="Service 3" 
                    className="about-image" 
                />
            </div>
        </div>

        <div data-aos="fade-left" className="values-section">
            <h2 className="values-title">Our Values</h2>
            <ul className="values-list">
                <li><FontAwesomeIcon icon={faCheckCircle} className="icons"/><span style={{color:"navy" , paddingRight:"10px" , fontWeight:"700"}}>Integrity: </span>  We uphold the highest standards of integrity in all our actions.</li> 
                <li><FontAwesomeIcon icon={faLightbulb} className="icons"/><span style={{color:"navy" , paddingRight:"10px" , fontWeight:"700"}}> Innovation: </span> We strive for continuous improvement and innovation in our services.</li>
                <li><FontAwesomeIcon icon={faHandsHelping} className="icons"/><span style={{color:"navy" , paddingRight:"10px" , fontWeight:"700"}}> Customer Commitment: </span> We are committed to providing exceptional services and building long-term relationships.</li>
                <li><FontAwesomeIcon icon={faCode} className="icons"/> <span style={{color:"navy" , paddingRight:"10px" , fontWeight:"700"}}>Quality:</span> We deliver quality in every product and service we offer.</li>
            </ul>
        </div>
            
        </div>
    );
};

export default AboutPage;