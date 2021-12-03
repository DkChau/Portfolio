import React from 'react'
import AboutHeroSection from '../../Components/AboutHeroSection'
import NavBar from '../../Components/NavBar'
import {
    AboutContainer
} from './AboutElements'

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
            <NavBar/>
            <AboutHeroSection/>
        </AboutContainer>
    )
}

export default About
