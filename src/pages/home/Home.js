import Navbar from '../../layouts/Navbar/Navbar';
import Hero from './sections/Hero';
import ExclusiveTraining from './sections/ExclusiveTraining';
import LiveSession from './sections/LiveSession';
import TrainingCategories from './sections/TrainingCategories';

import './Home.scss';


function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <ExclusiveTraining />
            <LiveSession />
            <TrainingCategories />
        </div>
    )
}

export default Home;