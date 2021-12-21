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

    const {ref, inView} = useInView({
        threshold:.8,
        triggerOnce:true
    });
    const animation = useAnimation();

    const containerVariant = {
        exit:{
            opacity:0
        }
    }
    const projectVariants = {
        hidden:{
            clipPath: 'inset(0 100% 0 0)'
        },
        show:{
            clipPath: 'inset(0 0% 0 0)',
            transition:{
                type:'tween',
                delay:0.3,
                duration:0.5,
                ease:'easeInOut'
            }
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
                duration:0.5,
                type:'tween',
                ease:'easeInOut'
            }
        },
    }
    const wrapperVariants ={
        show:{
            backgroundColor:['black', 'black'],
            clipPath: ['inset(0 0% 0 0)', 'inset(0 0 0 100%)'],
            transition:{
                duration:0.3,
                ease:'easeInOut'
            }
        },
    }

    useEffect(()=>{
        if(inView){
            animation.start("show")
        }
        else{

        }
    },[animation, inView])

    return (
        <IndividualContainer ref={ref} variants={containerVariant}>
            <IndividualWrapper imgFirst={props.data.imgFirst}>
                <ImageWrapper>
                    <ProjectImage
                        animate={animation}
                        initial='hidden'
                        variants={projectVariants}
                    src={props.data.image}></ProjectImage>
                </ImageWrapper>
                <ContentWrapper imgFirst={props.data.imgFirst}>
                    <ContentText imgFirst={props.data.imgFirst}>
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
                                variants={textVariants}
                            >
                                {props.data.title}
                            </Title>
                        </AnimationWrapper> 
                        {/* Move heading outside in small mode */}
                        <AnimationWrapper>
                            <SubHead
                                animate={animation}
                                initial='hidden'
                                variants={textVariants}

                            >{props.data.subHead}
                            </SubHead>
                        </AnimationWrapper>
                        <AnimationWrapper>
                            <AnimationWrapper>
                                <Text
                                    animate={animation}
                                    initial='hidden'
                                    variants={textVariants}
                                    >{props.data.text}
                                </Text>
                            </AnimationWrapper>

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
