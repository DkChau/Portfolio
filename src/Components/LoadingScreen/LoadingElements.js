import styled from 'styled-components';
import {motion} from 'framer-motion';

export const LoadingContainer = styled(motion.div)`
    display:grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    height:100vh;
    background:transparent;
    position:absolute;
    top:0;
    left:0;
    width:100%;
    z-index:0;
`
