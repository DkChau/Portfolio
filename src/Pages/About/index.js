import React from 'react'
import AboutHeroSection from '../../Components/AboutHeroSection'
import CardComponent from '../../Components/CardComponent'
import SkillsComponent from '../../Components/SkillsComponent'
import StorySection from '../../Components/StorySection'
import {
    AboutContainer,
    AboutWrapper
} from './AboutElements'
import BlackScreen from '../../Components/BlackScreen'

const About = () => {

    const transitionVariant = {
        hidden:{x:'-100vw'},
        show:{
            x:'0',
            transition:{
                duration:0.5,
                delayChildren:0.5
            }
        },
        exit:{
            x:'100vw',
            transition:{
                delay:0.3,
                type:'tween',
                duration:1,
                ease:'easeInOut'
            }
        
        }
    }

    return (
        <AboutContainer
            variants={transitionVariant}
            initial='hidden'
            animate='show'
            exit='exit'
        >
            <AboutHeroSection/>
            <AboutWrapper>
                <BlackScreen/>
                <CardComponent/>
                <StorySection/>
                <SkillsComponent/>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default About
