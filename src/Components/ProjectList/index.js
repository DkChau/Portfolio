import React from 'react'
import IndividualProject from '../IndividualProject'
import {
    ProjectContainer,
} from './ProjectListElements'
import { ProjectData } from './Data'

const ProjectList = () => {

    console.log(ProjectData)

    return (
        <ProjectContainer>
            {ProjectData.map((project,index)=>{
                return (
                    <IndividualProject data={project} />
                )
            })}
        </ProjectContainer>
    )
}

export default ProjectList
