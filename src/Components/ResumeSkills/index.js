import React from 'react'
import { Header, SkillsContainer, SkillsWrapper, ContentWrapper,RowHeader,
Row,
List,
Item } from './ResumeSkillsElements'

const ResumeSkills = (props) => {
    return (
        <SkillsContainer>
            <SkillsWrapper>
                <Header>Skills</Header>
                <ContentWrapper>
                    <Row>
                        <RowHeader>Programs: </RowHeader>
                        <List>
                            <Item>Creo Parametric,</Item>
                            <Item>MATLAB,</Item>
                            <Item>Solidworks,</Item>
                            <Item>Abaqus,</Item>
                        </List>
                    </Row>
                    <Row>
                        <RowHeader>Programming Languages: </RowHeader>
                        <List>
                            <Item>Java,</Item>
                            <Item>Javascript,</Item>
                            <Item>Python,</Item>
                        </List>
                    </Row>
                    <Row>
                        <RowHeader>Technical Abilties: </RowHeader>
                        <List>
                            <Item>Excel,</Item>
                            <Item>PowerPoint,</Item>
                            <Item>Statistical Analysis,</Item>
                        </List>
                    </Row>
                </ContentWrapper>
            </SkillsWrapper>
        </SkillsContainer>
    )
}

export default ResumeSkills
