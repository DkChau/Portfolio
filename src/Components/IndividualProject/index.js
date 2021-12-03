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
    ProjectLink,
    Arrow,
    ArrowWrapper
} from './IndividualElements'
import {BsArrowRight} from 'react-icons/bs';

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
                        <Title>{props.data.title}</Title>
                        <Text>{props.data.text}</Text>
                        {/* <LinkWrapper>
                            <ProjectLink to={props.data.linkTo}>Test</ProjectLink>
                        </LinkWrapper> */}
                        <LinkWrapper  to={props.data.linkTo}>
                            <ArrowWrapper>
                                <ProjectLink>View Project</ProjectLink>
                                <Arrow>
                                    <BsArrowRight/>
                                </Arrow>
                            </ArrowWrapper>
                        </LinkWrapper>
                    </ContentText>
                </ContentWrapper>
            </IndividualWrapper>
        </IndividualContainer>
    )
}

export default IndividualProject
