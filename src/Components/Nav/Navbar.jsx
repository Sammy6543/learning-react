import "./navbar.css";
import logo from "../../Assets/logo.png";

const Navbar = () => {
    return (
        <>
            <div className="top-nav">
                <div className="left">
                <i class="fa-regular fa-clock"></i> Monday-Saturday, 8AM to 10PM
                </div>
                <div className="right">
                <i class="fa-solid fa-mobile-screen-button"></i> Call us now +91 77378 75786
                </div>
            </div>
            <div className="bottom-nav">
                <div className="nav-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="nav-links">
                    <ul>
                        <li><a href="#home" className="active">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#departments">Departments</a></li>
                        <li><a href="#doctors">Doctors</a></li>
                        <li><a href="#dropdown">Dropdown</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div className="btn">
                        <a href="">Make an Appointment</a>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Navbar;