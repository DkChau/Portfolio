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
import Logo from '../../Images/Logo.svg'

const NavBar = () => {
    
    const navVariant = {
        hidden:{y:'-100vh'},
        show:{
            y:0, transition:{
                delay:1.5,
                type:'tween'
            }
        },
        exit:{
            y:'-100vh', transition:{
                duration:0.4,
                type:'tween'
            }
        },
    }
    const routes = [
        {to:'/about', text:'About'},
        {to:'/projects', text:'Projects'},
        {to:'/experience', text:'Experience'},
    ]
    
    return (
        <NavContainer
            variants={navVariant}
            initial='hidden'
            animate='show'
            exit='exit'
        >
            <NavWrapper>
                <NavLogoWrapper to='/'>
                    <NavLogo src={Logo}></NavLogo>
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
