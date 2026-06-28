import { useNavigate } from "react-router-dom";

function ConfirmedBooking() {
    const navigate = useNavigate();
    return (
        <div className="confirmed-booking">
            <h2>Booking Confirmed!</h2>
            <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
    );
}

export default ConfirmedBooking;