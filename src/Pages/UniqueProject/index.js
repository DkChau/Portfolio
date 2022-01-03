import React, {useState, useEffect} from 'react'
import Footer from '../../Components/Footer'
import ViewProject from '../../Components/ViewProject'
import { ScreenWrapper, UniqueContainer, UniqueWrapper } from './UniqueElements'
import {useParams} from 'react-router-dom';
import {projectData} from '../../Pages/UniqueProject/Data';
import ProjectDescriptionSection from '../../Components/ProjectDescriptionSection';
import BlackScreen from '../../Components/BlackScreen';
import BannerSection from '../../Components/BannerSection';
import {bannerData} from './BannerData'

const UniqueProject = () => {

    const [loadImage, setLoadImage] = useState(false);

    const transitionVariant = {
        hidden:{x:'-100vw'},
        show:{
            x:'0',
            transition:{
                duration:0.5,
                ease:'easeInOut',
                when:'beforeChildren',
            }
        },
        showLoading:{

        },
        exit:{
            x:'100vw',
            transition:{
                type:'tween',
                duration:0.5,
                ease:'easeInOut',
                when:'afterChildren'
            }
        }
    }
    
    const {id} = useParams();
    const project = projectData[id]

    useEffect(()=> {
        if(project){
            let img;
            const imageLoadPromise = new Promise(resolve => {
                img = new Image();
                img.onload = resolve;
                img.src = project.imgSrc;
            });
            
            imageLoadPromise.then(()=>{
                setTimeout(()=>{
                    setLoadImage(true);
                },1000)
            })
        }
    },[project])
    
    if(!project){
        return <div>Project not found</div>
    }
    else if(!loadImage){
        return <div>loading</div>
    }

    return (
        <UniqueContainer
            variants={transitionVariant}
            initial='hidden'
            animate='show'
            exit='exit'
        >
            <ViewProject project={project}/>
            <ScreenWrapper>
                <BlackScreen/>
                <UniqueWrapper>
                    <ProjectDescriptionSection project={project}/>
                    <BannerSection data={bannerData}/>
                </UniqueWrapper>
            </ScreenWrapper>
            <Footer/>
        </UniqueContainer>
    )
}

export default UniqueProject
