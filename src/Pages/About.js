import React from 'react'
import Title from '../Components/Title'
import ImageSection from '../Components/ImageSection'

function About() {
    return (
        <div className='about-page'>
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'Skills'} span={'Skills'} />
        </div>
    )
}

export default About