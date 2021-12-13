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
import Footer from '../../Components/Footer'

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
                type:'tween',
                delay:0.5,
                duration:0.5,
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
            <Footer/>
        </AboutContainer>
    )
}

export default About
