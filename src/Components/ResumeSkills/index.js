import React, {useEffect} from 'react'
import { Header, SkillsContainer, SkillsWrapper, ContentWrapper,RowHeader,
Row,
List,
Item ,
AnimationWrapper} from './ResumeSkillsElements'
import {useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';


const ResumeSkills = (props) => {

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
        <SkillsContainer>
            <SkillsWrapper ref={ref}>
                <AnimationWrapper>
                    <Header
                        variants={headingVariant}
                        initial='hidden'
                        animate={animation}
                    >Skills</Header> 
                </AnimationWrapper>

                <ContentWrapper
                    variants={textVariant}
                    initial='hidden'
                    animate={animation}
                >
                    <Row>
                        <RowHeader>Programs: </RowHeader>
                        <List>
                            <Item>Creo Parametric,</Item>
                            <Item>MATLAB,</Item>
                            <Item>Solidworks,</Item>
                            <Item>Abaqus,</Item>
                        </List>
                    </Row>
                    <Row>
                        <RowHeader>Programming Languages: </RowHeader>
                        <List>
                            <Item>Java,</Item>
                            <Item>Javascript,</Item>
                            <Item>Python,</Item>
                        </List>
                    </Row>
                    <Row>
                        <RowHeader>Technical Abilties: </RowHeader>
                        <List>
                            <Item>Excel,</Item>
                            <Item>PowerPoint,</Item>
                            <Item>Statistical Analysis,</Item>
                        </List>
                    </Row>
                </ContentWrapper>
            </SkillsWrapper>
        </SkillsContainer>
    )
}

export default ResumeSkills
