import React from 'react'
import Footer from '../../Components/Footer'
import ViewProject from '../../Components/ViewProject'
import { UniqueContainer } from './UniqueElements'
import {useParams} from 'react-router-dom';
import {projectData} from '../../Pages/UniqueProject/Data';
import ProjectDescriptionSection from '../../Components/ProjectDescriptionSection';

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
    
    const {id} = useParams();
    const project = projectData[id]

    if(!project){
        return <div>post not found</div>
    }

    return (
        <UniqueContainer
            variants={transitionVariant}
            initial='hidden'
            animate='show'
            exit='exit'
        >
            <ViewProject project={project}/>
            <ProjectDescriptionSection project={project}/>
            <Footer/>
        </UniqueContainer>
    )
}

export default UniqueProject
