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
                            <li><a href="">Solutions</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Case Studies</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-links-column">
                        <ul>
                            <li><a href="">Terms and Conditions</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Cookie Policy</a></li>
                            <li><a href="">F.A.Q.</a></li>
                        </ul>
                    </div>
                    <div className="footer-links-column">
                        <ul>
                            <li><a href="">Careers</a></li>
                            <li><a href="">Documentation</a></li>
                            <li><a href="">Support</a></li>
                            <li><a href="">Help</a></li>
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