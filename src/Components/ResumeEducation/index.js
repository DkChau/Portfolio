import React from 'react'
import {
        EducationContainer,
        EducationWrapper,
        Header,
        ContentWrapper,
        University,
        Degree,
        Courses,
        Name,
        Classes,
        DegreeName,
        Date,
} from './ResumeEducationElements'

const ResumeEducation = (props) => {
    return (
        <EducationContainer >
            <EducationWrapper>
                <Header>Education </Header>
                <ContentWrapper>
                    <University>University of Texas at Dallas</University>
                    <Degree>
                        <DegreeName>Bachelors of Mechanical Engineering ,  Gpa: 3.90</DegreeName>
                        <Date>May 2020</Date>
                    </Degree>
                    <Courses>
                        <Name>Relevant Courses: </Name>
                        <Classes>
                            Computer Aided Design,
                            Fluid Mechanics,
                            Kinematics/Dynamics Mechanical Systems,
                            Thermodynamics,
                            Intermediate Mechanics of Materials,
                            Advanced Engineering Math,
                            Systems and Controls,
                            Heat Transfer,
                            Design of Mechanical Systems,
                            Computational Design and Analysis
                        </Classes>
                    </Courses>
                </ContentWrapper>
            </EducationWrapper>
        </EducationContainer>
    )
}

export default ResumeEducation
