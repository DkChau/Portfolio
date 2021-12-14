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
import Logo3 from '../../Images/Logo3.svg'
import {SiGithub} from 'react-icons/si'

const Footer = () => {

    const [ref, inView] = useInView({
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
                    <Logo src={Logo3}></Logo>
                </LogoWrapper>
                <TextWrapper>
                    <Text>@ All Rights Reserved 2021</Text>
                </TextWrapper>
                <LinkWrapper>
                    <PageLink>
                        <SiGithub></SiGithub>
                    </PageLink>
                </LinkWrapper>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
