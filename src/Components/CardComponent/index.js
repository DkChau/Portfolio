import React from 'react'
import {
    CardBottomRow,
    CardContainer,
    CardGrid,
    CardHeadingWrapper,
    CardMiddleRow,
    CardWrapper,
    CardContent,
    CardText,
    CardSection
} from './CardElement'
import {
    useViewportScroll,
    useTransform
} from 'framer-motion'

const CardComponent = () => {

    const { scrollYProgress } = useViewportScroll()
    const scrollRange = [-.1, -.4, -.7];
    const xRange = ['-100%', '-50%', '0%']
    const opacityRange = [0, .5, 1]

    const x = useTransform(scrollYProgress, scrollRange, xRange)
    const opacity = useTransform(scrollYProgress, scrollRange, opacityRange)

    return (
        <CardContainer>
            <CardWrapper style={{ x:x , opacity:opacity}}>
                <CardGrid>
                    <CardHeadingWrapper>
                        <CardContent>
                            <CardSection>Name</CardSection>
                            <CardText>Duong Chau</CardText>
                        </CardContent>
                    </CardHeadingWrapper>
                    <CardMiddleRow>
                        <CardContent>
                            <CardSection>Name</CardSection>
                            <CardText>Duong Chau</CardText>
                        </CardContent>
                        <CardContent>
                            <CardSection>Name</CardSection>
                            <CardText>Duong Chau</CardText>
                        </CardContent>
                    </CardMiddleRow>
                    <CardBottomRow>
                        <CardContent>
                            <CardSection>Name</CardSection>
                            <CardText>Duong Chau</CardText>
                        </CardContent>
                        <CardContent>
                            <CardSection>Name</CardSection>
                            <CardText>Duong Chau</CardText>
                        </CardContent>
                    </CardBottomRow>
                </CardGrid>
            </CardWrapper>
        </CardContainer>
    )
}

export default CardComponent
