import Hero from './components/hero.js';
import Nav from './components/nav.js';
import Menu from './components/menu.js';
import Testimonials from './components/testimonials.js';
import About from './components/about.js';
import Footer from './components/footer.js';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <Nav/>
        <Hero/>
        <Menu/>
        <Testimonials/>
        <About/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
