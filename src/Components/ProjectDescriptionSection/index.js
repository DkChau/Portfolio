import React from 'react'
import {
    InfoDescription,
    InfoHeading,
    InfoWrapper,
    TagHeader,
    TagWrapper,
    LinkWrapper,
    ProjectLink,
    SingleTag,
    GridWrapper,
    TagContent,
    FeatureWrapper,
    Feature
} from './DescriptionElements'

const ProjectDescriptionSection = (props) => {
    return (
        <InfoWrapper>
            <InfoHeading>Project Description</InfoHeading>
            <InfoDescription>{props.project.description}</InfoDescription>
            <FeatureWrapper>
                {props.project.features.map((feature,index)=>{
                    return (
                        <Feature>{feature}</Feature>
                    )
                })}

            </FeatureWrapper>
            <GridWrapper>
                <TagContent>
                    <TagHeader>Tools used to create this project: </TagHeader>
                    <TagWrapper>
                        {
                            props.project.tags.map((tag,index)=>{
                                return (
                                    <SingleTag key={`tag${index}`}>{tag}</SingleTag>
                                )
                            })
                        }
                    </TagWrapper>
                </TagContent>
                <LinkWrapper>
                    <ProjectLink to='#'>Source Code</ProjectLink>
                    <ProjectLink to='#'>Visit Project Site</ProjectLink>
                </LinkWrapper>
            </GridWrapper>
        </InfoWrapper>
    )
}

export default ProjectDescriptionSection
