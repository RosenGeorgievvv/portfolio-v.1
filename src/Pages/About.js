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
            <div className='skillsContainer'>
                <SkillsSection skill={'Javascript'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'HTML'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'CSS'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'ReactJS'} progress={'85%'} width={'85%'} />
                <SkillsSection skill={'Bootstrap'} progress={'65%'} width={'65%'} />
                <SkillsSection skill={'MUI'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'MongoDB'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Firebase'} progress={'55%'} width={'55%'} />
            </div>
        </div>
    )
}

export default About