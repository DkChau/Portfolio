import React from 'react'
import SingleRectangle from '../SingleRectangle'
import {
    LoadingContainer,
} from './LoadingElements'

const LoadingScreen = (props) => {

    // const {height, width} = useWindowDimensions();
    // const [responsive,setResponsive] = useState(false)

    // useEffect(()=>{
    //     console.log(width, responsive)
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
                beforeChildren:true,
                staggerChildren: 0.05
            }
        },
        show: {
            transition: {
                // beforeChildren:true,
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
                    <SingleRectangle key={'rectangle' + index} width={rectangle.width} widthResponsive={rectangle.widthResponsive}/>
                )
            })}
        </LoadingContainer>
    )
}

export default LoadingScreen
