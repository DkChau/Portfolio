import React, {useEffect} from 'react'
import {
        ExperienceContainer,
        ExperienceWrapper,
        Header,
        ContentWrapper,
        ProjectDetails,
        ProjectName,
        ProjectNote,
        Name,
        ProjectDate,
        AnimationWrapper
} from './ResumeExperienceElements'
import {useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

const ResumeExperience = (props) => {

    const animation = useAnimation()
    const [ref, inView] = useInView({
        threshold:0.8
    })

    const headingVariant = {
        hidden:{
            y:'-100%'
        },
        show:{
            y:0,
            transition:{
                duration:0.5,
                type:'tween'
            }
        },
        exit:{
            
        }
    }
    
    const textVariant = {
        hidden:{
            opacity:0
        },
        show:{
            opacity:1,
            transition:{
                delay:0.5,
                duration:0.5
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
    },[inView, animation])

    return (
        <ExperienceContainer >
            <ExperienceWrapper ref={ref}>
                <AnimationWrapper>
                    <Header
                        variants={headingVariant}
                        initial='hidden'
                        animate={animation}
                    >Experience</Header>
                </AnimationWrapper>
                <ContentWrapper
                    variants={textVariant}
                    initial='hidden'
                    animate={animation}
                >
                    <ProjectName>
                        <Name>Texas Instruments Make Safe System</Name>
                        <ProjectDate>Aug 2019 - May 2020</ProjectDate>
                    </ProjectName>
                    <ProjectDetails>
                        <ProjectNote>
                            Conceptualized and designed a system in conjunction
                            with Texas Instruments for use in protecting their
                            production goods.
                        </ProjectNote>
                        <ProjectNote>
                            Utilized various key engineering programs to develop
                            an efficient prototype under strict budgetary and time 
                            constraints.
                        </ProjectNote>
                        <ProjectNote>
                            Developed extensive simulations, drawings, concept manuals, and detailed
                            testing plans in order to ensure proper system functionality.
                        </ProjectNote>
                        <ProjectNote>
                            Maintained a weekly communication plan with client
                            in order to ensure progress proceeds smoothly on 
                            both ends and information needed is easily obtained.
                        </ProjectNote>
                    </ProjectDetails>
                </ContentWrapper>
            </ExperienceWrapper>
        </ExperienceContainer>
    )
}

export default ResumeExperience
