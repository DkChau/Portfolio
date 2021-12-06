import styled from 'styled-components';
import {motion} from 'framer-motion';

export const HeroContainer = styled(motion.div)`
    background:#ffffff;
    height:100vh;
    position:relative;
    background:transparent;
`
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
export const AnimationWrapper = styled(motion.div)`
    height:auto;
    width:auto;
    overflow-y:hidden;
    background:black;
    padding:0 20px;
    margin:20px 0;
`