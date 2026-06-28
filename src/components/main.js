import './main.css';
import { useReducer } from 'react';
import HomePage from './homepage.js';
import BookingPage from './bookingpage.js';
import ConfirmedBooking from './confirmedbooking.js';
import { Routes, Route, useNavigate } from 'react-router-dom';

window.fetchAPI = function(date) {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

window.submitAPI = function(formData) {
    return true;
};

export const updateTimes = (state, action) => {
    // 1. Extract the date from the action payload
    const selectedDate = action.payload;
    // 2. Pass that specific date to the fetchData API
    const availableTimes = window.fetchAPI(selectedDate);
    // 3. Return the new state (the list of times)
    return availableTimes;
}


export const initializeTimes = () => {

    //create new date object to present current time
    const today = new Date();
    //pass new const to fetchData
    const availableTimes = window.fetchAPI(today);
    //return it
    return availableTimes;
}

function Main() {

    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    const navigate = useNavigate();

    const submitForm = (formData) => {
        const isSubmitted = window.submitAPI(formData);
        if (isSubmitted) {
            navigate("/confirmedbooking");
        }
    }

    return (
            <main className="main">
                <Routes> 
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/booking" element={<BookingPage 
                        availableTimes={availableTimes}
                        dispatch={dispatch}
                        submitForm={submitForm}
                        />
                    } />
                    <Route path="/confirmedbooking" element={<ConfirmedBooking />}></Route>
                </Routes>
            </main>
    );
}

export default Main;