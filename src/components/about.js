import './about.css';
import Container from './container.js';

function About() {
  return (
    <div className="about">
      <Container>
      <div className="dual-grid">
        <div className="info">
        <h1>Who We Are</h1>
        <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We are passionate about creating delicious dishes using fresh, locally sourced ingredients, and we take pride in offering a menu that caters to a variety of tastes and dietary preferences. Our cozy and inviting atmosphere is the perfect place to gather with friends and family for a memorable dining experience. Whether you're stopping by for a quick lunch, a leisurely dinner, or a weekend brunch, we look forward to welcoming you to Little Lemon and sharing our love of great food and hospitality with you.</p>
        </div>
        <div className="about-image"></div>
      </div>
      </Container>
    </div>
  );
}

export default About;