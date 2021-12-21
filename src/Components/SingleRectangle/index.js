import React,{useState, useEffect} from 'react'
import {
    RectContainer,
    RectWrapper,
} from './RectangleElements'
import useWindowDimensions from '../../Hooks/dimensions';
import uniqid from 'uniqid'
import {useCycle} from 'framer-motion';

const SingleRectangle = (props) => {

    // console.log('render')
    // const { height, width } = useWindowDimensions();
    // const [responsive, setResponsive] = useState(false)

    // const [x,cycleX] = useCycle(props.width, props.widthResponsive)
    // // // const animation=useAnimation();

    // useEffect(()=>{
    //     if(width>1000 && responsive){
    //         console.log(x)
    //         cycleX()
    //         setResponsive(false)
    //     }
    //     else if(width<=1000 && !responsive){
    //         cycleX()
    //         setResponsive(true)
    //     }
    // },[width, responsive])

    const listItem = {
        hidden: { 
            x:0,
        },
        show: { 
            x:`${props.width}`,
            
            transition:{
                // duration:0.05,
                type:'tween',
                ease:'easeInOut'
            }
        },
        // showResponsive: { 
        //     x:`${props.widthResponsive}`,
            
        //     transition:{
        //         type:'tween',
        //         ease:'easeInOut'
        //     }
        // },
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
            viewBox='0 0 100% 100%'
            variants={listItem}
            // initial={'hidden'}
            // animate={width < 1000 ? 'showResponsive' : 'show'}
            // exit={'exit'}
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
