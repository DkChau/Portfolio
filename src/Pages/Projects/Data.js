import {
    BlogSmall,
    AmiiboSmall,
    MembersSmall,
    BattleshipSmall,
    ModernSmall,
    BlogApiSmall,
    ControllerSmall
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
        text:`A REST API built using Express, MongoDB, and JWT Tokens.`,
        image:BlogApiSmall,
        linkTo:'/projects/blogapi',
        subHead:'Full Stack Project',
        imgFirst:true
    },
    {
        title:'Blog Controller',
        text:`An bare-bones API Controller built using React that allows for authentication with JWT Tokens and modification of Blog posts. `,
        image:ControllerSmall,
        linkTo:'/projects/blogcontroller',
        subHead:'Full Stack Project',
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
    {
        title:'Modern Responsive Website',
        text:`A React based app that changes according to modern responsive breakpoints in order to serve different devices.`,
        image:ModernSmall,
        linkTo:'/projects/modernresponsive',
        subHead:'Front-End Project',
        imgFirst:false
    },
    {
        title:'Redux Shopping',
        text:`A React-Redux application that utilizes a REST API to create a pseudo-shopping website and display data`,
        image:AmiiboSmall,
        linkTo:'/projects/reduxshopping',
        subHead:'Front-End Project',
        imgFirst:true
    },
    {
        title:'Redux Battleship',
        text:`A React-Redux Battleship game with A.I and drag-drop controls`,
        image:BattleshipSmall,
        linkTo:'/projects/reduxbattleship',
        subHead:'Front-End Project',
        imgFirst:false
    },
]