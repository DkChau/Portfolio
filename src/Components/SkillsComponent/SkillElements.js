import styled from 'styled-components';
import {motion} from 'framer-motion'


export const SkillWrapper =styled.div`
    width:80%;
    height:100%;
    max-width:62.5rem;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    justify-content: center;
`
export const SkillHeading = styled(motion.div)`
    font-size:3rem;
    padding:1rem 0;
    font-weight:700;
    text-align:center;
`
export const SkillGrid = styled.div`
    display:grid;
    width:100%;
    grid-template-columns: auto auto auto;
    grid-auto-rows:2.2rem;
    grid-gap:2rem;
`
export const SkillItem = styled(motion.div)`
    display:grid;
    height:100%;
    width:100%;
    grid-template-columns: 1fr 1fr;
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
    /* padding:0 .625rem; */
    /* justify-self:center;
    align-self:center; */
`
export const AnimationWrapper = styled.div`
    width:auto;
    height:auto;
    overflow:hidden;

`

export const SkillContainer = styled.div`
    width:100%;
    padding:7rem 0 3rem 0;
    background:transparent;
    transition:all 0.3s ease-in-out;

    @media (max-width:992px){
        ${SkillHeading}{
            font-size:2.6rem;
        }
        ${IconWrapper}{
            font-size:1.8rem;
        }
        ${Skill}{
            font-size:1.3rem;
        }
    }
    @media (max-width:768px){
        ${SkillHeading}{
            font-size:2.3rem;
        }
        ${IconWrapper}{
            font-size:1.5rem;
        }
        ${Skill}{
            font-size:1rem;
        }
    }
    @media (max-width:576px){
        height:100%;

        ${SkillGrid}{
            padding:2rem 0;
            grid-template-columns: auto auto;
        }
        ${SkillHeading}{

        }
        ${IconWrapper}{
            font-size:1.6rem;
        }
        ${Skill}{
            font-size:1.1rem;
        }
    }

`