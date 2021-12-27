import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

export const HeroWrapper = styled(motion.div)`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
`
export const HeroText = styled(motion.h1)`
    font-size:3.4rem;
    color:white;
    font-weight:700;
`
export const HeroSubText = styled(motion.h2)`
    font-size:2.3rem;
    font-weight:300;
    color:#000000;
    font-family:'lora';

`
export const LinkWrapper = styled(motion.div)`
    display:flex;
    justify-content: center;
    align-items:center;
    width:100%;
`
export const ProjectLink = styled(Link)`
    font-size:1.6rem;
    text-decoration:none;
    font-family:'lora';
    color:black;
    padding:2rem 1rem;
`
export const AnimationWrapper = styled(motion.div)`
    height:auto;
    width:auto;
    overflow-y:hidden;
    background:black;
    padding:0 20px;
    margin:20px 0;
`
export const HeroContainer = styled(motion.div)`
    background:#ffffff;
    height:100vh;
    position:relative;
    background:transparent;
    transition:all 0.3s ease-in-out;

    @media (max-width:1200px){
        ${HeroText}{
            font-size:3.2rem;
        }
        ${HeroSubText}{
            font-size:2.1rem;
        }
        ${ProjectLink}{
            font-size:1.4rem;
        } 
    }
    @media (max-width:992px){
        ${HeroText}{
            font-size:3rem;
        }
        ${HeroSubText}{
            font-size:1.9rem;
        }
        ${ProjectLink}{
            font-size:1.2rem;
        }       
    }
    @media (max-width:768px){

    }
    @media (max-width:576px){
        ${HeroText}{
            font-size:2.4rem;
        }
        ${HeroSubText}{
            font-size:1.7rem;
        }
        ${ProjectLink}{
            font-size:1rem;
        } 
    }
`