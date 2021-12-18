import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

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
    overflow:hidden;
`
export const BannerText = styled(motion.div)`
    font-size:2.8rem;
    font-weight:600;
    padding:2rem 0;
`
export const BannerLinkWrapper = styled(motion.div)`
    display:flex;
    font-size:1.3rem;
    /* justify-content: center; */
    align-items: center;
`
export const LinkHeader = styled.div`
    overflow:hidden;
`
export const BannerLink = styled(Link)`
    text-decoration:none;
    padding:.325rem 1rem;
    color:black;
`
export const BannerContainer = styled.div`
    width:100%;
    /* border:1px solid black; */
    min-height:25rem;
    display:flex;
    /* justify-content: center; */
    align-items:center; 
    background:white;
    transition:all 0.3s ease;

    @media (max-width:992px){
        min-height:20rem;

        ${BannerText}{
            font-size:2.1rem;
        }
    }
    @media (max-width:768px){
        ${BannerText}{
            font-size:1.6rem;
            text-align:center;
        }
        ${BannerLinkWrapper}{
            font-size:1rem;
        }
    }
`