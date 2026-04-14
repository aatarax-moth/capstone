import './footer.css';
import Container from './container.js';

function Footer() {
    return (
        <footer className="footer">
            <Container>
            <div className="col-2">
                <div>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#reservations">Reservations</a></li>
                        <li><a href="#order">Order Online</a></li>
                        <li><a href="#login">Login</a></li>
                    </ul>
                </div>
                <div>
                    <img src="/Logo.svg" alt="Logo" className="logo"/>
                </div>
            </div>
            </Container>
        </footer>
    );

}

export default Footer;