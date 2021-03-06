import React, {useEffect} from 'react'
import {
    SkillContainer,
    Skill,
    SkillWrapper,
    SkillHeading,
    SkillGrid,
    SkillItem,
    IconWrapper,
    AnimationWrapper,
} from './SkillElements'
import { SkillData } from './SkillData'
import {useInView} from 'react-intersection-observer';
import {useAnimation} from 'framer-motion';


const SkillsComponent = () => {

    const {ref, inView} = useInView({
        threshold:.8,
        triggerOnce:true
    });

    const animation = useAnimation();

    const headingVariant = {
        hidden:{
            opacity:0
          },
          show:{
            opacity:1,
            transition:{
                duration:0.5
            }
          },
          exit:{
            opacity:0
          }
    }
    const textVariant = {
        hidden:{
          y:'100%'
        },
        show:{
          y:0,
          transition:{
              duration:0.5
          }
        },
        exit:{
          y:'100%'
        }
    }

    useEffect(()=>{
        if(inView){
            animation.start("show")
        }
        else{

        }
    },[animation, inView])
    return (
        <SkillContainer>
            <SkillWrapper ref={ref}>
                <SkillHeading
                    initial='hidden'
                    animate={animation}
                    exit='exit'
                    variants={headingVariant}
                >Skills</SkillHeading>
                <SkillGrid>
                    {SkillData.map((skill,index)=>{
                        return (
                            <AnimationWrapper
                                key={`skill${index}`}
                            >
                                <SkillItem
                                    initial='hidden'
                                    animate={animation}
                                    exit='exit'
                                    variants={textVariant}
                                >
                                    <IconWrapper>
                                        <skill.icon></skill.icon>
                                    </IconWrapper>
                                    <Skill>{skill.name}</Skill>
                                </SkillItem>
                            </AnimationWrapper>

                        )
                    })}
                </SkillGrid>
            </SkillWrapper>
        </SkillContainer>
    )
}

export default SkillsComponent
