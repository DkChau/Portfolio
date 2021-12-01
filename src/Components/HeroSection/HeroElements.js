import styled from 'styled-components';
import {motion} from 'framer-motion';

export const HeroContainer = styled(motion.div)`
    background:#ffffff;
    height:100vh;
`
export const HeroWrapper = styled(motion.div)`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    height:100%;
`
export const HeroText = styled(motion.h1)`
    font-size:6rem;
    color:#000000;
    font-weight:500;
`
export const HeroSubText = styled(motion.h2)`
    font-size:2.3rem;
    font-weight:300;
    color:#000000;
    font-family:'raleway'
`