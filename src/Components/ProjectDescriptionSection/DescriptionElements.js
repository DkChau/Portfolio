import styled from 'styled-components'
import {motion} from 'framer-motion'

export const InfoWrapper = styled.div`
    height:100vh;
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const InfoHeading = styled.div`
    font-size:2.5rem;
    font-weight:600;
`
export const InfoDescription = styled.div`
    width:60%;
    margin:0 auto;
    padding:2rem 0;
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
export const TagContent = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const TagHeader = styled.div`
    font-size:1.4rem;
`
export const TagWrapper = styled.div`
    display:flex;

`
export const SingleTag = styled.div`

`
export const LinkWrapper = styled.div`
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