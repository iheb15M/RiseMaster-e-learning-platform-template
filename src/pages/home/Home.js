import Navbar from '../../layouts/Navbar/Navbar';
import Hero from './sections/Hero';
import ExclusiveTraining from './sections/ExclusiveTraining';
import './Home.scss';


function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <ExclusiveTraining />
        </div>
    )
}

export default Home;