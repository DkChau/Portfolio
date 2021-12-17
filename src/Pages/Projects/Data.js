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
    {
        title:'Modern Responsive Website',
        text:`A React based website that changes according to modern responsive breakpoints in order to serve different devices.`,
        image:Blog,
        linkTo:'/projects/modernresponsive',
        subHead:'Front-End Project',
        imgFirst:false
    },
    {
        title:'Redux Shopping',
        text:`A React-Redux application that utilizes the Amiibo REST API to create a pseudo-shopping website`,
        image:Blog,
        linkTo:'/projects/reduxshopping',
        subHead:'Front-End Project',
        imgFirst:true
    },
    {
        title:'Redux Battleship',
        text:`A React-Redux Battleship game with A.I and drag-drop controls`,
        image:Blog,
        linkTo:'/projects/reduxbattleship',
        subHead:'Front-End Project',
        imgFirst:false
    },
]