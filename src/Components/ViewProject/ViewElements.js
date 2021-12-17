import styled from 'styled-components'
import {motion} from 'framer-motion'

export const ViewContainer = styled.div`
    width:100%;
    min-height:100vh;
    height:100vh;
`
export const ViewWrapper = styled.div`
    width:100%;
    height:100%;
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
`
export const ViewImageWrapper = styled.div`
    height:90vh;
    display:flex;
    justify-content: center;
    align-items: center;

`
export const ViewImage = styled(motion.img)`
    height:100%;
`
export const BottomRow = styled(motion.div)`
    height:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    font-weight:700;
    font-size:2rem;
    color:white;
    letter-spacing: 10px;
`
export const AnimationWrapper = styled.div`
    overflow:hidden;
    background:black;
`
