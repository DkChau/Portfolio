import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

export const HeroWrapper = styled(motion.div)`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
`
export const HeroText = styled(motion.h1)`
    font-size:3.4rem;
    color:white;
    font-weight:700;
`
export const HeroSubText = styled(motion.h2)`
    font-size:2.3rem;
    font-weight:300;
    color:#000000;
    font-family:'lora';

`
export const ProjectText = styled.span`
    font-size:1.6rem;
    transition:all 0.3s ease-in-out;

    &.text2{
        transform: translateY(3rem) rotate(30deg);
    }
`
export const ProjectLink = styled(Link)`
    text-decoration:none;
    font-family:'lora';
    color:black;
    overflow:hidden;
    display:flex;
    flex-direction:column;
    height:100%;
    height:2.1rem;

`
export const ArrowWrapper = styled.span`
    width:1.6rem;
    display:flex;
    overflow:hidden;
    margin-left:1rem;
`
export const IconWrapper = styled.span`
    font-size:1.6rem;
    height:2.1rem;
    display:flex;
    align-items:center;
    transition:all 0.3s ease-in-out;

    &.arrow2{
        transform:translateX(-200%)
    }
`
export const LinkWrapper = styled(motion.div)`
    display:grid;
    grid-template-columns: auto auto;
    overflow:hidden;
    margin:2rem 0;
    height:2.1rem;

    &:hover{
        ${ProjectText}{
            &.text1{
                transform: translateY(-5rem) rotate(30deg);
            }
            &.text2{
                transform: translateY(-2.1rem) rotate(0);
            }
        }
        ${IconWrapper}{
            &.arrow1{
                transform:translateX(100%)
            }
            &.arrow2{
                transform:translateX(-100%)
            }
        }
    }
`
export const AnimationWrapper = styled(motion.div)`
    height:auto;
    width:auto;
    overflow-y:hidden;
    background:black;
    padding:0 20px;
    margin:20px 0;
`
export const HeroContainer = styled(motion.div)`
    background:#ffffff;
    height:100vh;
    position:relative;
    background:transparent;
    transition:all 0.3s ease-in-out;

    @media (max-width:1200px){
        ${HeroText}{
            font-size:3.2rem;
        }
        ${HeroSubText}{
            font-size:2.1rem;
        }
    }
    @media (max-width:992px){
        ${HeroText}{
            font-size:3rem;
        }
        ${HeroSubText}{
            font-size:1.9rem;
        }     
    }
    @media (max-width:768px){

    }
    @media (max-width:576px){
        ${HeroText}{
            font-size:2.3rem;
        }
        ${HeroSubText}{
            font-size:1.6rem;
        }
        ${LinkWrapper}{
            height:1.8rem;
            &:hover{
                ${ProjectText}{
                    &.text1{
                        transform: translateY(-3.9rem) rotate(30deg);
                    }
                    &.text2{
                        transform: translateY(-1.8rem) rotate(0);
                    }
                }
                ${IconWrapper}{
                    &.arrow1{
                        transform:translateX(100%)
                    }
                    &.arrow2{
                        transform:translateX(-100%)
                    }
                }
    }
        }
        ${ProjectText}{
            font-size:1.3rem;

            &.text2{
                transform: translateY(2.5rem) rotate(30deg);
            }
        }
        ${ArrowWrapper}{
            width:1.3rem;
        }
        ${IconWrapper}{
            height:1.8rem;
            font-size:1.3rem;
        }
    }
`