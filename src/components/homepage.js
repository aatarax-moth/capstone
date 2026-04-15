import './homepage.css';
import Hero from './hero.js';
import Testimonials from './testimonials.js';
import About from './about.js';

function HomePage() {
    return (
        <div className="homepage">
            <Hero/>
            <Testimonials/>
            <About/>
        </div>
    );
}

export default HomePage;