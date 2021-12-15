import React from 'react'
import ProjectList from '../../Components/ProjectList'
import {ProjectContainer, ProjectWrapper, ScreenWrapper} from './ProjectElements'
import { ProjectData } from './Data'
import ProjectHeroSection from '../../Components/ProjectHeroSection'
import Footer from '../../Components/Footer'
import BannerSection from '../../Components/BannerSection'
import {bannerData1, bannerData2} from './BannerData'
import BlackScreen from '../../Components/BlackScreen'

const Projects = () => {

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
        <ProjectContainer
            variants={transitionVariant}
            initial='hidden'
            animate='show'
            exit='exit'
        >
            <ProjectHeroSection/>
            <ScreenWrapper>
                <BlackScreen/>
                <ProjectWrapper>
                    <BannerSection data={bannerData1}/>
                    <ProjectList data={ProjectData}/>
                    <BannerSection  data={bannerData2}/>
                </ProjectWrapper>
            </ScreenWrapper>
            <Footer/>
        </ProjectContainer>
    )
}

export default Projects
