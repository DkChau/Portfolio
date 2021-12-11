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

const CardComponent = () => {
    return (
        <CardContainer>
            <CardWrapper>
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
