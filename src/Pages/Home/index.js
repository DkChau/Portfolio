import React from 'react'
import HeroSection from '../../Components/HeroSection'
import ProjectList from '../../Components/ProjectList'
import { HomeContainer } from './HomeElements'
import { ProjectData } from './Data'
import Footer from '../../Components/Footer'
import BannerSection from '../../Components/BannerSection'
import {bannerData1, bannerData2} from './BannerData'

const Home = () => {

    const transitionVariant = {
        hidden:{
            x:'-100vw',
        },
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
        <HomeContainer
            variants={transitionVariant}
            initial='hidden'
            animate='show'
            exit='exit'
        >
            <HeroSection/>
            <BannerSection data={bannerData1}/>
            <ProjectList data={ProjectData}/>
            <BannerSection data={bannerData2}/>
            <Footer/>
        </HomeContainer>
    )
}

export default Home
