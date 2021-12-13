import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion'

export const DragContainer = styled(motion.div)`
    position:absolute;
    top:0;
    left:0;
    z-index:999;
    background:red;
    height:100vh;
    width:100%;
    
`
export const LinkWrapper = styled.div`

`
export const PageLink = styled(Link)`
    
`