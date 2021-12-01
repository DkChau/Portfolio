import React from 'react'
import {
    NavContainer,
    NavLink,
    NavLinkWrapper,
    NavLogo,
    NavLogoWrapper,
    NavWrapper,
    LinkWrapper
} from './NavBarElements'

const NavBar = () => {

    const routes = [
        {to:'/about', text:'About'},
        {to:'/projects', text:'Projects'},
        {to:'/experience', text:'Experience'},
    ]
    
    return (
        <NavContainer>
            <NavWrapper>
                <NavLogoWrapper>
                    <NavLogo to='/'>DKC</NavLogo>
                </NavLogoWrapper>
                <NavLinkWrapper>
                    {routes.map((route,index)=>{
                        return (
                            <LinkWrapper key={`route${index}`}>
                                <NavLink to={route.to}>{route.text}</NavLink>
                            </LinkWrapper>
                        )
                    })}
                </NavLinkWrapper>
            </NavWrapper>
        </NavContainer>
    )
}

export default NavBar
