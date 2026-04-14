import './testimonials.css';
import Container from './container.js';

function Testimonials() {
  return (
    <div className="testimonials">
    <Container>
      <h2>What Our Customers Say</h2>
      <p>Don't just take our word for it - hear from our satisfied customers!</p>
      <div className="four-grid">
        <div className="testimonial">
        <div className="rate"></div>
          <p>"The food here is absolutely amazing! I can't wait to come back."</p>
          <p>- Jane Doe</p>
        </div>
        <div className="testimonial">
        <div className="rate"></div>
          <p>"Best restaurant in town! The service is outstanding."</p>
          <p>- John Smith</p>
        </div>
        <div className="testimonial">
        <div className="rate"></div>
          <p>"I love the atmosphere and the delicious food. Highly recommend!"</p>
          <p>- Emily Johnson</p>
        </div>
        <div className="testimonial">
        <div className="rate"></div>
          <p>"An incredible dining experience from start to finish."</p>
          <p>- Michael Brown</p>
        </div>
      </div>
    </Container>
    </div>
  );
}

export default Testimonials;