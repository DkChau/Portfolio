import React from 'react'
import {
    HeroContainer,
    HeroSubText,
    HeroText,
    HeroWrapper,
    AnimationWrapper,
    ProjectLink,
    LinkWrapper,
    ProjectText,
    IconWrapper,
    ArrowWrapper
} from './HeroElements'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const HeroSection = () => {

    const subtextVariant = {
      hidden:{
        opacity:0
      },
      show:{
        opacity:1,
        transition:{
          delay:1.3,
          duration:0.3
        }
      },
      exit:{
        opacity:0,
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
    const linkVariant = {
      hidden:{
        opacity:0
      },
      show:{
        opacity:1,
        transition:{
          delay:2.2,
          duration:0.5
        }
      },
      exit:{
        opacity:0
      }
    }

    return (
        <React.Fragment>
            <HeroContainer>
                <HeroWrapper>
                    <HeroSubText variants={subtextVariant}>Hi I'm,</HeroSubText>
                    <AnimationWrapper
                        variants={wrapperVariant}
                    >
                        <HeroText variants={textVariant}>
                        DUONG CHAU
                        </HeroText>
                    </AnimationWrapper>
                    <HeroSubText variants={subtextVariant}>An Aspiring Web Designer</HeroSubText>
                    <LinkWrapper  variants={linkVariant}>
                        <ProjectLink to='/projects'>
                            <ProjectText className='text1'>View My Projects</ProjectText>
                            <ProjectText className='text2'>View My Projects</ProjectText>
                        </ProjectLink>
                        <ArrowWrapper>
                            <IconWrapper className='arrow1'>
                                <HiOutlineArrowNarrowRight></HiOutlineArrowNarrowRight>
                            </IconWrapper>
                            <IconWrapper className='arrow2'>
                                <HiOutlineArrowNarrowRight></HiOutlineArrowNarrowRight> 
                            </IconWrapper>
                        </ArrowWrapper>
                    </LinkWrapper>
                </HeroWrapper>
            </HeroContainer>
        </React.Fragment>
    )
}

export default HeroSection
