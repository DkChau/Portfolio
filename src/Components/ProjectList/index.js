import React from 'react'
import IndividualProject from '../IndividualProject'
import {
    ProjectContainer,
} from './ProjectListElements'
import { ProjectData } from './Data'
import BlackScreen from '../BlackScreen'

const ProjectList = () => {

    return (
        <ProjectContainer>
            <BlackScreen/>
            {ProjectData.map((project,index)=>{
                return (
                    <IndividualProject data={project} />
                )
            })}
        </ProjectContainer>
    )
}

export default ProjectList
