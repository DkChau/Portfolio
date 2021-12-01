import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

export const NavContainer = styled.div`
    width:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    background:transparent;
    position:fixed;
    top:0;
    left:0;
    z-index:999;
`
export const NavWrapper = styled.div`
    display:grid;
    width:90%;
    height:auto;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    border-bottom:3px solid #dadada;
    padding:10px 0;
`
export const NavLogoWrapper = styled.div`

`
export const NavLogo = styled(Link)`
    text-decoration:none;
    color:red;
    font-size:2rem;
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
    color:red;
    font-size:1.2rem;
    font-weight:300;
    font-family:'raleway'
`