import './bookingform.css';
import Container from './container.js';

function BookingForm() {
    return (
        <div className="bookingform">
            <Container>
            <div className='wrap'>
            <h1>Reserve A Table</h1>
            <form>
                <label htmlFor="guests">Number of Guests:</label>
                <select id="guests" name="guests" required>
                    <option value="">Select...</option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="7">7 Guests</option>
                    <option value="8">8 Guests</option>
                    <option value="9">9 Guests</option>
                    <option value="10">10 Guests</option>
                </select>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" required />
                <label htmlFor="time">Time:</label>
                <input type="time" id="time" name="time" required />
                <button className="submit-btn" type="submit">Submit</button>
            </form>
            </div>
            </Container>
        </div>
    );
}

export default BookingForm;