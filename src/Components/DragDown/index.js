import React from 'react'
import {
    DragContainer,
    LinkWrapper,
    PageLink,
    IconWrapper,
    DragWrapper,
    PositionWrapper,
} from './DragDownElements'
import {ImCross} from 'react-icons/im'

const DragDown = (props) => {

    const dragVariant = {
        hidden:{
            // x:'-100%'
        },
        show:{
            // x:0,
            transition:{
                when:'beforeChildren',
                staggerChildren:0.2,
            }
        },
        exit:{
            x:'-100%',
            transition:{
                when:'afterChildren',
                staggerChildren:0.2,
            }
        }
    }

    const sectionVariant = {
        hidden:{
            x:'-100%'
        },
        show:{
            x:0,
            transition:{
                // duration:0.5
                type:'tween',
                ease:'easeInOut'
            }
        },
        exit:{
            x:'-100%',
            transition:{
                // duration:0.5
                type:'tween',
                ease:'easeInOut'
            }
        }
    }

    const routes = [
        {to:'/about', text:'About'},
        {to:'/projects', text:'Projects'},
        {to:'/experience', text:'Experience'},
    ]

    return (
        <DragContainer variants={dragVariant} initial='hidden' animate='show' exit='exit' >
            <DragWrapper> 
                <IconWrapper variants={sectionVariant}>
                    <PositionWrapper>
                        <ImCross onClick={props.cycleOpen}></ImCross>
                    </PositionWrapper>
                </IconWrapper>

                {routes.map((route,index)=>{
                    return (
                        <LinkWrapper variants={sectionVariant} key={`link${index}`}>
                            <PageLink onClick={props.cycleOpen} to={route.to}>{route.text}</PageLink>
                        </LinkWrapper>
                    )
                })}
            </DragWrapper> 
        </DragContainer>
    )
}

export default DragDown
