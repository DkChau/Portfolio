import styled from 'styled-components'
import {motion} from 'framer-motion'

export const InfoContainer = styled.div`
    width:100%;
    background:white;
`
export const InfoHeading = styled(motion.div)`
    font-size:2.5rem;
    font-weight:600;
`
export const InfoDescription = styled(motion.div)`
    width:100%;
    margin:0 auto;
    padding:3rem 0;
    font-size:1.2rem;
    font-family:'lora';
    white-space:pre-line;
`
export const FeatureWrapper = styled.ul`

`
export const Feature = styled.li`

`
export const GridWrapper = styled.div`
    display:grid;
    width:100%;
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
export const GridLinkWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
`
export const ProjectLink = styled.a`
    border:1px solid black;
    text-align:center;
    margin:7px 0;
    width:200px;
    border-radius:25px;
    padding:7px 3px;
    cursor:pointer;
    text-decoration:none;
    color:black;

    transition:all 0.3s ease-in-out;

    &:hover{
        background:black;
        color:white;
    }
`
export const AnimationWrapper = styled.div`
    overflow:hidden;
`
export const InfoWrapper = styled.div`
    height:auto;
    width:900px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:10rem 0 0 0;
    margin:0 auto;
    background:white;

    @media (max-width:1200px){

    }
    @media (max-width:992px){
        width:700px;
        ${TagWrapper}{
            grid-template-columns: 1fr 1fr 1fr;
        }
        ${TagHeader}{
            font-size:1.2rem;
        }
    }
    @media (max-width:768px){
        width:500px;
        padding:7rem 0 0 0;
        ${GridWrapper}{
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
            grid-gap:2rem;
        }
        ${InfoHeading}{
            font-size:1.6rem;
        }
        ${InfoDescription}{
            font-size:1.2rem;
            text-align:center;
        }
        ${TagHeader}{
            font-size:1.4rem;
        }
        ${SingleTag}{
            font-size:1rem;
        }
        ${ProjectLink}{
            font-size:1rem;
            width:200px;
        }
    }
    @media (max-width:576px){

        width:90%;
        padding:7rem 0 0 0;
        ${InfoHeading}{
            font-size:1.4rem;
        }
        ${InfoDescription}{
            font-size:1rem;
            text-align:center;
        }
        ${TagHeader}{
            font-size:1.2rem;
        }
        ${SingleTag}{
            font-size:.85rem;
        }
        ${ProjectLink}{
            font-size:.9rem;
            width:150px;
        }
    }
`