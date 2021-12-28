import styled from 'styled-components'
import {motion} from 'framer-motion'

export const FooterWrapper = styled(motion.div)`
    height:100%;
    width:80%;
    margin:0 auto;
    display:grid;
    grid-template-columns: 100px 1fr 100px;
    grid-template-rows: 1fr;
    align-items: center;
`
export const LogoWrapper = styled.div`
    display:flex;
    align-content:center;
`
export const LogoIcon = styled.img`
    height:2.5rem;
`
export const TextWrapper = styled.div`
    justify-self:center;
`
export const Text = styled.div`

`
export const LinkWrapper = styled.div`
    justify-self:end;

`
export const PageLink = styled.a`
    font-size:2rem;
    display:flex;
    align-content:center;
    color:white;
    transition:all 0.2s ease-in-out;

    &:hover{
        font-size:2.2rem;
    }
    
`
export const FooterContainer = styled.div`
    height:70px;
    width:100%;
    background:black;
    color:white;
    transition:all 0.3s ease-in-out;

    @media (max-width:1200px){

    }
    @media (max-width:992px){
        
    }
    @media (max-width:768px){
        
    }
    @media (max-width:576px){
        ${FooterWrapper}{
            width:90%;
            grid-template-columns: 50px 1fr 50px;
        }
        ${LogoIcon}{
            height:2rem;
        }
        ${Text}{
            font-size:.9rem;
        }
        ${PageLink}{
            font-size:1.5rem;

            &:hover{
                font-size:1.7rem;
            }
        }
    }
`