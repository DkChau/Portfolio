import React from 'react';
import {
    LoadContainer,
    LoadCircle,
    CircleWrapper
} from './ImageLoadElements'

function ImageLoad (props) {

    return (
        <LoadContainer>
            <CircleWrapper>
                <LoadCircle numChild='1' delay='0s'></LoadCircle>
                <LoadCircle numChild='2' delay='.25s'></LoadCircle>
                <LoadCircle numChild='3' delay='.5s'></LoadCircle>
                <LoadCircle numChild='4' delay='.75s'></LoadCircle>
                <LoadCircle numChild='5' delay='1s'></LoadCircle>
            </CircleWrapper>
        </LoadContainer>
    )
}

export default ImageLoad
