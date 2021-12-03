import React from 'react'
import LoadingScreen from '../LoadingScreen'
import { rectangles } from './LoadingData'

const AboutHeroSection = () => {
    return (
        <React.Fragment>
          <LoadingScreen rectangles={rectangles}/>
        </React.Fragment>
    )
}

export default AboutHeroSection
