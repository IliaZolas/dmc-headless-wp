import './hero.scss';
import Product from "../assets/product.png"
import Connect from "../assets/connect-lines.png"

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-content flex">
                <div className="hero-text">
                    <h1>Digital Collaboration,</h1>
                    <h1>Experience Success</h1>
                    <h2>Successful digital marketing comes from the collaboration of your digital real estate</h2>
                    <div className='hero-btn-position'>
                        <a href='/#' className="btn-primary">Connect Your Services</a>
                    </div>
                </div>
                <div className="hero-connect-img">
                    <img src={Connect} alt="" style={{width: "500px"}} />
                </div>
                <div className="hero-product-img">
                    <img src={Product} alt="" style={{width: "700px", zIndex: "100"}} />
                </div>
            </div>
        </div>
    );
}

export default Hero;