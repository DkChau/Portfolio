import styled from 'styled-components'
import {motion} from 'framer-motion';

export const ExperienceContainer = styled.div`
    width:100%;
    height:auto;
    display: flex;
    justify-content: center;
    align-items: center;
    transition:opacity 1.5s ease-in-out;
`
export const ExperienceWrapper = styled.div`
    display:grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 1fr;
    width:70%;
    align-items: start;

`   
export const Header = styled(motion.div)`
    display:flex;
    font-size:2rem;
    padding:0 3rem;
    font-weight:700;

`
export const ContentWrapper = styled(motion.div)`
    display:grid;
    grid-template-columns: 1fr;
    grid-auto-rows:auto;
    padding-top: .5rem;
    font-size:1.5rem;
    grid-gap: .2rem;
`
export const ProjectName = styled.div`
    display:grid;
    grid-template-columns: 1fr auto;
    font-weight:600;
`
export const ProjectDetails = styled.ul`
    list-style-position:inside;
    list-style-type:disc;
    text-indent: -1em;
    padding-left: 1em;
`
export const ProjectNote = styled.li`
    font-size:1.2rem;
    padding-top:.65rem;
    font-weight:300;
`
export const Name = styled.p`
    

`
export const Date = styled.p`
    font-size:1.2rem;
    padding-top:.15rem;
`
export const AnimationWrapper = styled.div`
    width:auto;
    overflow:hidden;
    display:flex;
    justify-content: center;
`