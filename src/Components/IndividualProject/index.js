import React from 'react'
import {
    ImageWrapper,
    IndividualContainer,
    IndividualWrapper,
    ProjectImage,
    ContentText,
    ContentWrapper,
    Text,
    Title,
    LinkWrapper,
    ProjectLink,
    Arrow,
    ArrowWrapper,
    SubHead,
    AnimationWrapper,
    HeadingWrapper,
    ButtonWrapper
} from './IndividualElements'
import {BsArrowRight} from 'react-icons/bs';
import {useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const IndividualProject = (props) => {

    const {ref, inView, entry} = useInView({
        threshold:.8,
        triggerOnce:true
    });
    const animation = useAnimation();

    const projectVariants = {
        hidden:{
            clipPath: 'inset(0 100% 0 0)'
        },
        show:{
            clipPath: 'inset(0 0% 0 0)',
            transition:{
                type:'tween',
                delay:0.5,
                duration:0.3,
            }
        },
        exit:{
            opacity:0
        },
    }

    const textVariants = {
        hidden:{
            y:'100%'
        },
        show:{
            y:0,
            transition:{
                delay:0.3,
                type:'tween',
            }
        }
    }
    const wrapperVariants ={
        hidden:{

        },
        show:{
            backgroundColor:['black', 'black'],
            clipPath: ['inset(0 0% 0 0)', 'inset(0 0 0 100%)'],
            transition:{
                duration:0.5,
            }
        }
    }
    const headingVariants = {
        hidden:{
            y:'100%'
        },
        show:{
            y:0,
            transition:{
                type:'tween',
                delay:0.5,
                duration:0.3
            }
        }
    }

    useEffect(()=>{
        if(inView){
            animation.start("show")
        }
        else{

        }
    },[animation, inView])

    return (
        <IndividualContainer ref={ref}
        >
            <IndividualWrapper imgFirst={props.data.imgFirst}>
                <ImageWrapper
                    animate={animation}
                    initial='hidden'
                    variants={projectVariants}
                >
                    <ProjectImage src={props.data.image}></ProjectImage>
                </ImageWrapper>
                <ContentWrapper imgFirst={props.data.imgFirst}>
                    <ContentText>
                        <AnimationWrapper>
                            <HeadingWrapper
                                animate={animation}
                                initial='hidden'
                                variants={wrapperVariants}
                            >
                            </HeadingWrapper>
                            <Title
                                initial='hidden'
                                animate={animation}
                                variants={headingVariants}
                            >
                                {props.data.title}
                            </Title>
                        </AnimationWrapper>
                        <AnimationWrapper>
                            <SubHead
                                animate={animation}
                                initial='hidden'
                                variants={textVariants}

                            >{props.data.subHead}
                            </SubHead>
                        </AnimationWrapper>
                        <AnimationWrapper>
                            <Text
                                animate={animation}
                                initial='hidden'
                                variants={textVariants}
                                >{props.data.text}
                            </Text>
                        </AnimationWrapper>
                        <AnimationWrapper>
                            <ButtonWrapper
                                animate={animation}
                                initial='hidden'
                                variants={textVariants}
                            >
                                <LinkWrapper  to={props.data.linkTo}>
                                    <ArrowWrapper>
                                        <ProjectLink>View Project</ProjectLink>
                                        <Arrow>
                                            <BsArrowRight/>
                                        </Arrow>
                                    </ArrowWrapper>
                                </LinkWrapper>
                            </ButtonWrapper>
                        </AnimationWrapper>
                    </ContentText>
                </ContentWrapper>
            </IndividualWrapper>
        </IndividualContainer>
    )
}

export default IndividualProject
