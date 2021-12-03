import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const IndividualContainer = styled.div`
    width:100%;
    height:100%;
    max-width:1000px;
    margin:0 auto;
`
export const IndividualWrapper = styled.div`
    width:80%;
    margin:0 auto;
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
`
export const ImageWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
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
    align-items: center;;
`
export const ContentText = styled.div`
    display:flex;
    flex-direction: column;
    width:80%;
    margin:0 auto;
    align-items: center;
`
export const Title = styled.h2`
    font-size:2rem;
`
export const Text = styled.p`
    font-size:1.3rem;
`
export const LinkWrapper = styled.div`

`
export const ProjectLink = styled(Link)`
    font-size:1.1rem;
    color:black;
    text-decoration:none;
`