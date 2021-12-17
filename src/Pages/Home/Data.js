import Blog from '../../Images/ProjectImages/Blog.png'

export const ProjectData = [
    {
        title:'Blog',
        text:`A Blog built with React that utilizes my REST API.`,
        image:Blog,
        linkTo:'/projects/blog',
        subHead:'Full Stack Project',
        imgFirst:false
        
    },
    {
        title:'Blog API',
        text:`A REST API built using express and JWT Tokens for authentication`,
        image:Blog,
        linkTo:'/projects/blogapi',
        subHead:'Full Stack Project',
        imgFirst:true
    },
    {
        title:'Blog Controller',
        text:`An bare-bones API Controller built using react that allows for authentication and modification of blog posts. `,
        image:Blog,
        linkTo:'/projects/blogcontroller',
        subHead:'Full Stack Project',
        imgFirst:false
    },
    {
        title:'Members Forum',
        text:`An express application that utilizes passport and MongoDB to create/authenticate users and allow them to post messages.`,
        image:Blog,
        linkTo:'/projects/membersforum',
        subHead:'Full Stack Project',
        imgFirst:true
    },

]
