import styled from 'styled-components';
import {motion} from 'framer-motion';

export const ScreenContainer = styled(motion.div)`
    height:100%;
    width:100%;
    position:absolute;
    left:0;
    top:0;
    z-index:999;
    background:black;
`