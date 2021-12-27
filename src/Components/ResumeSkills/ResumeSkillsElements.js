import styled from 'styled-components'
import {motion} from 'framer-motion'

export const SkillsWrapper = styled.div`
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    width:100%;
    align-items: start;

`   
export const Header = styled(motion.div)`
    display:flex;
    font-size:2rem;
    font-weight:700; 
    padding:.875rem 0;
    text-decoration:underline;
    text-decoration-thickness:3px;
`
export const ContentWrapper = styled(motion.div)`
    display:grid;
    grid-template-columns: 1fr;
    grid-auto-rows:auto;
    padding-top: .5rem;
    grid-gap: .2rem;
`
export const Row = styled.div`
    display:flex;
`
export const RowHeader = styled.div`
    font-weight:600;
    font-size:1.5rem;
    
    
`
export const List = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`
export const Item = styled.div`
    padding-left: .8rem;
    font-size:1.2rem;
    font-weight:300;
`
export const AnimationWrapper = styled.div`
    width:auto;
    overflow:hidden;
    display:flex;
`
export const SkillsContainer = styled.div`
    width:100%;
    height:auto;
    display: flex;
    justify-content: center;
    align-items: center;
    transition:opacity 1.5s ease-in-out;

    @media (max-width:1200px){
        ${Header}{
            font-size:1.9rem;
        }
        ${RowHeader}{
            font-size:1.4rem;
        }
        ${List}{
            font-size:1.1rem;
        }
    }
    @media (max-width:992px){
        ${Header}{
            font-size:1.8rem;
        }
        ${RowHeader}{
            font-size:1.4rem;
        }
        ${Item}{
            font-size:1.1rem;
        }
    }
    @media (max-width:768px){
        ${Header}{
            font-size:1.6rem;
        }
        ${RowHeader}{
            font-size:1.4rem;
        }
        ${Item}{
            font-size:1.1rem;
        }
    }
    @media (max-width:576px){
        width:90%;
        margin:0 auto;
        justify-content:flex-start;
        ${SkillsWrapper}{
            
        }
        ${AnimationWrapper}{
            justify-content:center;
        }
        ${Header}{
            font-size:1.6rem;
        }
        ${Row}{
            flex-direction:column;
        }
        ${List}{
            justify-content:flex-start;
        }
        ${RowHeader}{
            font-size:1.4rem;
        }
        ${Item}{
            font-size:.8rem;
        }

    }
`