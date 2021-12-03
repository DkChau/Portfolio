import React from 'react'
import {
    RectContainer,
    RectWrapper,
} from './RectangleElements'

const SingleRectangle = (props) => {


    const listItem = {
        hidden: { x:0 },
        show: { 
            x:`${props.data.width}`,
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
            viewBox='0 0 100% 100%'
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
