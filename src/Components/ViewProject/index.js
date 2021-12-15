import React from 'react'
import {
    ViewContainer,
    ViewImage,
    ViewImageWrapper,
    ViewWrapper,

} from './ViewElements'
import LoadingScreen from '../LoadingScreen';
import { rectangles } from './LoadingData';

const ViewProject = (props) => {

    return (
        <React.Fragment>
            <LoadingScreen rectangles={rectangles}/>
            <ViewContainer>
                <ViewWrapper>
                    <ViewImageWrapper>
                        <ViewImage src={props.project.imgSrc}></ViewImage>
                    </ViewImageWrapper>
                </ViewWrapper>
            </ViewContainer>
        </React.Fragment>
    )
}

export default ViewProject