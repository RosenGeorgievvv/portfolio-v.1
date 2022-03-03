import React from 'react'
import Title from '../Components/Title'
import ImageSection from '../Components/ImageSection'
import SkillsSection from '../Components/SkillsSection'

function About() {
    return (
        <div className='about-page'>
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'Skills'} span={'Skills'} />
            <SkillsSection skill={'Javascript'} progress={'70%'} />
        </div>
    )
}

export default About