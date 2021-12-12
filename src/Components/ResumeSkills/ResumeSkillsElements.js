import styled from 'styled-components'

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
    grid-template-columns: 300px 1fr;
    grid-template-rows: 1fr;
    width:70%;

`   
export const Header = styled.p`
    display:flex;
    font-size:2rem;
    padding:0 3rem;
    font-weight:700;
    justify-self: center;
`
export const ContentWrapper = styled.div`
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