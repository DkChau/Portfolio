import React from 'react'
import SingleRectangle from '../SingleRectangle'
import {
    LoadingContainer,
} from './LoadingElements'
import useWindowDimensions from '../../Hooks/dimensions'

const LoadingScreen = (props) => {

    const {width} = useWindowDimensions();

    const container = {
        hidden:{
            transition: {
                staggerChildren: 0.05
            }
        },
        show: {
            transition: {
                staggerChildren: 0.05
            }
        },
        exit: {
        },
    }
    
    return (

        <LoadingContainer
            variants={container}
        >
            {props.rectangles.map((rectangle,index)=>{
                return (
                    <SingleRectangle key={'rectangle' + index + (width<=768 ? 'responsive' : '')} width={width <= 768 ? rectangle.widthResponsive : rectangle.width}/>
                )
            })}
        </LoadingContainer>
    )
}

export default LoadingScreen
