import styled from 'styled-components'

export const ExperienceContainer = styled.div`
    width:100%;
    height:auto;
    display: flex;
    justify-content: center;
    align-items: center;
    transition:opacity 1.5s ease-in-out;
`
export const ExperienceWrapper = styled.div`
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
    justify-self:center;
`
export const ContentWrapper = styled.div`
    display:grid;
    grid-template-columns: 1fr;
    grid-auto-rows:auto;
    padding-top: .5rem;
    font-size:1.5rem;
    grid-gap: .2rem;
`
export const ProjectName = styled.div`
    display:grid;
    grid-template-columns: 1fr auto;
    font-weight:600;
`
export const ProjectDetails = styled.ul`
    list-style-position:inside;
    list-style-type:disc;
    text-indent: -1em;
    padding-left: 1em;
`
export const ProjectNote = styled.li`
    font-size:1.2rem;
    padding-top:.65rem;
    font-weight:300;
`
export const Name = styled.p`
    

`
export const Date = styled.p`
    font-size:1.2rem;
    padding-top:.15rem;
`