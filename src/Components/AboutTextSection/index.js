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
            x:'-150%'
        },
        show:{
            x:0,
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

    const textVariant2 = {
        hidden:{
            y:'150%'
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
                        initial='hidden'
                        animate={animation}
                        variants={textVariant2}
                    >
                        <Wrapper >
                            {props.data.header}
                        </Wrapper>
                    </Header>
                </HeaderWrapper>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default AboutTextSection
