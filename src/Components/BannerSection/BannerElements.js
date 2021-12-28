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
    align-items: center;
`
export const LinkHeader = styled.div`
    overflow:hidden;
`
export const BannerLink = styled(Link)`
    text-decoration:none;
    margin:.325rem 1rem;
    color:black;

    &.underline{
        position: relative; 
    }

    &.underline::before{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 3px;
        background-color: black;
        transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
    }
    &:hover{
        &.underline::before{
            width:100%;
        }
    }


`
export const BannerContainer = styled.div`
    width:100%;
    min-height:25rem;
    display:flex;
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