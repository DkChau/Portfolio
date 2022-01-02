import React from 'react'
import {
    RectContainer,
    RectWrapper,
} from './RectangleElements'

const SingleRectangle = (props) => {

    const listItem = {
        hidden: { 
            x:0,
        },
        show: { 
            x:`${props.width}`,
            
            transition:{
                type:'tween',
                ease:'easeInOut'
            }
        },
        exit:{
            x:0,
            transition:{
                type:'tween',
                ease:'easeInOut',
                duration:0.5
            }
        }
    };

    return (
        <RectContainer
            variants={listItem}
        >
            <RectWrapper
                width='100%'
                height='100%'
            >
            </RectWrapper>
        </RectContainer>
    )
}

export default SingleRectangle
