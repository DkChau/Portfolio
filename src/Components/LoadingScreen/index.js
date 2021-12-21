import React, {useState, useEffect} from 'react'
import SingleRectangle from '../SingleRectangle'
import {
    LoadingContainer,
} from './LoadingElements'
import useWindowDimensions from '../../Hooks/dimensions'
import { AnimatePresence } from 'framer-motion'
import { uniqueId } from 'lodash'

const LoadingScreen = (props) => {

    console.log('render')
    const {height, width} = useWindowDimensions();
    // const [responsive,setResponsive] = useState(false)

    // useEffect(()=>{
    //     console.log(responsive)
    //     if(width>1000){
    //         setResponsive(false)
    //     }
    //     else{
    //         setResponsive(true)
    //     }
    // },[width, responsive])

    const container = {
        hidden:{
            transition: {
                staggerChildren: 0.05
            }
        },
        show: {
            transition: {
                // duration:1,
                // when:'beforeChildren',
                staggerChildren: 0.05
            }
        },
        exit: {
            transition: {
                // when:'afterChildren',
                // staggerChildren: 0.05
            }
        },
    }
    
    return (

        <LoadingContainer
            variants={container}
        >
            {props.rectangles.map((rectangle,index)=>{
                return (
                    <SingleRectangle key={'rectangle' + index + (width<1000 ? 'responsive' : '')} width={width < 1000 ? rectangle.widthResponsive : rectangle.width}/>
                    // <SingleRectangle key={'rectangle' + index } index={index} width={rectangle.width} widthResponsive={rectangle.widthResponsive}/>
                )
            })}
        </LoadingContainer>
    )
}

export default LoadingScreen
