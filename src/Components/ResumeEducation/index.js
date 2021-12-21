import React, {useEffect} from 'react'
import {
        EducationContainer,
        EducationWrapper,
        Header,
        ContentWrapper,
        University,
        Degree,
        Courses,
        Name,
        Classes,
        DegreeName,
        DegreeDate,
        AnimationWrapper,
        SingleClass,
        DegreeGPA
} from './ResumeEducationElements'
import {useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

const ResumeEducation = (props) => {

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

    const classes = [
        'Computer Aided Design',  
        'Fluid Mechanics', 
        'Kinematics/Dynamics Mechanical Systems',
        'Thermodynamics', 
        'Intermediate Mechanics of Materials', 
        'Advanced Engineering Math', 
        'Systems and Controls', 
        'Heat Transfer', 
        'Design of Mechanical Systems', 
        'Computational Design and Analysis'
    ]

    return (
        <EducationContainer >
            <EducationWrapper ref={ref}>
                <AnimationWrapper>
                    <Header
                        variants={headingVariant}
                        initial='hidden'
                        animate={animation}
                    >Education </Header>
                </AnimationWrapper>
                <ContentWrapper 
                    variants={textVariant}
                    initial='hidden'
                    animate={animation}
                >
                    <University>University of Texas at Dallas</University>
                    <Degree>
                        <DegreeName>Bachelors of Mechanical Engineering </DegreeName>
                        <DegreeGPA>Gpa: 3.90</DegreeGPA>
                        <DegreeDate>August 2016 - May 2020</DegreeDate>
                    </Degree>
                    <Courses>
                        <Name>Relevant Courses: </Name>
                        <Classes>
                            {classes.map((singleClass,index)=>{
                                return (
                                    <SingleClass>{singleClass}</SingleClass>
                                )
                            })}
                        </Classes>
                    </Courses>
                </ContentWrapper>
            </EducationWrapper>
        </EducationContainer>
    )
}

export default ResumeEducation
