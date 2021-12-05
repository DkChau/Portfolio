import React from 'react'
import HeroSection from '../../Components/HeroSection'
import ProjectList from '../../Components/ProjectList'
import { HomeContainer } from './HomeElements'

const Home = () => {

    const transitionVariant = {
        hidden:{x:'-100vw'},
        show:{
            x:'0',
            transition:{
                duration:0.5,
                when:'beforeChildren',
            }
        },
        exit:{
            x:'100vw',
            transition:{
                delay:0.3,
                type:'tween',
                duration:1,
                ease:'easeInOut'
            }
        
        }
    }

    return (
        <HomeContainer
            variants={transitionVariant}
            initial='hidden'
            animate='show'
            exit='exit'
        >
            <HeroSection/>
            <ProjectList/>
        </HomeContainer>
    )
}

export default Home
