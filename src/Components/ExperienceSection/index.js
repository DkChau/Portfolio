import ResumeEducation from '../ResumeEducation'
import ResumeExperience from '../ResumeExperience'
import ResumeSkills from '../ResumeSkills'
import {
    ExperienceContainer,
    ExperienceWrapper,

} from './ExperienceSectionElements'

const ExperienceSection = (props) => {
    return (
        <ExperienceContainer>
            <ExperienceWrapper>
                <ResumeEducation/>
                <ResumeExperience/>
                <ResumeSkills/>
            </ExperienceWrapper>
        </ExperienceContainer>
    )
}

export default ExperienceSection
