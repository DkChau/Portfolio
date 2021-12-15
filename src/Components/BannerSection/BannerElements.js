import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

export const BannerContainer = styled.div`
    width:100%;
    /* border:1px solid black; */
    min-height:20rem;
    display:flex;
    justify-content: center;
    align-items:center;
`
export const BannerWrapper = styled.div`
    width:80%;
    margin:0 auto;
    display:flex;
    justify-content: center;
`
export const BannerContent = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
`
export const BannerTextWrapper = styled.div`

`
export const BannerText = styled.div`
    font-size:3rem;
    font-weight:600;
    padding:2rem 0;
`
export const BannerLinkWrapper = styled.div`
    display:flex;
    font-size:1.3rem;
    /* justify-content: center; */
    align-items: center;
`
export const LinkHeader = styled.div`
`
export const BannerLink = styled(Link)`
    text-decoration:none;
    padding:.325rem 1rem;
    color:black;
`