import './main.css';
import { useReducer } from 'react';
import HomePage from './homepage.js';
import BookingPage from './bookingpage.js';
import { Routes, Route } from 'react-router-dom';

export const updateTimes = (state, action) => {
    // 1. Extract the date from the action payload
    const selectedDate = action.payload;
    // 2. Pass that specific date to the fetchData API
    const availableTimes = fetchData(selectedDate);
    // 3. Return the new state (the list of times)
    return availableTimes;
}


export const initializeTimes = () => {
    const availableTimes = fetchData(date);
    return availableTimes;
}

function Main() {

    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    return (
            <main className="main">
                <Routes> 
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/booking" element={<BookingPage 
                        availableTimes={availableTimes}
                        dispatch={dispatch}
                        />}>
                        </Route>
                </Routes>
            </main>
    );
}

export default Main;