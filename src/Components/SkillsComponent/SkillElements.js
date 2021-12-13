import styled from 'styled-components';
import {motion} from 'framer-motion'

export const SkillContainer = styled.div`
    width:100%;
    height:50vh;
    background:transparent;
`

export const SkillWrapper =styled.div`
    width:80%;
    height:100%;
    max-width:62.5rem;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    justify-content: center;
`
export const SkillHeading = styled.div`
    font-size:3rem;
    padding:1rem 0;
    font-weight:700;
    text-align:center;
`
export const SkillGrid = styled.div`
    display:grid;
    width:100%;
    grid-template-columns: auto auto auto;
    grid-auto-rows: 3.125rem;
`
export const SkillItem = styled(motion.div)`
    display:grid;
    height:100%;
    width:100%;
    grid-template-columns: auto 1fr;
    justify-content:center;
    align-content:center;
    padding:.3125rem 0;
`
export const IconWrapper = styled.div`
    font-size:2rem;
    display:flex;
    height:auto;
    justify-self:center;
    align-self:center;
`
export const Skill = styled.div`
    color:black;
    font-size:1.5rem;
    padding:0 .625rem;
    justify-self:center;
    align-self:center;
`
export const AnimationWrapper = styled.div`
    width:auto;
    height:auto;
    overflow:hidden;

`