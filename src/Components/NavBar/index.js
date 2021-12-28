import React from 'react'
import {
    NavContainer,
    NavLogo,
    NavLogoWrapper,
    NavWrapper,
    IconWrapper,
    HamburgMenu
} from './NavBarElements'
import Logo from '../../Images/Logo.svg'
import Hamburg from '../../Images/Hamburg.svg'
import DragDown from '../DragDown'
import {AnimatePresence, useCycle} from 'framer-motion'

const NavBar = (props) => {
    const [open, cycleOpen] = useCycle(false, true);

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
    
    return (
        <NavContainer
            variants={navVariant}
            initial='hidden'
            animate='show'
            exit='exit'
        >
            <AnimatePresence exitBeforeEnter>
                {
                    open && (
                        <DragDown cycleOpen={cycleOpen}/>
                    )
                }
            </AnimatePresence>
            <NavWrapper>
                <NavLogoWrapper to='/'>
                    <NavLogo src={Logo}></NavLogo>
                </NavLogoWrapper>
                <IconWrapper onClick={cycleOpen}>
                    <HamburgMenu src={Hamburg}/>
                </IconWrapper>
            </NavWrapper>
        </NavContainer>
    )
}

export default NavBar
