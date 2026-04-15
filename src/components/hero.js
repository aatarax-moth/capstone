import './hero.css';
import Container from './container.js';
import Button from './button.js';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="hero">
      <Container>
      <div className="dual-grid">
        <div className="hero-image"></div>
        <div className="hero-info">
        <h1>Little Lemon</h1>
        <p>Welcome to Little Lemon, your new favorite neighborhood bistro! We serve simple, delicious food made with the freshest ingredients, sourced locally whenever possible. Our menu features a variety of dishes designed to cater to every palate, from comforting classics to innovative seasonal specials. Whether you’re stopping by for a quick lunch, a cozy dinner, or a relaxed weekend brunch, our warm and inviting atmosphere is the perfect backdrop for enjoying great food with friends and family. Come and experience the taste of Little Lemon, where every meal is crafted with love and care!</p>
        <Link to="/booking">
        <Button text="Reserve a Table"/>
        </Link>
        </div>
      </div>
      </Container>
    </div>
  );
}

export default Hero;