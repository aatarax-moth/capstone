import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import BookingForm from './bookingform';

describe('BookingForm Component', () => {
    // 1. Define mock props to prevent "undefined" errors
    const mockProps = {
        availableTimes: ['17:00', '18:00', '19:00', '20:00'],
        dispatch: jest.fn(), // Mock the dispatch function for useReducer
        submitForm: jest.fn()
    };

    test('Render Booking Form Heading', () => {
        render(
            <MemoryRouter>
                <BookingForm {...mockProps} />
            </MemoryRouter>
        );

        // 2. Query for the heading (adjust text if yours says something else)
        const headingElement = screen.getByText(/Reserve A Table/i); 
        expect(headingElement).toBeInTheDocument();
    });

    test('renders all available times in the dropdown', () => {
        render(
            <MemoryRouter>
                <BookingForm {...mockProps} />
            </MemoryRouter>
        );

        // 3. Verify the options match our mock data
        const options = screen.getAllByRole('option');
        // Note: Length is mockTimes.length + 1 if you have a "Select..." placeholder
        expect(options.length).toBe(mockProps.availableTimes.length + 1);
    });
});