import React from 'react'
import HeroSection from '../../Components/HeroSection'
import ProjectList from '../../Components/ProjectList'
import { HomeContainer } from './HomeElements'

const Home = () => {
    return (
        <HomeContainer>
            <HeroSection/>
            <ProjectList/>
        </HomeContainer>
    )
}

export default Home
