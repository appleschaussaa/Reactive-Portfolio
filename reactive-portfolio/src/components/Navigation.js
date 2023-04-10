import React  from "react";

function Navigation({ currentPage, pageChangeHandler }) {

    return (
        <ul className="nav-tab justify-content-end">
            <li className="nav-item">
                <span
                href="#Aboutme"
                className={currentPage === 'Aboutme' ? 'nav-link active' : "nav-link"}
                onClick={() => pageChangeHandler('Aboutme')}>
                About Me
                </span>
            </li>
            <li className="nav-item">
                <span
                href="#Portfolio"
                className={currentPage === 'Portfolio' ? 'nav-link active' : "nav-link"}
                onClick={() => pageChangeHandler('Portfolio')}>
                Projects
                </span>
            </li>
            <li className="nav-item">
                <span
                href="#Contact" 
                className={currentPage === 'Contact' ? 'nav-link active' : "nav-link"}
                onClick={() => pageChangeHandler('Contact')}>
                Contact
                </span>
            </li>
            <li className="nav-item">
                <span
                href="#Resume"
                className={currentPage === 'Resume' ? 'nav-link active' : "nav-link"}
                onClick={() => pageChangeHandler('Resume')}>
                Resume
                </span>
            </li>
        </ul>
    );
}

export default Navigation;
