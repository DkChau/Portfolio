import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion'

export const DragContainer = styled(motion.div)`
    position:absolute;
    top:0;
    left:0;
    z-index:999;
    color:white;
    height:100vh;
    width:100%;
    /* padding-top: 1rem; */
`
export const DragWrapper = styled.div`
    width:100%;
    margin:0 auto;
    display:grid;
    height:100%;
    grid-template-columns: 1fr;
    grid-template-rows: 70px 1fr 1fr 1fr;
`
export const IconWrapper = styled(motion.div)`
    font-size:2rem;
    width:100%;
    height:100%;
    background:black;
`
export const PositionWrapper = styled.div`
    width:90%;
    margin:0 auto;
    display:flex;
    justify-content: flex-end;
    align-items:flex-end;
`
export const LinkWrapper = styled(motion.div)`
    background:black;
    display:flex;
    justify-content: center;
    align-items:center;
`
export const PageLink = styled(Link)`
    text-decoration:none;
    color:white;
    font-size:2.5rem;
    font-weight:600;
    &:hover{
        text-decoration:line-through;
        text-decoration-thickness:3px;
    }
`
