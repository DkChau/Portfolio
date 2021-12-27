import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion'

export const DragWrapper = styled.div`
    width:100%;
    margin:0 auto;
    display:grid;
    height:100%;
    grid-template-columns: 1fr;
    grid-template-rows: calc(70px + 1rem) 1fr 1fr 1fr;
`
export const IconWrapper = styled(motion.div)`
    font-size:2rem;
    width:100%;
    height:100%;
    background:black;
    padding:10px 0;
    display:flex;
    justify-content:flex-end;
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
    height:101%;
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

export const DragContainer = styled(motion.div)`
    position:absolute;
    top:0;
    left:0;
    z-index:999;
    color:white;
    height:100vh;
    width:100%;
    transition: al 0.3s ease-in-out;

    @media (max-width:1200px){
        ${IconWrapper}{
            font-size:1.8rem;
        }
        ${PageLink}{
            font-size:2.3rem;
        }
    }

    @media (max-width:992px){
        ${IconWrapper}{
            font-size:1.6rem;
        }
        ${PageLink}{
            font-size:2.1rem;
        }
    }

    @media (max-width:768px){
        ${IconWrapper}{
            font-size:1.4rem;
        }
        ${PageLink}{
            font-size:1.9rem;
        }
    }

    @media (max-width:576px){
        ${IconWrapper}{
            font-size:1.2rem;
        }
        ${PageLink}{
            font-size:1.7rem;
        }
    }
`
