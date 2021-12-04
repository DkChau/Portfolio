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
    ArrowWrapper,
    SubHead
} from './IndividualElements'
import {BsArrowRight} from 'react-icons/bs';

const IndividualProject = (props) => {
    console.log(props.data)
    return (
        <IndividualContainer>
            <IndividualWrapper imgFirst={props.data.imgFirst}>
                <ImageWrapper>
                    <ProjectImage src={props.data.image}></ProjectImage>
                </ImageWrapper>
                <ContentWrapper imgFirst={props.data.imgFirst}>
                    <ContentText>
                        <Title>{props.data.title}</Title>
                        <SubHead>{props.data.subHead}</SubHead>
                        <Text>{props.data.text}</Text>
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
