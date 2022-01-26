import React, {useEffect} from 'react'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import {
    FooterContainer,
    FooterWrapper,
    LinkWrapper,
    LogoIcon,
    LogoWrapper,
    Text,
    TextWrapper,
    PageLink
} from './FooterElements'
import Logo from '../../Images/Logo.svg'
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
                    <LogoIcon src={Logo}></LogoIcon>
                </LogoWrapper>
                <TextWrapper>
                    <Text>This website is open source!</Text>
                </TextWrapper>
                <LinkWrapper>
                    <PageLink href='https://github.com/novaark/Portfolio' target='_blank'>
                        <SiGithub></SiGithub>
                    </PageLink>
                </LinkWrapper>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
