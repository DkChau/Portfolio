import React, {useEffect} from 'react'
import AboutHeroSection from '../../Components/AboutHeroSection'
import CardComponent from '../../Components/CardComponent'
import SkillsComponent from '../../Components/SkillsComponent'
import AboutTextSection from '../../Components/AboutTextSection'
import {
    AboutContainer,
    AboutWrapper
} from './AboutElements'
import BlackScreen from '../../Components/BlackScreen'
import {DataOne, DataTwo} from './Data'

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

    useEffect(()=>{ //Temp fix since you shouldnt be able to go to same page anyways
        window.scrollTo(0,0)
    },[])
    
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
                <AboutTextSection data={DataOne}/>
                <AboutTextSection data={DataTwo}/>
                <SkillsComponent/>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default About
