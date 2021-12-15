import React from 'react'
import IndividualProject from '../IndividualProject'
import {
    ProjectContainer,
} from './ProjectListElements'

const ProjectList = (props) => {

    return (
        <ProjectContainer>
            {props.data.map((project,index)=>{
                return (
                    <IndividualProject key={`project${index}`} data={project} />
                )
            })}
        </ProjectContainer>
    )
}

export default ProjectList
