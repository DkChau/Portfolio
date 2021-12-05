import React from 'react'
import SingleRectangle from '../SingleRectangle'
import {
    LoadingContainer,
} from './LoadingElements'

const LoadingScreen = (props) => {

    const container = {
        hidden: { opacity: 1 },
        show: {
          opacity: 1,
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
