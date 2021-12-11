import styled from 'styled-components'
import {motion} from 'framer-motion'

export const ViewContainer = styled.div`
    width:100%;
    height:100%;
    min-height:100vh;
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
export const ViewImage = styled.img`
    height:100%;
    width:auto;
`
export const InfoWrapper = styled.div`
    height:auto;
    width:100%;
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: 10vh auto auto auto;
`
export const InfoHeading = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    font-size:1.7rem;
`
export const InfoDescription = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width:60%;
    margin:0 auto;
`
export const TagHeader = styled.div`
    font-size:1.4rem;
`
export const TagWrapper = styled.div`
    display:flex;
`
export const SingleTag = styled.div`

`
export const LinkWrapper = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    width:100%;
    height:100%;
    justify-content: center;
    align-content:center;
`
export const ProjectLink = styled.a`

`