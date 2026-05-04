import './bookingpage.css';
import BookingForm from './bookingform.js';
import BookingHero from './bookinghero.js';

function BookingPage({availableTimes, setAvailableTimes}) {
    return (
        <div className="bookingpage">
            <BookingHero/>
            <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>
        </div>
    );
}

export default BookingPage;