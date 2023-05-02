import './card-section.scss';
import Timeline from '../components/timeline';

const CardSection = () => {
    return (
        <div className="card-section">
            <div className='timeline-container'>
                <Timeline />
            </div>
        </div>
    );
}

export default CardSection;