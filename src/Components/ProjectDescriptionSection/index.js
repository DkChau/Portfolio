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
    FeatureWrapper,
    Feature,
    GridLinkWrapper,
    InfoContainer,
} from './DescriptionElements'
import {useInView} from 'react-intersection-observer'
import {useAnimation} from 'framer-motion'

const ProjectDescriptionSection = (props) => {

    const [ref,inView] = useInView({
        threshold:0.8,
        triggerOnce:true
    })

    const animation = useAnimation();

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
                duration:.5
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
                delay:0.5,
                duration:.7
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
        else{
            animation.start('hidden')
        }
    },[inView,animation])

    return (
        <InfoContainer>
            <InfoWrapper ref={ref}>
                <AnimationWrapper>
                    <InfoHeading variants={textVariant} animate={animation}>Project Details</InfoHeading>
                </AnimationWrapper>
                <AnimationWrapper>
                    <InfoDescription variants={textVariant} animate={animation}>{props.project.description}</InfoDescription>
                </AnimationWrapper>            
                {/* <FeatureWrapper>
                    {props.project.features.map((feature,index)=>{
                        return (
                            <Feature>{feature}</Feature>
                        )
                    })}

                </FeatureWrapper> */}
                <GridWrapper>
                    <TagContent>
                        <AnimationWrapper>
                            < TagHeader variants={textVariant} animate={animation}>Tools used to create this project: </TagHeader>
                        </AnimationWrapper>
                        <TagWrapper>
                            {
                                props.project.tags.map((tag,index)=>{
                                    return (
                                        <AnimationWrapper>
                                            <SingleTag variants={textVariant} animate={animation} key={`tag${index}`}>{tag}</SingleTag>
                                        </AnimationWrapper>                                )
                                })
                            }
                        </TagWrapper>
                    </TagContent>
                    <GridLinkWrapper>
                        <AnimationWrapper>
                            <LinkWrapper variants={buttonVariant} animate={animation}>
                                <ProjectLink to='#'>Source Code</ProjectLink>
                                <ProjectLink to='#'>Visit Project Site</ProjectLink>
                            </LinkWrapper>
                        </AnimationWrapper>
                    </GridLinkWrapper>
                </GridWrapper>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default ProjectDescriptionSection
