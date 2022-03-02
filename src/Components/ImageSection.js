import React from 'react'
import one from "../img/one.jpg"

function ImageSection() {
    return (
        <div className='ImageSection'>
            <div className='img'>
                <img src={one} alt="" />
            </div>
            <div className='about-info'>
                <p className='about-text'>
                    Front End Developer adept at contributing to highly collaborative work environment and finding solutions.
                    Proven experience developing consumer-focused websites using HTML, CSS and Javascript.
                </p>
                <div className='about-details'>
                    <div className='left-section'>
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Address</p>
                        <p>Languages</p>
                    </div>
                    <div className='right-section'>
                        <p>: Rosen Georgiev</p>
                        <p>: 25</p>
                        <p>: Pirin street 5, Sofiya</p>
                        <p>: Bulgarian, English</p>
                    </div>
                </div>
                <button className='btn'>Download CV</button>
            </div>
        </div>
    )
}

export default ImageSection