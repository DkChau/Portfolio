import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

export const IndividualContainer = styled(motion.div)`
    width:100%;
    max-width:85rem;
    margin:0 auto;
    padding:5rem 0 6rem 0;
`
export const IndividualWrapper = styled.div`
    width:100%;
    margin:0 auto;
    display:grid;
    grid-template-columns:${(props)=> props.imgFirst ? 'auto 1fr' : '1fr auto'};
    grid-template-rows: 1fr;
    grid-template-areas: ${(props)=> props.imgFirst ? `'image text'` : `'text image'`};
`
export const ImageWrapper = styled.div`
    display:flex;
    width:500px;
    height:325px;
    grid-area:image;
    overflow:hidden;
    justify-content: center;

`
export const ProjectImage = styled(motion.img)`
    width:100%;
    height:100%;
`
export const ContentWrapper = styled(motion.div)`
    height:100%;
    display:flex;
    /* justify-content: ${(props)=> props.imgFirst ? 'flex-end' : 'flex-start'}; */
    align-items: center;
    
`
export const ContentText = styled.div`
    display:grid;
    width:90%;
    /* height:100%; */
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    grid-area:text;
    /* padding-left:75px; */
    padding-left:${(props)=> props.imgFirst ? '100px' : '0'};
`
export const Title = styled(motion.div)`
    font-size:2.4rem;
    font-weight:800;
    padding:5px 0;
    color:black;
    overflow-y:hidden;
`
export const SubHead = styled(motion.p)`
    font-weight:500;
    color:black;
    overflow:hidden;
`
export const Text = styled(motion.span)`
    font-size:1.2rem;
    font-family:'lora';
    /* height:100%; */
    padding:20px 0;
    overflow:hidden;
`
export const ProjectLink=styled.span`
    font-size: 1rem;
    display:block;
    align-self:center;
`
export const ArrowWrapper = styled.span`
    display:grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    width:100%;
    height:4rem;
    transition:transform 0.3s ease;
    font-size:1rem;
    justify-content:center;
    align-content:center;
    text-align:center;
`
export const Arrow = styled.span`
    display:flex;
    align-self:center;
    justify-self: center;
    justify-content: center;
    font-size:2rem;
`
export const LinkWrapper = styled(Link)`
    display:flex;
    border:1px solid black;
    height:2rem;
    width:9.375rem;
    text-decoration:none;
    color: #000000;
    overflow-y: hidden;

    &:hover{
        ${ArrowWrapper}{
            transform:translateY(-2rem);
        }
    }
`
export const AnimationWrapper = styled.div`
    height:auto;
    width:auto;
    overflow-y:hidden;
    position:relative;
    justify-self:start;
    display:flex;
    align-items:flex-start;
`
export const HeadingWrapper = styled(motion.div)`
    height:100%;
    width:100%;
    overflow-y:hidden;
    display:flex;
    background:black;
    position:absolute;
    left:0;
    top:0;
`
export const ButtonWrapper = styled(motion.div)`
    height:100%;
    width:100%;
    overflow-y:hidden;
    top:0;
    left:0;
    justify-self:start;
`