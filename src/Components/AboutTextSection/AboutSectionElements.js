import styled from 'styled-components';
import {motion} from 'framer-motion'

export const AboutWrapper = styled.div`
    width:80%;
    height:100%;
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    justify-content: center;
    align-content: center;
    margin: 0 auto;
    /* grid-gap:10rem; */
    grid-template-areas: ${props=>props.headerStart ? "'header text'" : "'text header'"};
`
export const TextWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    height:100%;
    width:100%;
    max-width:50rem;
    grid-area:text;
    margin:0 auto;
    overflow: hidden;
`
export const Text = styled(motion.p)`
    font-size:1.2rem;
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
export const Header = styled.p`
    font-size:3rem;
    font-weight:600;
    overflow:hidden;
    text-align:center;
`
export const Wrapper = styled(motion.span)`
    display:flex;
`
export const AboutContainer = styled.div`
    width:100%;
    height:auto;
    padding:5rem 0;
    background:${props=>props.bgColor};
    color:${props=>props.txtColor};

    @media (max-width:1368px){
        ${AboutWrapper}{
            grid-template-areas: 'header' 'text';
            grid-template-columns: 1fr;
            grid-gap:0;
        }
        ${Header}{
            font-size:2.4rem;
        }
        ${Text}{
            font-size:1.2rem;
            max-width:45rem;
            text-align:center;
        }
    }
    @media (max-width:992px){
        ${AboutWrapper}{
            grid-template-areas: 'header' 'text';
            grid-template-columns: 1fr;
        }
        ${Header}{
            font-size:1.3rem;
        }
        ${Text}{
            font-size:1rem;
        }
    }
`