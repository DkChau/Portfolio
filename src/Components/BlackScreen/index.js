import React from 'react';
import {
    ScreenContainer
} from './BlackScreenElements'

const BlackScreen = () => {

    const screenVariant = {
        hidden:{width:'0%'},
        exit:{
            width:'100%',
            transition:{
                duration:0.5,
                type:'tween',
                ease:'easeInOut'
            }
        }
    }

    return (
        <ScreenContainer 
            variants={screenVariant}
            initial='hidden'
            exit='exit'
        >

        </ScreenContainer>
    )
}

export default BlackScreen
