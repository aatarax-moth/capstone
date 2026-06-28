import { useNavigate } from "react-router-dom";
import './confirmedbooking.css';

function ConfirmedBooking() {
    const navigate = useNavigate();
    return (
        <div className="confirmed-booking">
            <h2>Booking Confirmed!</h2>
            <button aria-label="On Click"  onClick={() => navigate("/")}>Back to Home</button>
        </div>
    );
}

export default ConfirmedBooking;