import styled, {keyframes} from 'styled-components';

const circleKeyframes = keyframes`
    0%{
        transform:translateY(0);
        opacity:0;
    }
    100%{
        opacity:1;
        transform:translateY(-15px);
    }
`

export const LoadContainer = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
// export const CircleHeading = styled.div`
//     font-size:5rem;
//     font-weight:600;
//     position:absolute;
//     top:25%;
// `
export const CircleWrapper = styled.div`
    display:flex;
`
export const LoadCircle = styled.div`

    width:3rem;
    height:3rem;
    border-radius:50px;
    background:black;
    margin:0 1rem;
    animation: ${circleKeyframes} .8s infinite ease-in-out alternate ;

    &:nth-child(${props=>props.numChild}){
        animation-delay: ${props=>props.delay};
    }

    @media (max-width:567px){

        width:2rem;
        height:2rem;
        &:nth-child(5){
            display:none
        }
    }
`