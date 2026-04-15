import './bookingpage.css';
import BookingForm from './bookingform.js';
import BookingHero from './bookinghero.js';

function BookingPage() {
    return (
        <div className="bookingpage">
            <BookingHero/>
            <BookingForm/>
        </div>
    );
}

export default BookingPage;