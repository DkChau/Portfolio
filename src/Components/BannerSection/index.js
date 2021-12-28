import React, {useEffect} from 'react'
import {
    BannerContainer,
    BannerContent,
    BannerLink,
    BannerLinkWrapper,
    BannerText,
    BannerTextWrapper,
    BannerWrapper,
} from './BannerElements'
import {useInView} from 'react-intersection-observer'
import {useAnimation} from 'framer-motion'

const BannerSection = (props) => {

    const [ref, inView] = useInView({
        threshold:0.8,
        triggerOnce:true
    })

    const animation = useAnimation()

    const bannerVariant = {
        hidden:{
            y:'-100%'
        },
        show:{
            y:0,
            transition:{
                duration:1
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
    },[inView, animation])
    return (
        <BannerContainer>
            <BannerWrapper>
                <BannerContent ref={ref}>
                    <BannerTextWrapper>
                        <BannerText
                            variants={bannerVariant}
                            initial='hidden'
                            animate={animation}
                            exit='exit'
                        >
                            {props.data.text}
                        </BannerText>
                    </BannerTextWrapper>
                    <BannerTextWrapper>
                    {
                        props.data.link && (
                            <BannerLinkWrapper
                                variants={bannerVariant}
                                initial='hidden'
                                animate={animation}
                                exit='exit'
                            >
                                <BannerLink className='underline' to='/'>
                                    Home
                                </BannerLink>
                                <BannerLink className='underline' to='/about'>
                                    About 
                                </BannerLink>
                                <BannerLink className='underline' to='/projects'>
                                    Project
                                </BannerLink>
                            </BannerLinkWrapper>
                        )
                    }               
                    </BannerTextWrapper>
                </BannerContent>
            </BannerWrapper>
        </BannerContainer>

    )
}

export default BannerSection
