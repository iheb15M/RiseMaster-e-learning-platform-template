import Navbar from '../../layouts/Navbar/Navbar';
import Hero from './sections/Hero';
import ExclusiveTraining from './sections/ExclusiveTraining';
import LiveSession from './sections/LiveSession';
import './Home.scss';


function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <ExclusiveTraining />
            <LiveSession />
        </div>
    )
}

export default Home;