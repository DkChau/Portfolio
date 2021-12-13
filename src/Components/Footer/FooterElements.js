import styled from 'styled-components'
import {motion} from 'framer-motion'

export const FooterContainer = styled.div`
    height:70px;
    width:100%;
    /* border-top:1px solid white; */
    background:black;
    color:white;
`
export const FooterWrapper = styled(motion.div)`
    height:100%;
    width:80%;
    margin:0 auto;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
`
export const LogoWrapper = styled.div`
    justify-self:center;
`
export const Logo = styled.div`

`
export const TextWrapper = styled.div`
    justify-self:center;
`
export const Text = styled.div`

`
export const LinkWrapper = styled.div`
    justify-self:center;
`
export const PageLink = styled.a`

`