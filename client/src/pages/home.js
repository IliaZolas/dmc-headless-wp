import './home.scss';
import Hero from '../components/hero';
import CardSection from '../sections/card-section';
import CardSecondarySection from '../sections/card-secondary-section';

const Home = () => {
    return (
        <div className="">
            <Hero />
            <CardSection />
            <CardSecondarySection />
        </div>
    );
}

export default Home;