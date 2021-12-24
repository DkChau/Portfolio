import styled from 'styled-components'
import {motion} from 'framer-motion';

export const ExperienceWrapper = styled.div`
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    width:100%;
    align-items: start;

`   
export const Header = styled(motion.div)`
    display:flex;
    font-size:2rem;
    font-weight:700;
    text-decoration:underline;
    text-decoration-thickness:3px;
    padding:.875rem 0;

`
export const ContentWrapper = styled(motion.div)`
    display:grid;
    grid-template-columns: 1fr;
    grid-auto-rows:auto;
    padding-top: .5rem;
    grid-gap: .2rem;
`
export const ProjectName = styled.div`
    display:grid;
    grid-template-columns: 1fr auto;
    font-weight:600;
    font-size:1.5rem;
`
export const ProjectDetails = styled.ul`
    list-style-position:inside;
    list-style-type:disc;
    text-indent: -1rem;
    padding-left: 1rem;
`
export const ProjectNote = styled.li`
    font-size:1.2rem;
    padding-top:.65rem;
    font-weight:300;
`
export const Name = styled.p`
    

`
export const ProjectDate = styled.p`
    /* font-size:1.2rem; */
    /* padding-top:.15rem; */
`
export const AnimationWrapper = styled.div`
    overflow:hidden;
    display:flex;
`
export const ExperienceContainer = styled.div`
    width:100%;
    height:auto;
    display: flex;
    justify-content: center;
    align-items: center;
    transition:opacity 1.5s ease-in-out;

    @media (max-width:1200px){
        ${Header}{
            font-size:1.9rem;
        }
        ${ProjectName}{

        }
        ${ProjectNote}{

        }
    }
    @media (max-width:992px){
        ${Header}{
            font-size:1.8rem;
        }
        ${ProjectName}{
            font-size:1.2rem;
        }
        ${ProjectNote}{
            
        }
    }
    @media (max-width:768px){
        ${Header}{
            font-size:1.6rem;
        }
        ${ProjectName}{

        }
        ${ProjectNote}{
            
        }
    }
    @media (max-width:576px){
        width:90%;
        margin:0 auto;
        ${Header}{
            font-size:1.6rem;
        }
        ${AnimationWrapper}{
            justify-content:center;
        }
        ${ProjectName}{
            font-size:1rem;
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
            grid-gap:.5rem;
        }
        ${ProjectNote}{
            font-size:.8rem;
        }
        ${ProjectDate}{
            padding-left:1rem;
        }
    }
`