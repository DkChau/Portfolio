import styled from 'styled-components';
import {motion} from 'framer-motion'

export const AboutContainer = styled.div`
    width:100%;
    height:auto;
    padding:3rem 0;
    background:${props=>props.bgColor};
    color:${props=>props.txtColor};
`
export const AboutWrapper = styled.div`
    width:80%;
    height:100%;
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    justify-content: center;
    align-content: center;
    margin: 0 auto;
    grid-template-areas: ${props=>props.headerStart ? "'header text'" : "'text header'"};
`
export const TextWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    height:100%;
    grid-area:text;
    max-width:37.5rem;
    margin:0 auto;
    overflow: hidden;
`
export const Text = styled(motion.p)`
    font-size:1.3rem;
    font-weight:300;
    font-family:'lora';
    white-space:pre-line;
`
export const HeaderWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    grid-area:header;
    overflow:hidden;
`
export const Header = styled(motion.p)`
    font-size:3.3rem;
    font-weight:600;
`
export const Wrapper = styled.span`
    opacity:1;
    display:flex;
`