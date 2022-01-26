import {
    BlogSmall,
    AmiiboSmall,
    MembersSmall,
    BlogApiSmall,
} from '../../Images/ProjectImages'

export const ProjectData = [
    {
        title:'Blog',
        text:`A Blog built with React that utilizes my personal REST API.`,
        image:BlogSmall,
        linkTo:'/projects/blog',
        subHead:'Full Stack Project',
        imgFirst:false
        
    },
    {
        title:'Blog API',
        text:`A REST API built using Express, MongoDB, and JWT Tokens for authentication`,
        image:BlogApiSmall,
        linkTo:'/projects/blogapi',
        subHead:'Full Stack Project',
        imgFirst:true
    },
    {
        title:'Redux Shopping',
        text:`A React-Redux application that utilizes a REST API to create a pseudo-shopping website and display data`,
        image:AmiiboSmall,
        linkTo:'/projects/reduxshopping',
        subHead:'Front-End Project',
        imgFirst:false
    },
    {
        title:'Members Forum',
        text:`An Express application that utilizes Passport and MongoDB to create/authenticate users and allow them to post messages.`,
        image:MembersSmall,
        linkTo:'/projects/membersforum',
        subHead:'Full Stack Project',
        imgFirst:true
    },

]
