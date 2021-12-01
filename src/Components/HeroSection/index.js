import React from 'react'
import LoadingScreen from '../LoadingScreen'
import {
    HeroContainer,
    HeroSubText,
    HeroText,
    HeroWrapper
} from './HeroElements'

const HeroSection = () => {

    // const containerVariant = {
    //     hidden:{
    //       x:'100vw',
    //     },
    //     visible:{
    //       x:0,
    //       transition:{
    //         type:'tween',
    //         duration:0.4,
    //         ease:'easeInOut',
    //         when:'beforeChildren',
    //         staggerChildren: 0.5
    //       }
    //     },
    //     exit:{
    //       x:'100vw',
    //       transition:{
    //         type:'tween',
    //         duration:0.4,
    //         ease:'easeInOut',
    //       }
    //     }
    // }

    const textVariant = {
      hidden:{
        opacity:0
      },
      visible:{
        opacity:1,
        transition:{
          type:'tween',
          duration:0.8,
          ease:'easeInOut'
        }
      },
    }

    return (
      <React.Fragment>
          <LoadingScreen/>
          <HeroContainer
              // variants={containerVariant}
              // initial='hidden'
              // animate='visible'
              // exit='exit'
          >
              <HeroWrapper
                // variants={containerVariant}
              >
                <HeroSubText
                  variants={textVariant}
                >Hi I'm,</HeroSubText>
                <HeroText
                  variants={textVariant}
                >DUONG CHAU</HeroText>
                <HeroSubText
                  variants={textVariant}
                >An Aspiring Web Designer</HeroSubText>
              </HeroWrapper>
          </HeroContainer>
      </React.Fragment>
    )
}

export default HeroSection
