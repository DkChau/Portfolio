import styled from 'styled-components'
import {motion} from 'framer-motion'

export const SkillsContainer = styled.div`
    width:100%;
    height:auto;
    display: flex;
    justify-content: center;
    align-items: center;
    transition:opacity 1.5s ease-in-out;

`
export const SkillsWrapper = styled.div`
    display:grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 1fr;
    width:70%;
    align-items: start;

`   
export const Header = styled(motion.div)`
    display:flex;
    font-size:2rem;
    padding:0 3rem;
    font-weight:700;
    justify-self: center;
`
export const ContentWrapper = styled(motion.div)`
    display:grid;
    grid-template-columns: 1fr;
    grid-auto-rows:auto;
    padding-top: .5rem;
    font-size:1.5rem;
    grid-gap: .2rem;
`
export const Row = styled.div`
    display:flex;
`
export const RowHeader = styled.p`
    font-weight:600;
`
export const List = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`
export const Item = styled.span`
    padding-left: .8rem;
    font-size:1.2rem;
    font-weight:300;
`
export const AnimationWrapper = styled.div`
    width:auto;
    overflow:hidden;
    display:flex;
    justify-content: center;
`