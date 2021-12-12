import React from 'react'
import {
        ExperienceContainer,
        ExperienceWrapper,
        Header,
        ContentWrapper,
        ProjectDetails,
        ProjectName,
        ProjectNote,
        Name,
        Date
} from './ResumeExperienceElements'

const ResumeExperience = (props) => {
    return (
        <ExperienceContainer >
            <ExperienceWrapper>
                <Header>Experience</Header>
                <ContentWrapper>
                    <ProjectName>
                        <Name>Texas Instruments Make Safe System</Name>
                        <Date>Aug 2019 - May 2020</Date>
                    </ProjectName>
                    <ProjectDetails>
                        <ProjectNote>
                            Conceptualized and designed a system in conjunction
                            with Texas Instruments for use in protecting their
                            production goods.
                        </ProjectNote>
                        <ProjectNote>
                            Utilized various key engineering programs to develop
                            an efficient prototype under strict budgetary and time 
                            constraints.
                        </ProjectNote>
                        <ProjectNote>
                            Developed extensive simulations, drawings, concept manuals, and detailed
                            testing plans in order to ensure proper system functionality.
                        </ProjectNote>
                        <ProjectNote>
                            Maintained a weekly communication plan with client
                            in order to ensure progress proceeds smoothly on 
                            both ends and information needed is easily obtained.
                        </ProjectNote>
                    </ProjectDetails>
                </ContentWrapper>
            </ExperienceWrapper>
        </ExperienceContainer>
    )
}

export default ResumeExperience
