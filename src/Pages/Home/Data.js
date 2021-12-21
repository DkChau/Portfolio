import Blog from '../../Images/ProjectImages/Blog.png'
import {
    BlogSmall,
    AmiiboSmall,
    MembersSmall,
} from '../../Images/ProjectImages'

export const ProjectData = [
    {
        title:'Blog',
        text:`A Blog built with React that utilizes my REST API.`,
        image:BlogSmall,
        linkTo:'/projects/blog',
        subHead:'Full Stack Project',
        imgFirst:false
        
    },
    {
        title:'Blog API',
        text:`A REST API built using express and JWT Tokens for authentication`,
        image:BlogSmall,
        linkTo:'/projects/blogapi',
        subHead:'Full Stack Project',
        imgFirst:true
    },
    {
        title:'Redux Shopping',
        text:`A React-Redux application that utilizes the Amiibo REST API to create a pseudo-shopping website`,
        image:AmiiboSmall,
        linkTo:'/projects/reduxshopping',
        subHead:'Front-End Project',
        imgFirst:false
    },
    {
        title:'Members Forum',
        text:`An express application that utilizes passport and MongoDB to create/authenticate users and allow them to post messages.`,
        image:MembersSmall,
        linkTo:'/projects/membersforum',
        subHead:'Full Stack Project',
        imgFirst:true
    },

]
