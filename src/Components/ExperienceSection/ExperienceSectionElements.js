import styled, {keyframes} from 'styled-components';

export const ExperienceContainer = styled.div`
    height:auto;
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
`
export const ExperienceWrapper = styled.div`
    width:700px;
    height:100%;
    margin:7rem auto;
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    grid-gap:3.5rem;

    @media (max-width:1200px){
        width:650px;
    }
    @media (max-width:992px){
        width:600px;
    }
    @media (max-width:768px){
        width:500px;
    }
    @media (max-width:576px){
        width:90%;
    }

`
export const HeadingWrapper = styled.div`
    width:100%;
    height:auto;
    text-align:center;
`
export const Heading = styled.h2`
    font-size:4rem;
`

