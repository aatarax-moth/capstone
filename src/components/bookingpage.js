import './bookingpage.css';
import BookingForm from './bookingform.js';
import BookingHero from './bookinghero.js';

function BookingPage({availableTimes, dispatch, setAvailableTimes}) {

    async function submitForm(formData) {
        try {
            const response = await submitAPI(formData);
            console.log("Submitted Data Successful:", response);
            return response;
        } catch (error) {
            console.error("Error submitting form:", error);
            throw error;
        }
    }
    
    return (
        <div className="bookingpage">
            <BookingHero/>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} setAvailableTimes={setAvailableTimes} onSubmit={submitForm}/>
        </div>
    );
}

export default BookingPage;