import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const IndividualContainer = styled.div`
    width:100%;
    max-width:1400px;
    margin:0 auto;
    padding:120px 0;
`
export const IndividualWrapper = styled.div`
    width:100%;
    margin:0 auto;
    display:grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: ${(props)=> props.imgFirst ? `'image text'` : `'text image'`};
`
export const ImageWrapper = styled.div`
    display:flex;
    width:500px;
    height:100%;
    overflow:hidden;
    align-items: center;
    grid-area:image;
`
export const ProjectImage = styled.img`
    height:400px;

`
export const ContentWrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content: ${(props)=> props.imgFirst ? 'flex-end' : 'flex-start'};
    align-items: center;
    
`
export const ContentText = styled.div`
    display:grid;
    width:80%;
    height:auto;
    align-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-area:text;
`
export const Title = styled.h2`
    font-size:2.4rem;
    font-weight:700;
`
export const SubHead = styled.h4`
    font-weight:600;
    color:#ff0000;
`
export const Text = styled.p`
    font-size:1.2rem;
    font-family:'lora';
    padding:20px 0;
`
export const ProjectLink=styled.span`
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
    font-family:'lora';

    &:hover{
        ${ArrowWrapper}{
            transform:translateY(-32px);
        }
    }
`