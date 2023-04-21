import './hero.scss';
import Texture from "../assets/home-texture.jpg"
import Product from "../assets/product.png"
import Connect from "../assets/connect-lines.png"

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-bg-img">
                <img src={Texture} alt="" style={{width: "100vw", opacity: "0.5%"}} />
            </div>
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
                    <img src={Connect} alt="" style={{width: "600px", zIndex: "100"}} />
                </div>
                <div className="hero-product-img">
                    <img src={Product} alt="" style={{width: "800px", zIndex: "100"}} />
                </div>
            </div>
        </div>
    );
}

export default Hero;