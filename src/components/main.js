import './main.css';
import { useReducer } from 'react';
import HomePage from './homepage.js';
import BookingPage from './bookingpage.js';
import { Routes, Route } from 'react-router-dom';

export const updateTimes = (state, action) => {
    return [
        "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
    ];
}

export const initializeTimes = () => {
    return["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

function Main() {

    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    return (
            <main className="main">
                <Routes> 
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/booking" element={<BookingPage 
                        availableTimes={availableTimes} 
                        dispatch={dispatch}/>}>
                        </Route>
                </Routes>
            </main>
    );
}

export default Main;