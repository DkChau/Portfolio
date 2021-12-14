import React from 'react'
import LoadingScreen from '../LoadingScreen'
import {
    HeroContainer,
    HeroSubText,
    HeroText,
    HeroWrapper,
    AnimationWrapper
} from './HeroElements'
import { rectangles } from './LoadingData'

const HeroSection = () => {

    const subtextVariant = {
      hidden:{
        opacity:0
      },
      show:{
        opacity:1,
        transition:{
          delay:1.3
        }
      },
      exit:{

      }
    }

    const wrapperVariant = {
      hidden:{
        clipPath: 'inset(0 100% 0 0)'
      },
      show:{
          clipPath: 'inset(0 0% 0 0)',
          transition:{
              type:'tween',
              delay:1.5,
              duration:0.5,
              when:'beforeChildren'
          }
      },
      exit:{
          opacity:0
      },
    }
    const textVariant = {
      hidden:{
        y:'100%'
      },
      show:{
        y:0
      },
      exit:{
        y:'100%'
      }
    }

    return (
      <React.Fragment>
          <LoadingScreen rectangles={rectangles}/>
          <HeroContainer>
              <HeroWrapper>
                <HeroSubText variants={subtextVariant}>Hi I'm,</HeroSubText>
                <AnimationWrapper
                  variants={wrapperVariant}
                >
                  <HeroText
                    variants={textVariant}
                  >
                    DUONG CHAU
                  </HeroText>
                </AnimationWrapper>
                <HeroSubText variants={subtextVariant}>An Aspiring Web Designer</HeroSubText>
              </HeroWrapper>
          </HeroContainer>
      </React.Fragment>
    )
}

export default HeroSection
