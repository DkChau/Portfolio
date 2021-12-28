import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

export const NavWrapper = styled.div`
    display:flex;
    width:90%;
    margin:1rem auto 0 auto;
    height:70px;
    align-items: flex-end;
    justify-content: space-between;
    padding:10px 0;
`
export const NavLogoWrapper = styled(Link)`
    text-decoration:none;
    display:flex;
    justify-content:center;
    align-items:center;

    @media (max-width:768px){
        display:none;
    }

`
export const NavLogo = styled.img`
    height:4rem;
    width:auto;
    transition: all 0.3s ease-in-out;

    &:hover{
        transform:scale(1.1) rotate(-10deg);
    }
`
export const IconWrapper = styled.div`
    color:red;
    display:flex;
`
export const HamburgMenu = styled.img`
    transition: all 0.3s ease-in-out;
    &:hover{
        transform:scale(1.1);
    }
`
export const NavContainer = styled(motion.div)`
    width:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    background:transparent;
    position:fixed;
    top:0;
    left:0;
    z-index:1;

    transition: all 0.3s ease-in-out;

    @media (max-width:1200px){
        ${NavLogo}{
            width:3.5rem;
        }
        ${HamburgMenu}{
            width:2.8rem;
        }
    }

    @media (max-width:992px){
        ${HamburgMenu}{
            width:2.7rem;
        }
        ${NavLogo}{
            width:3rem;
        }
    }

    @media (max-width:768px){
        ${HamburgMenu}{
            width:2.6rem;
        }
        ${NavWrapper}{
            justify-content:flex-end;
        }
    }

    @media (max-width:576px){
        ${HamburgMenu}{
            width:2.5rem;
        }
    }
`