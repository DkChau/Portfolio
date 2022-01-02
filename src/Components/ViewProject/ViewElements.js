import styled from 'styled-components'
import {motion} from 'framer-motion'

export const ViewContainer = styled.div`
    width:100%;
    position: relative;
`
export const ViewWrapper = styled.div`
    width:100%;
    height:100%;
    max-height:100vh;
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
`
export const ViewImageWrapper = styled.div`
    height:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    overflow-y:hidden;

`
export const ViewImage = styled(motion.img)`
    width:100%;
    height:auto;
`
export const BottomRow = styled(motion.div)`
    display:flex;
    justify-content: center;
    align-items: center;
    font-weight:700;
    font-size:2rem;
    color:white;
    padding:1rem 0;

    @media (max-width:1200px){
        font-size:1.7rem;
        letter-spacing: 10px;
    }
    @media (max-width:992px){
        font-size:1.4rem;
        letter-spacing: 10px;
    }
    @media (max-width:768px){
        font-size:1.1rem;
        letter-spacing: 10px;
    }
    @media (max-width:576px){
        font-size:1rem;
        letter-spacing: 5px;
    }
`
export const AnimationWrapper = styled.div`
    overflow:hidden;
    background:black;
`
