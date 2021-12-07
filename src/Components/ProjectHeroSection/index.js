import React from 'react'
import LoadingScreen from '../LoadingScreen'
import {
    ProjectContainer,
    ProjectSubText,
    ProjectText,
    ProjectWrapper,
    AnimationWrapper
} from './ProjectHeroElements'
import { rectangles } from './LoadingData'

const ProjectHeroSection = () => {

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
          <ProjectContainer>
              <ProjectWrapper>
                <AnimationWrapper
                  variants={wrapperVariant}
                >
                  <ProjectText
                    variants={textVariant}
                  >Projects</ProjectText>
                </AnimationWrapper>
                <ProjectSubText variants={subtextVariant}>A collection of my best works</ProjectSubText>
              </ProjectWrapper>
          </ProjectContainer>
      </React.Fragment>
    )
}

export default ProjectHeroSection
