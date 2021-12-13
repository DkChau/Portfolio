import React, {useState} from 'react'
import {
    NavContainer,
    NavLogo,
    NavLogoWrapper,
    NavWrapper,
    IconWrapper
} from './NavBarElements'
import Logo3 from '../../Images/Logo3.svg'
import {IconContext} from 'react-icons'
import {GiHamburgerMenu} from 'react-icons/gi'
import DragDown from '../DragDown'
import {AnimatePresence, useCycle} from 'framer-motion'

const NavBar = (props) => {

    // const [toggleDrag , setToggleDrag] = useState(false);
  
    // const toggle = () =>{
    //   setToggleDrag(!toggleDrag)
    // }
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
            <AnimatePresence>
                {
                    open && (
                        <DragDown cycleOpen={cycleOpen}/>
                    )
                }
            </AnimatePresence>
            <NavWrapper>
                <NavLogoWrapper to='/'>
                    <NavLogo src={Logo3}></NavLogo>
                </NavLogoWrapper>
                <IconWrapper onClick={cycleOpen}>
                    <GiHamburgerMenu/>
                </IconWrapper>

            </NavWrapper>
        </NavContainer>
    )
}

export default NavBar
