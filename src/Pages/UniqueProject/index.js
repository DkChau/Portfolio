import React from 'react'
import ViewProject from '../../Components/ViewProject'
import { UniqueContainer } from './UniqueElements'

const UniqueProject = () => {

    const transitionVariant = {
        hidden:{x:'-100vw'},
        show:{
            x:'0',
            transition:{
                duration:0.5,
                ease:'easeInOut',
                when:'beforeChildren',
            }
        },
        exit:{
            x:'100vw',
            transition:{
                type:'tween',
                duration:0.5,
                ease:'easeInOut',
                when:'afterChildren'
            }
        }
    }
    
    return (
        <UniqueContainer
            variants={transitionVariant}
            initial='hidden'
            animate='show'
            exit='exit'
        >
            <ViewProject/>
        </UniqueContainer>
    )
}

export default UniqueProject
