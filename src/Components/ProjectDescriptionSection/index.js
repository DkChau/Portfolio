import React, {useEffect} from 'react'
import {
    InfoDescription,
    InfoHeading,
    InfoWrapper,
    TagHeader,
    TagWrapper,
    LinkWrapper,
    ProjectLink,
    SingleTag,
    GridWrapper,
    TagContent,
    AnimationWrapper,
    GridLinkWrapper,
    InfoContainer,
} from './DescriptionElements'
import {useInView} from 'react-intersection-observer'
import {useAnimation} from 'framer-motion'

const ProjectDescriptionSection = (props) => {

    const [ref,inView] = useInView({
        threshold:0.9,
        triggerOnce:true
    })

    const animation = useAnimation();

    const headingVariant = {
        hidden:{
            y:'100%',
            transition:{
                duration:.5
            }
        },
        show:{
            y:0,
            transition:{
                duration:.3
            }
        },
        exit:{
            opacity:0
        }
    }

    const textVariant = {
        hidden:{
            y:'100%',
            transition:{
                duration:.5
            }
        },
        show:{
            y:0,
            transition:{
                delay:0.3,
                duration:.3
            }
        },
        exit:{
            opacity:0
        }
    }

    const tagVariant = {
        hidden:{
            y:'100%',
            transition:{
                duration:.5
            }
        },
        show:{
            y:0,
            transition:{
                delay:0.6,
                duration:.3
            }
        },
        exit:{
            opacity:0
        }
    }

    const buttonVariant = {
        hidden:{
            x:'100%',
            transition:{
                duration:.5
            }
        },
        show:{
            x:0,
            transition:{
                delay:0.9,
                duration:.3
            }
        },
        exit:{
            opacity:0
        }
    }

    useEffect(()=>{
        if(inView){
            animation.start('show')
        }
    },[inView,animation])

    return (
        <InfoContainer>
            <InfoWrapper ref={ref}>
                <AnimationWrapper>
                    <InfoHeading variants={headingVariant} animate={animation} initial='hidden'>Project Details</InfoHeading>
                </AnimationWrapper>
                <AnimationWrapper>
                    <InfoDescription variants={textVariant} animate={animation } initial='hidden'>{props.project.description}</InfoDescription>
                </AnimationWrapper>            
                <GridWrapper>
                    <TagContent>
                        <AnimationWrapper>
                            < TagHeader variants={tagVariant} animate={animation} initial='hidden'>Tools used to create this project</TagHeader>
                        </AnimationWrapper>
                        <TagWrapper>
                            {
                                props.project.tags.map((tag,index)=>{
                                    return (
                                        <AnimationWrapper key={`tag${index}`}>
                                            <SingleTag variants={tagVariant} animate={animation} initial='hidden' key={`tag${index}`}>{tag}</SingleTag>
                                        </AnimationWrapper>                                )
                                })
                            }
                        </TagWrapper>
                    </TagContent>
                    <GridLinkWrapper>
                        <AnimationWrapper>
                            <LinkWrapper variants={buttonVariant} animate={animation} initial='hidden'>
                                <ProjectLink href={props.project.codeSite} target="_blank">Source Code</ProjectLink>
                                <ProjectLink href={props.project.appSite} target="_blank">Visit Project Site</ProjectLink>
                            </LinkWrapper>
                        </AnimationWrapper>
                    </GridLinkWrapper>
                </GridWrapper>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default ProjectDescriptionSection
