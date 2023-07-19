import "./footer.scss"

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-container">
                <div className="flex space-around">
                    <div>
                        <h1>DMC</h1>
                    </div>
                    <div className="footer-links-column">
                        <ul>
                            <li><a href="/#" alt="preview">Solutions</a></li>
                            <li><a href="/#" alt="preview">Services</a></li>
                            <li><a href="/#" alt="preview">Case Studies</a></li>
                            <li><a href="/#" alt="preview">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-links-column">
                        <ul>
                            <li><a href="/#" alt="preview">Terms and Conditions</a></li>
                            <li><a href="/#" alt="preview">Privacy Policy</a></li>
                            <li><a href="/#" alt="preview">Cookie Policy</a></li>
                            <li><a href="/#" alt="preview">F.A.Q.</a></li>
                        </ul>
                    </div>
                    <div className="footer-links-column">
                        <ul>
                            <li><a href="/#" alt="preview">Careers</a></li>
                            <li><a href="/#" alt="preview">Documentation</a></li>
                            <li><a href="/#" alt="preview">Support</a></li>
                            <li><a href="/#" alt="preview">Help</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-disclaimer">
                    <p>The Digital Marketing Collaboration 2023</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;