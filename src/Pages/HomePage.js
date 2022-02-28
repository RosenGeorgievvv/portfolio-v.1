import React from 'react'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import "../styles/typography.scss"

function HomePage() {
    return (
        <div className='homepage'>
            <header className='hero'>
                <h1 className='hero-text'>
                    Hi, I am
                    <span> Rosen Georgiev</span>
                </h1>
                <p className='h-sub-text'>
                    Lorem ipsum dolor sit amet.
                </p>
                <div className='icons'>
                    <Link className='icon-holder' to="">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </Link>
                    <Link className='icon-holder' to="">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link className='icon-holder' to="">
                        <FontAwesomeIcon icon={faLinkedin} className="icon lkin" />
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;