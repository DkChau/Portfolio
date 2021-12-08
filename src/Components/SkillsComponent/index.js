import React from 'react'
import {
    SkillContainer,
    Skill,
    SkillWrapper,
    SkillHeading,
    SkillGrid,
    SkillItem,
    IconWrapper,
} from './SkillElements'
import { SkillData } from './SkillData'



const SkillsComponent = () => {
    return (
        <SkillContainer>
            <SkillWrapper>
                <SkillHeading>Skills</SkillHeading>
                <SkillGrid>
                    {SkillData.map((skill,index)=>{
                        return (
                            <SkillItem>
                                <IconWrapper>
                                    <skill.icon></skill.icon>
                                </IconWrapper>
                                <Skill>{skill.name}</Skill>
                            </SkillItem>
                        )
                    })}
                </SkillGrid>
            </SkillWrapper>
        </SkillContainer>
    )
}

export default SkillsComponent
