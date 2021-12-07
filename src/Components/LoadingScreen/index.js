import React from 'react'
import SingleRectangle from '../SingleRectangle'
import {
    LoadingContainer,
} from './LoadingElements'

const LoadingScreen = (props) => {

    const container = {
        show: {
          transition: {
            staggerChildren: 0.05
          }
        },
    }
    
    return (

        <LoadingContainer
            variants={container}
        >
            {props.rectangles.map((rectangle,index)=>{
                return (
                    <SingleRectangle data={rectangle}/>
                )
            })}
        </LoadingContainer>
    )
}

export default LoadingScreen
