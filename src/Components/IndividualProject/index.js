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
    AnimationWrapper
} from './IndividualElements'
import {BsArrowRight} from 'react-icons/bs';
import {useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const IndividualProject = (props) => {

    const {ref, inView, entry} = useInView({
        threshold:.8
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
                duration:0.5,
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
                type:'tween',
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
                        <Title>{props.data.title}</Title>
                        <SubHead>{props.data.subHead}</SubHead>
                        <AnimationWrapper>
                            <Text
                                animate={animation}
                                initial='hidden'
                                variants={textVariants}
                            >{props.data.text}
                            </Text>
                        </AnimationWrapper>
                        <LinkWrapper  to={props.data.linkTo}>
                            <ArrowWrapper>
                                <ProjectLink>View Project</ProjectLink>
                                <Arrow>
                                    <BsArrowRight/>
                                </Arrow>
                            </ArrowWrapper>
                        </LinkWrapper>
                    </ContentText>
                </ContentWrapper>
            </IndividualWrapper>
        </IndividualContainer>
    )
}

export default IndividualProject
