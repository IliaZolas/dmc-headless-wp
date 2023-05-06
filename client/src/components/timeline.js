import './timeline.scss';
import Card from './card';
import Track from './track';
import Alarm from '../assets/Alarm.png'
import Atom from '../assets/Atom.png'
import Robot from '../assets/Robot.png'
import Shield from '../assets/ShieldCheckered.png'

const Timeline = () => {
    return (
        <div className="timeline-container flex space-around">
            <div>
                <Card 
                    title="Integration for all platforms"
                    text="Connect all of your apps in one place using simple plug and play processes designed to keep your work as simple as possible."
                    icon={Atom}/>
                <Card 
                    title="Working round the clock"
                    text="DMC handles the work of an entire department, allowing you to focus on hiring diverse specialists on matters that web tech cannot."
                    icon={Alarm}/>
            </div> 
            <div className="track-container">
                <Track />
            </div>           
            <div>
                <Card 
                    title="AI generated reporting"
                    text="No need to perform sentiment analysis or create new spreadsheets of your data. Our AI systems report on the status of your presence and what to do. "
                    icon={Robot}/>
                <Card 
                    title="Security and Threat Detection"
                    text="Secure data storage and pre-emptive threat detection, providing you with a safe environment and support for incoming challenges."
                    icon={Shield}/>
            </div>
        </div>
    );
}

export default Timeline;