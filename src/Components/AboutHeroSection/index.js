import React from 'react'
import LoadingScreen from '../LoadingScreen'
import {
    AboutContainer,
    AboutSubText,
    AboutText,
    AboutWrapper,
    AnimationWrapper
} from './AboutHeroSectionElements'
import { rectangles } from './LoadingData'

const AboutHeroSection = () => {

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
          <AboutContainer>
              <AboutWrapper>
                <AnimationWrapper
                  variants={wrapperVariant}
                >
                  <AboutText
                    variants={textVariant}
                  >About Me</AboutText>
                </AnimationWrapper>
                <AboutSubText variants={subtextVariant}>learn more about me</AboutSubText>
              </AboutWrapper>
          </AboutContainer>
      </React.Fragment>
    )
}

export default AboutHeroSection
