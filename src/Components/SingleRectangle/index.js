import React from 'react'
import {
    RectContainer,
    RectWrapper,
} from './RectangleElements'

const SingleRectangle = (props) => {


    const listItem = {
        hidden: { x:0 },
        show: { 
            x:`${props.data}`,
            transition:{
                type:'tween'
            }
        },
        exit:{
            x:0,
            transition:{
                type:'tween',
                duration:0.3
            }
        }
    };

    return (
        <RectContainer
            variants={listItem}
        >
            <RectWrapper>
            </RectWrapper>
        </RectContainer>
    )
}

export default SingleRectangle
