import './card-section.scss';
import Timeline from '../components/timeline';

const CardSection = () => {
    return (
        <div className="card-section">
            <h4>Your Conversation</h4>
            <h6>Starts here</h6>
            <div className='timeline-container'>
                <Timeline />
            </div>
        </div>
    );
}

export default CardSection;