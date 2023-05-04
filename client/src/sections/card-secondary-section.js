import './card-secondary-section.scss';
import CardSecondary from '../components/cardSecondary';
import Product from "../assets/product-full.png"
import Lock from "../assets/Lock.png"
import Texture from "../assets/home-texture.jpg"

const CardSecondarySection = () => {
    return (
        <div className="card-secondary-section">
            <div className="secondary-bg-img">
                <img src={Texture} alt="" style={{width: "95vw", opacity: "2%"}} />
            </div>
            <h4>Your personal assistant</h4>
            <h6>Waiting with just a few clicks</h6>
            <div className="card-product-container space-between flex">
                <div>
                    <CardSecondary 
                        title="Request Access"
                        text="We’re busy developing our digital collaboration application. Request access to be informed when we are complete."
                        icon={Lock}
                        />
                    <CardSecondary 
                        title="Sign-in"
                        text="You’ll receive an email from us with your private login link. You’ll then be able to complete your account."
                        icon={Lock}
                        />
                    <CardSecondary 
                        title="Connect your apps"
                        text="Follow our prompts to setup your digital
                        environments and begin understanding your
                        business like never before."
                        icon={Lock}
                        />
                </div>
                <div>
                    <img src={Product} alt="" style={{width: "800px", zIndex: "100"}} />
                </div>

            </div>
        </div>
    );
}

export default CardSecondarySection;