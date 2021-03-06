import styled from 'styled-components';
import {motion} from 'framer-motion';

export const UniqueContainer = styled(motion.div)`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    min-height:100vh;
    overflow-x:hidden;
`
export const UniqueWrapper = styled(motion.div)`
    height:100%;
    
`
export const ScreenWrapper = styled.div`
    position:relative;
`