import React from 'react'
import {
    BannerContainer,
    BannerContent,
    BannerLink,
    BannerLinkWrapper,
    BannerText,
    BannerTextWrapper,
    BannerWrapper,
    LinkHeader
} from './BannerElements'
const BannerSection = (props) => {
    return (
        <BannerContainer>
            <BannerWrapper>
                <BannerContent>
                    <BannerTextWrapper>
                        <BannerText>
                            {props.data.text}
                        </BannerText>
                    </BannerTextWrapper>
                    {
                        props.data.link && (
                            <BannerLinkWrapper>
                                {/* <LinkHeader>Quick Links: </LinkHeader> */}
                                <BannerLink to='/'>
                                    Home
                                </BannerLink>
                                <BannerLink to='/about'>
                                    About 
                                </BannerLink>
                                <BannerLink to='/projects'>
                                    Project
                                </BannerLink>
                            </BannerLinkWrapper>
                        )
                    }
                </BannerContent>
            </BannerWrapper>
        </BannerContainer>

    )
}

export default BannerSection
