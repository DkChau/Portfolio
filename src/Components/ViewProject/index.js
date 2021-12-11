import React from 'react'
import {
    ViewContainer,
    ViewImage,
    ViewImageWrapper,
    ViewWrapper,
    InfoWrapper,
    InfoDescription,
    InfoHeading,
    TagHeader,
    TagWrapper,
    SingleTag,
    ProjectLink,
    LinkWrapper
} from './ViewElements'
import {useParams} from 'react-router-dom';
import {projectData} from './Data';
import LoadingScreen from '../LoadingScreen';
import { rectangles } from './LoadingData';

const ViewProject = (props) => {

    const {id} = useParams();
    const project = projectData[id]

    if(!project){
        return <div>post not found</div>
    }

    return (
        <React.Fragment>
            <LoadingScreen rectangles={rectangles}/>
            <ViewContainer>
                <ViewWrapper>
                    <ViewImageWrapper>
                        <ViewImage src={project.imgSrc}></ViewImage>
                    </ViewImageWrapper>
                    <InfoWrapper>
                        <InfoHeading>Project Description</InfoHeading>
                        <InfoDescription>{project.description}</InfoDescription>
                        <TagHeader>Tools used to create this project: </TagHeader>
                        <TagWrapper>
                            {
                                project.tags.map((tag,index)=>{
                                    return (
                                        <SingleTag>{tag} / </SingleTag>
                                    )
                                })
                            }
                        </TagWrapper>
                        <LinkWrapper>
                            <ProjectLink to='#'>Source Code</ProjectLink>
                            <ProjectLink to='#'>Visit Project Site</ProjectLink>
                        </LinkWrapper>
                    </InfoWrapper>
                </ViewWrapper>
            </ViewContainer>
        </React.Fragment>
    )
}

export default ViewProject