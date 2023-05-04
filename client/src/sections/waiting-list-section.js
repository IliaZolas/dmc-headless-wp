import './waiting-list-section.scss';
import Code from "../assets/Code.png"

const WaitingListSection = () => {
    return (
        <div className="waiting-list-section">
            <div className="waiting-list-container">
                <div className="waiting-list-card flex space-around">
                    <div className="waiting-list-icon">
                        <img src={Code} alt="" style={{width: "30px"}}/>
                    </div>
                    <div>
                        <h7>Currently in Development</h7>
                        <p>We’re building this suite because we are  passionate about organizing digital information and presenting it in transformative ways. </p>
                    </div>
                </div>
                <div className="waiting-list-content">
                    <h1>Sign-up to our waiting list</h1>
                    <p>You’ll be kept up to date with our development as well asreceive access to our discord channel for community updates, chats and releases.</p>
                    <div className='hero-btn-position'>
                        <a href='/#' className="btn-primary">Connect Your Services</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WaitingListSection;