import styled from 'styled-components';
import {motion} from 'framer-motion';

export const ProjectWrapper = styled(motion.div)`
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
export const ProjectText = styled(motion.h1)`
    font-size:3.4rem;
    color:white;
    font-weight:700;
`
export const ProjectSubText = styled(motion.h2)`
    font-size:2.3rem;
    font-weight:300;
    color:#000000;
    font-family:'lora';

`
export const AnimationWrapper = styled(motion.div)`
    height:auto;
    width:auto;
    overflow-y:hidden;
    background:black;
    padding:0 20px;
    margin:20px 0;
`
export const ProjectContainer = styled(motion.div)`
    background:#ffffff;
    height:100vh;
    position:relative;
    background:transparent;
    transition:all 0.3s ease-in-out;
    width:85%;
    margin:0 auto;
    text-align:center;

    @media (max-width:1200px){
        ${ProjectText}{
            font-size:3.2rem;
        }
        ${ProjectSubText}{
            font-size:2.1rem;
        }
    }
    @media (max-width:992px){
        ${ProjectText}{
            font-size:3rem;
        }
        ${ProjectSubText}{
            font-size:1.9rem;
        }
      
    }
    @media (max-width:768px){

    }
    @media (max-width:576px){
        ${ProjectText}{
            font-size:2.4rem;
        }
        ${ProjectSubText}{
            font-size:1.7rem;
        }
    }
`