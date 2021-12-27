import styled from 'styled-components';
import {motion} from 'framer-motion';

export const CardContainer = styled.div`
    width:100%;
    padding:1rem 0;
    height:80vh;
    display:flex;
    align-items: center;
`
export const CardWrapper = styled(motion.div)`
    border:3px solid black;
    width:80%;
    height:80%;
    margin: 0 auto;
    max-width:50rem;
    max-height:26.5rem;
    display:flex;
    align-items: center;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
export const CardGrid = styled.div`
    width:95%;
    height:90%;
    margin:0 auto;
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
`
export const CardHeadingWrapper = styled.div`

`
export const CardContent = styled.div`
`
export const CardSection = styled.div`
    font-size:1.2rem;
    font-weight:600;
    border-bottom: 2px solid black;
`
export const CardText = styled.div`
    padding:5px 0;
    font-size:1.1rem;

`
export const CardMiddleRow = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-gap:3rem;
`
export const CardBottomRow = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-gap:3rem;
`