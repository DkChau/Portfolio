import React, {useEffect} from 'react'
import {
    AboutContainer,
    AboutWrapper,
    Text,
    TextWrapper,
    Header,
    HeaderWrapper,
    Wrapper,
} from './AboutSectionElements'
import { useInView } from 'react-intersection-observer'
import {useAnimation} from 'framer-motion';

const AboutTextSection = (props) => {

    const {ref,inView} = useInView({
        threshold:0.7,
        triggerOnce:true
    })

    const animation = useAnimation()

    const textVariant = {
        hidden:{
            x:'-100%'
            // opacity:0
        },
        show:{
            x:0,
            // opacity:1,
            transition:{
                type:'tween',
                delay:0.6,
                duration:0.5,
                ease:'easeInOut'
            }
        },
        exit:{
            opacity:0
        },
    }

    const textVariant2 = {
        hidden:{
            y:'100%'
        },
        show:{
            y:0,
            transition:{
                type:'tween',
                duration:0.5,
                ease:'easeInOut'
            }
        },
        exit:{
            opacity:0
        },
    }

    useEffect(()=>{
        if(inView){
            animation.start('show')
        }
        else{
            // animation.start('hidden')
        }
    },[inView, animation])

    return (
        <AboutContainer 
            bgColor={props.data.bgColor} 
            txtColor={props.data.txtColor} 
            ref={ref}
        >
            <AboutWrapper headerStart={props.data.headerStart}>
                <TextWrapper>
                    <Text 
                        initial='hidden'
                        animate={animation}
                        variants={textVariant}
                    >
                        <Wrapper>
                            {props.data.text}
                        </Wrapper>
                    </Text>
                </TextWrapper>
                <HeaderWrapper>
                    <Header
                    >
                        <Wrapper
                            initial='hidden'
                            animate={animation}
                            variants={textVariant2}
                        >
                            {props.data.header}
                        </Wrapper>
                    </Header>
                </HeaderWrapper>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default AboutTextSection
