import Navbar from '../../layouts/Navbar/Navbar';
import Hero from './sections/Hero';
import ExclusiveTraining from './sections/ExclusiveTraining';
import LiveSession from './sections/LiveSession';
import TrainingCategories from './sections/TrainingCategories';
import ClientsFeedback from './sections/ClientsFeedback';
import NewsLetter from '../../components/Newsletter';

import './Home.scss';


function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <ExclusiveTraining />
            <LiveSession />
            <TrainingCategories />
            <NewsLetter />
            <ClientsFeedback />
        </div>
    )
}

export default Home;