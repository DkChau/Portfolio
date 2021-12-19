import styled, {keyframes} from 'styled-components';

export const ExperienceContainer = styled.div`
    height:auto;
    padding:5% 0;
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
`
export const ExperienceWrapper = styled.div`
    width:60%;
    height:100%;
    margin:0 auto;
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    grid-gap:3.5rem;

    @media (max-width:1200px){
	    background:pink;
        width:70%;
    }
    @media (max-width:992px){
        background:green;
        width:80%;
    }
    @media (max-width:768px){
        background:pink;
        width:90%;
    }
    @media (max-width:576px){
        background:green;
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

