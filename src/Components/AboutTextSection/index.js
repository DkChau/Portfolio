import React from 'react'
import {
    AboutContainer,
    AboutWrapper,
    Text,
    TextWrapper,
    Header,
    HeaderWrapper,
    Wrapper,
} from './AboutSectionElements'

const AboutTextSection = (props) => {

    return (
        <AboutContainer 
            bgColor={props.data.bgColor} 
            txtColor={props.data.txtColor} 
        >
            <AboutWrapper>
                <TextWrapper>
                    <Text>
                        <Wrapper>
                            {props.data.text}
                        </Wrapper>
                    </Text>
                </TextWrapper>
                <HeaderWrapper>
                    <Header>
                        <Wrapper>
                            {props.data.header}
                        </Wrapper>
                    </Header>
                </HeaderWrapper>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default AboutTextSection
