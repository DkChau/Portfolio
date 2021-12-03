import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

export const NavContainer = styled(motion.div)`
    width:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    background:transparent;
    position:absolute;
    top:0;
    left:0;
    z-index:1;
`
export const NavWrapper = styled.div`
    display:grid;
    width:50%;
    max-width:500px;
    height:auto;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    padding:10px 0;
`
export const NavLogoWrapper = styled(Link)`
    text-decoration:none;
    font-size:2rem;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const NavLogo = styled.img`
    height:70px;
    width:auto;
`
export const NavLinkWrapper = styled.div`
    display:flex;
    justify-self:end;
`
export const LinkWrapper = styled.div`
    padding:0 15px;
    display:flex;
    justify-content: center;
    align-items: center;
`
export const NavLink = styled(Link)`
    text-decoration:none;
    color:black;
    font-size:1.5rem;
    font-weight:300;
    font-family:'raleway'
`