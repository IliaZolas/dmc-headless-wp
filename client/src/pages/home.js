import './home.scss';
import Hero from '../components/hero';
import CardSection from '../sections/card-section';
import CardSecondarySection from '../sections/card-secondary-section';
import WaitingListSection from '../sections/waiting-list-section';

const Home = () => {
    return (
        <div className="">
            <Hero />
            <CardSection />
            <CardSecondarySection />
            <WaitingListSection />
        </div>
    );
}

export default Home;