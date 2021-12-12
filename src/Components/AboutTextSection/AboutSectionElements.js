import styled, {keyframes} from 'styled-components';

export const AboutContainer = styled.div`
    width:100%;
    height:50vh;
    background:${props=>props.bgColor};
    color:${props=>props.txtColor};
`
export const AboutWrapper = styled.div`
    width:70%;
    height:100%;
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
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
`
export const Text = styled.p`
    font-size:1.5rem;
    font-weight:300;
`
export const HeaderWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    grid-area:header;
`
export const Header = styled.p`
    font-size:4rem;
    font-weight:600;
`
export const Wrapper = styled.span`
    opacity:1;
    display:flex;
`