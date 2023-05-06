import './card-section.scss';
import Timeline from '../components/timeline';
import Flag from "../assets/Flag.png"
import Crown from "../assets/CrownSimple.png"

const CardSection = () => {
    return (
        <div className="card-section">
            <h4>Your Conversation</h4>
            <h6>Starts here</h6>
            <img src={Flag} alt="" style={{ paddingBottom:"40px"}} />
            <div className='timeline-container'>
                <Timeline />
            </div>
            <img src={Crown} alt="" style={{ paddingTop:"40px"}} />
        </div>
    );
}

export default CardSection;