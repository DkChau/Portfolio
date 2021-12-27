import styled from 'styled-components'
import {motion} from 'framer-motion';

export const RectContainer = styled(motion.svg)`
    width:101%;
    height:101%;
    shape-rendering: crispEdges;
`
export const RectWrapper = styled(motion.rect)`
    fill:black;
    width:100%;
    height:100%;
    shape-rendering: crispEdges;
`