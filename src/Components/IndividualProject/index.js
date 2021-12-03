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
    ProjectLink
} from './IndividualElements'

const IndividualProject = (props) => {
    console.log(props.data)
    return (
        <IndividualContainer>
            <IndividualWrapper>
                <ImageWrapper>
                    <ProjectImage src={props.data.image}></ProjectImage>
                </ImageWrapper>
                <ContentWrapper>
                    <ContentText>
                        <Title>Test</Title>
                        <Text>test</Text>
                        <LinkWrapper>
                            <ProjectLink to='#'>Test</ProjectLink>
                        </LinkWrapper>
                    </ContentText>
                </ContentWrapper>
            </IndividualWrapper>
        </IndividualContainer>
    )
}

export default IndividualProject
