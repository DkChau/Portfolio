import React from 'react'
import SingleRectangle from '../SingleRectangle'
import {
    LoadingContainer,
} from './LoadingElements'

const LoadingScreen = () => {

    const container = {
        hidden: { opacity: 1 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        },
        exit:{
            opacity:1,
            transition:{
                staggerChildren:0.1
            }
        }
    }
    
    const rectangles = [
        {x:'-30%'},
        {x:'30%'},
        {x:'-40%'},
        {x:'40%'}, 
        {x:'-50%'},
        {x:'50%'},
        {x:'-60%'},
        {x:'60%'},
        {x:'-70%'},
        {x:'70%'}, 
        {x:'-80%'},
        {x:'80%'},
    ]

    return (

        <LoadingContainer
            variants={container} initial="hidden" animate="show" exit='exit'
        >
            {rectangles.map((rectangle,index)=>{
                return (
                    <SingleRectangle data={rectangle.x}/>
                )
            })}
        </LoadingContainer>
    )
}

export default LoadingScreen
