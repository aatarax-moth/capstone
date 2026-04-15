import './bookinghero.css';
import Container from './container.js';

function BookingHero() {
    return (
        <div className="bookinghero">
            <Container>
            <h1>Book a Table</h1>
            <p>Reserve your spot at Little Lemon and experience our delicious menu in a cozy atmosphere. Whether you're planning a romantic dinner, a family gathering, or a casual meal with friends, we look forward to welcoming you. Book your table today and let us take care of the rest!</p>
            </Container>
        </div>
    );
}

export default BookingHero;