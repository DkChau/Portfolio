import styled from 'styled-components'
import {motion} from 'framer-motion'

export const EducationWrapper = styled.div`
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
    padding:.875rem 0;
    text-decoration:underline;
    text-decoration-thickness:3px;
`
export const ContentWrapper = styled(motion.div)`
    display:grid;
    grid-template-columns: 1fr;
    grid-auto-rows:auto;
    padding-top: .5rem;
    grid-gap: .2rem;
`
export const University = styled.div`
    font-size:1.7rem;
    font-weight:600;
`
export const Degree = styled.div`
    display:grid;
    grid-template-columns: auto auto 1fr;
    font-weight:500;
    font-size:1.3rem;
`
export const DegreeName = styled.div`
    padding-right:1.25rem;
`
export const DegreeGPA = styled.div`

`
export const DegreeDate = styled.div`
    justify-self:end;
`
export const Courses = styled.div`
    display:grid;
    grid-template-columns: auto 1fr;
    grid-auto-rows:1fr;
`
export const Name = styled.div`
    padding-right:.5rem;
    font-size:1.3rem;
    font-weight:500;
    padding-right:1rem;
`
export const Classes = styled.div`
    padding-top:.2rem;
`
export const SingleClass = styled.div`
    width:100%;
    white-space:'nowrap';
    margin-bottom:.375rem;
    font-size:1.1rem;
    font-weight:300;
`
export const AnimationWrapper = styled.div`
    width:100%;
    overflow:hidden;
    display:flex;
`

export const EducationContainer = styled.div`
    width:100%;
    height:auto;
    display: flex;
    justify-content: center;
    align-items: center;
    transition:all 0.3s ease-in-out;

    @media (max-width:1200px){
        ${Header}{
            font-size:1.9rem;
        }
        ${University}{
            font-size:1.6rem;
        }
        ${Degree}{
            font-size:1.2rem;
        }
        ${Name}{
            font-size:1.2rem;
        }
        ${SingleClass}{
            font-size:1rem;
        }

    }
    @media (max-width:992px){
        ${Header}{
            font-size:1.8rem;
        }
        ${University}{
            font-size:1.5rem;
        }
        ${Degree}{
            font-size:1.1rem;
        }
        ${Name}{
            font-size:1.1rem;
        }
        ${SingleClass}{
            font-size:.95rem;
        }

    }
    @media (max-width:768px){
        ${Header}{
            font-size:1.6rem;
        }
        ${University}{
            font-size:1.3rem;
        }
        ${Degree}{
            font-size:.95rem;
        }
        ${Name}{
            font-size:1rem;
        }
        ${SingleClass}{
            font-size:.8rem;
        }
    }
    @media (max-width:576px){
        width:90%;
        background:pink;
        margin:0 auto;
        justify-content:flex-start;
        ${EducationWrapper}{

        }
        ${Header}{
            font-size:1.6rem;
        }
        ${AnimationWrapper}{
            justify-content:center;
        }
        ${University}{
            font-size:1.1rem;
        }
        ${Degree}{
            display:flex;
            flex-direction:column;
            font-size:1rem;
            padding:1rem 0;
        }
        ${DegreeGPA}{
            padding-left:4rem;
        }
        ${DegreeDate}{
            padding-left:4rem;
        }
    }
`