import React from 'react'
import ProjectList from '../../Components/ProjectList'
import {ProjectContainer} from './ProjectElements'
import { ProjectData } from './Data'
import ProjectHeroSection from '../../Components/ProjectHeroSection'
import Footer from '../../Components/Footer'

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
            <ProjectList data={ProjectData}/>
            <Footer/>
        </ProjectContainer>
    )
}

export default Projects
