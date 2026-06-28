import { useState } from 'react';
import './bookingform.css';
import Container from './container.js';

function BookingForm({availableTimes, dispatch}) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
    }

    return (
        <div className="bookingForm">
            <Container>
            <div className='wrap form-base'>
            <h1>Reserve A Table</h1>
            <form>
                <label htmlFor="guests">Number of Guests:</label>
                <select id="guests" name="guests" value={guests} onChange={(e) => setGuests(e.target.value)} required>
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
                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label htmlFor="guests">Occasion:</label>
                <select id="occasion" name="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                <option value="">Select...</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Date">Date</option>
                    <option value="Business">Business</option>
                    <option value="Other">Other</option>
                </select>
                <label htmlFor="date">Date:</label>
                <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={handleDateChange}
                required />
                <label htmlFor="time">Time:</label>
                <select
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                >
                    <option value="">Select...</option>
                    {availableTimes.map(t => (
                        <option key={t} value={t}>{t}</option>
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