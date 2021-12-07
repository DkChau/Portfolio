import React from 'react'
import IndividualProject from '../IndividualProject'
import {
    ProjectContainer,
} from './ProjectListElements'
import BlackScreen from '../BlackScreen'

const ProjectList = (props) => {

    return (
        <ProjectContainer>
            <BlackScreen/>
            {props.data.map((project,index)=>{
                return (
                    <IndividualProject key={`project${index}`} data={project} />
                )
            })}
        </ProjectContainer>
    )
}

export default ProjectList
