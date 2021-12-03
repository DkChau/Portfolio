import styled from 'styled-components'
import {motion} from 'framer-motion';

export const RectContainer = styled(motion.svg)`
    width:100%;
    height:100%;
`
export const RectWrapper = styled(motion.rect)`
    fill:black;
    border-bottom:1px solid red;
    width:100%;
    height:100%;
    shape-rendering: crispEdges;
    stroke: #646464;
    stroke-width: 1px;
    stroke-linejoin: round;
`