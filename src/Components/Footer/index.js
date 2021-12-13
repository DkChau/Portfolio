import React, {useEffect} from 'react'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import {
    FooterContainer,
    FooterWrapper,
    LinkWrapper,
    Logo,
    LogoWrapper,
    Text,
    TextWrapper,
    PageLink
} from './FooterElements'

const Footer = () => {

    const [ref, inView, entry] = useInView({
        threshold:0.7,
        triggerOnce:true
    })

    const animation = useAnimation()

    const footerVariant = {
        hidden:{
            opacity:0
        },
        show:{
            opacity:1,
            transition:{
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
        else{

        }
    },[animation, inView])

    return (
        <FooterContainer>
            <FooterWrapper
                ref={ref}
                variants={footerVariant}
                initial='hidden'
                animate={animation}
                exit='exit'
            >
                <LogoWrapper>
                    <Logo>DKC</Logo>
                </LogoWrapper>
                <TextWrapper>
                    <Text>All Rights Reserved</Text>
                </TextWrapper>
                <LinkWrapper>
                    <PageLink>Gh Link here</PageLink>
                </LinkWrapper>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
