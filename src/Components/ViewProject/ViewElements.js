import styled from 'styled-components'
import {motion} from 'framer-motion'

export const ViewContainer = styled.div`
    width:100%;
    min-height:100vh;
`
export const ViewWrapper = styled.div`
    width:100%;
    height:auto;
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
