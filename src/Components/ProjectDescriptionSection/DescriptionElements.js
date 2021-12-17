import styled from 'styled-components'
import {motion} from 'framer-motion'

export const InfoWrapper = styled.div`
    height:90vh;
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:10rem 0 0 0;
`
export const InfoHeading = styled(motion.div)`
    font-size:2.5rem;
    font-weight:600;
`
export const InfoDescription = styled(motion.div)`
    width:60%;
    margin:0 auto;
    padding:3rem 0;
    font-size:1.2rem;
    font-family:'lora';
`
export const FeatureWrapper = styled.ul`

`
export const Feature = styled.li`

`
export const GridWrapper = styled.div`
    display:grid;
    width:70%;
    grid-template-columns: 1fr 1fr;
`
export const TagContent = styled(motion.div)`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const TagHeader = styled(motion.div)`
    font-size:1.4rem;
`
export const TagWrapper = styled(motion.div)`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows:1fr;
    grid-gap:1rem;
    padding-top:1rem;
`
export const SingleTag = styled(motion.div)`
    border:1px solid black;
    padding:.125rem .5rem;
    text-align:center;
`
export const LinkWrapper = styled(motion.div)`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
export const ProjectLink = styled.a`
    border:1px solid black;
    text-align:center;
    margin:7px 0;
    width:200px;
    border-radius:25px;
    padding:7px 3px;
    cursor:pointer;

    transition:all 0.3s ease-in-out;

    &:hover{
        background:black;
        color:white;
    }
`
export const AnimationWrapper = styled.div`
    overflow:hidden;
`