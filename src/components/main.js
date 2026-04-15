import './main.css';
import HomePage from './homepage.js';
import BookingPage from './bookingpage.js';
import { Routes, Route } from 'react-router-dom';

function Main() {
    return (
            <main className="main">
                <Routes> 
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/booking" element={<BookingPage />}></Route>
                </Routes>
            </main>
    );
}

export default Main;