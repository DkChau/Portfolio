import React from 'react'
import {
    DragContainer,
    LinkWrapper,
    PageLink
} from './DragDownElements'
import {ImCross} from 'react-icons/im'

const DragDown = (props) => {

    const dragVariant = {
        hidden:{
            x:'-100%'
        },
        show:{
            x:0,
            transition:{
                duration:0.5
            }
        },
        exit:{
            x:'-100%',
            transition:{
                duration:0.5
            }
        }
    }

    const routes = [
        {to:'/about', text:'About'},
        {to:'/projects', text:'Projects'},
        {to:'/experience', text:'Experience'},
    ]

    return (
        <DragContainer variants={dragVariant} initial='hidden' exit='exit' show='show'>
            <ImCross onClick={props.cycleOpen}></ImCross>
            {routes.map((route,index)=>{
                return (
                    <LinkWrapper onClick={props.cycleOpen} key={`link${index}`}>
                        <PageLink to={route.to}>{route.text}</PageLink>
                    </LinkWrapper>
                )
            })}
        </DragContainer>
    )
}

export default DragDown
