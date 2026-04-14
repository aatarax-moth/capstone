import './nav.css';
import Container from './container.js';

function Nav() {
    return (
        <div className="wrap">
            <Container>
                <div className="nav">
                    <div>
                    <img src="/Logo.svg" alt="Logo" className="logo"/>
                    </div>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#reservations">Reservations</a></li>
                        <li><a href="#order">Order Online</a></li>
                        <li><a href="#login">Login</a></li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default Nav;