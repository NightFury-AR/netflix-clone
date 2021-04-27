import React from 'react';
import './footer-style.scss';

function Footer() {
    return (
        <div className="footer">
            <div className="white__space"></div>
            <div className="footer__card">
                <h5>FAQ</h5>
                <h5>Invester Relations</h5>
                <h5>Privacy</h5>
                <h5>Speed Test</h5>
            </div>
            <div className="footer__card">
                <h5>Help Center</h5>
                <h5>Jobs</h5>
                <h5>Cookie Preferences</h5>
                <h5>Legacy Notice</h5>
            </div>
            <div className="footer__card">
                <h5>Account</h5>
                <h5>Ways to watch</h5>
                <h5>Corporate Informations</h5>
                <h5>Netflix Originals</h5>
            </div>
            <div className="footer__card">
                <h5>Media Center</h5>
                <h5>Terms of use</h5>
                <h5>Contact Us</h5>
            </div>
            <div className="white__space"></div>
        </div>
    )
}

export default Footer;
