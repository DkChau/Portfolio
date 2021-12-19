import React, {useEffect} from 'react'
import AboutHeroSection from '../../Components/AboutHeroSection'
import CardComponent from '../../Components/CardComponent'
import SkillsComponent from '../../Components/SkillsComponent'
import AboutTextSection from '../../Components/AboutTextSection'
import {
    AboutContainer,
    AboutWrapper,
    ScreenWrapper
} from './AboutElements'
import BlackScreen from '../../Components/BlackScreen'
import {DataOne, DataTwo} from './Data'
import Footer from '../../Components/Footer'
import ExperienceSection from '../../Components/ExperienceSection'
import BannerSection from '../../Components/BannerSection'
import {bannerData} from './BannerData'

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
    
    const wrapperVariant = {
        exit:{
            opacity:0,
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
            <ScreenWrapper>
                <BlackScreen/>
                <AboutWrapper variants={wrapperVariant}>
                    {/* <CardComponent/> */}
                    {/* <AboutTextSection data={DataOne}/>                */}
                    <ExperienceSection/>
                    {/* <AboutTextSection data={DataTwo}/> */}
                    {/* <SkillsComponent/> Done */}
                    <BannerSection data={bannerData}/>
                </AboutWrapper>
            </ScreenWrapper>
            <Footer/>
        </AboutContainer>
    )
}

export default About
