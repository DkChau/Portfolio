import styled from 'styled-components';

export const SkillContainer = styled.div`
    width:100%;
    height:50%;
    background:transparent;
`

export const SkillWrapper =styled.div`
    width:80%;
    height:100%;
    max-width:1000px;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    justify-content: center;
`
export const SkillHeading = styled.div`
    font-size:2rem;
    font-weight:700;
    text-align:center;
`
export const SkillGrid = styled.div`
    display:grid;
    width:100%;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 50px;
`
export const SkillItem = styled.div`
    display:flex;
    height:100%;
    align-items: center;
    justify-content: center;
    padding:5px 0;
`
export const IconWrapper = styled.div`
    font-size:1.5rem;
    display:flex;
    height:auto;
`
export const Skill = styled.div`
    color:black;
    font-size:1.3rem;
    padding:0 10px;
`