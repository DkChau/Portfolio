import React from 'react'
import LoadingScreen from '../LoadingScreen'
import {
    HeroContainer,
    HeroSubText,
    HeroText,
    HeroWrapper
} from './HeroElements'
import { rectangles } from './LoadingData'

const HeroSection = () => {

    return (
      <React.Fragment>
          <LoadingScreen rectangles={rectangles}/>
          <HeroContainer
          >
              <HeroWrapper
              >
                <HeroSubText
                >Hi I'm,</HeroSubText>
                <HeroText
                >DUONG CHAU</HeroText>
                <HeroSubText
                >An Aspiring Web Designer</HeroSubText>
              </HeroWrapper>
          </HeroContainer>
      </React.Fragment>
    )
}

export default HeroSection
