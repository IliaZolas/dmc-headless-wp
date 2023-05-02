import './timeline.scss';
import Card from './card';
import Track from './track';
import Alarm from '../assets/Alarm.png'
import Atom from '../assets/Atom.png'
import Robot from '../assets/Robot.png'
import Shield from '../assets/ShieldCheckered.png'

const Timeline = () => {
    return (
        <div className="flex">
            <div>
                <Card 
                    title="card 1"
                    text="this is text"
                    icon={Atom}/>
                <Card 
                    title="card 2"
                    text="this is text"
                    icon={Alarm}/>
            </div>            
            <Track />
            <div>
                <Card 
                    title="card 3"
                    text="this is text"
                    icon={Robot}/>
                <Card 
                    title="card 4"
                    text="this is text"
                    icon={Shield}/>
            </div>
        </div>
    );
}

export default Timeline;