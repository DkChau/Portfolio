import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const IndividualContainer = styled.div`
    width:100%;
    max-width:1400px;
    border:1px solid black;
    margin:100px auto;
`
export const IndividualWrapper = styled.div`
    width:100%;
    margin:0 auto;
    display:grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
`
export const ImageWrapper = styled.div`
    display:flex;
    width:600px;
    height:400px;
    overflow:hidden;
    border:1px solid black;
`
export const ProjectImage = styled.img`
    height:400px;

`
export const ContentWrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    
`
export const ContentText = styled.div`
    display:grid;
    width:80%;
    height:auto;
    margin:0 auto;
    align-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
`
export const Title = styled.h2`
    font-size:3rem;
`
export const Text = styled.p`
    font-size:1.3rem;
    font-family:'raleway';
    padding:20px 0;
`
// export const LinkWrapper = styled.div`
//     display:flex;
// `
// export const ProjectLink = styled(Link)`
//     font-size:1.1rem;
//     color:black;
//     text-decoration:none;
// `

export const ProjectLink=styled.span`
    font-weight:400;
    font-size: 1rem;
    display:block;
    align-self:center;
`
export const ArrowWrapper = styled.span`
    display:grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    width:100%;
    height:64px;
    transition:transform 0.3s ease;
    font-size:1rem;
    justify-content:center;
    align-content:center;
    text-align:center;
`
export const Arrow = styled.span`
    display:flex;
    align-self:center;
    justify-self: center;
    justify-content: center;
    font-size:32px;
`
export const LinkWrapper = styled(Link)`
    display:flex;
    border:1px solid black;
    height:32px;
    width:150px;
    text-decoration:none;
    color: #000000;
    overflow-y: hidden;
    &:hover{
        ${ArrowWrapper}{
            transform:translateY(-32px);
        }
    }
`