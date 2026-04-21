import { useState } from 'react';
import './bookingform.css';
import Container from './container.js';

function BookingForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const [availableTimes, setAvailableTimes] = useState([
        "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
    ]);

    return (
        <div className="bookingform">
            <Container>
            <div className='wrap'>
            <h1>Reserve A Table</h1>
            <form>
                <label for="guests">Number of Guests:</label>
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
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label for="guests">Occasion:</label>
                <select id="occasion" name="occasion" required>
                <option value="">Select...</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Date">Date</option>
                    <option value="Business">Business</option>
                    <option value="Other">Other</option>
                </select>
                <label for="date">Date:</label>
                <input type="date" id="date" name="date" required />
                <label for="time">Time:</label>
                <select id="time" name="time"  value={time} onChange={(e) => setTime(e.target.value)} required>
                <option value="">Select...</option>
                    {availableTimes.map((availableTime) => (
                        <option key={availableTime} value={availableTime}>
                        {availableTime}
                        </option>
                    ))}
                </select>
                <button className="submit-btn" type="submit" value="Reserve">Submit</button>
            </form>
            </div>
            </Container>
        </div>
    );
}

export default BookingForm;