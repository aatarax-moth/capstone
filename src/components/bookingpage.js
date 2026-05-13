import './bookingpage.css';
import BookingForm from './bookingform.js';
import BookingHero from './bookinghero.js';

function BookingPage({availableTimes, dispatch, setAvailableTimes}) {
    return (
        <div className="bookingpage">
            <BookingHero/>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} setAvailableTimes={setAvailableTimes}/>
        </div>
    );
}

export default BookingPage;