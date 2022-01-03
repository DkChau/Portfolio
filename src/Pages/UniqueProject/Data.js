import {
    BlogHome,
    AmiiboHome,
    MembersHome,
    BattleshipHome,
    ModernHome,
} from '../../Images/ProjectImages'

export const projectData = {
    blog:{
        name:'Blog',
        description:
        `
This Blog serves as the front-end to a full-stack project consisting of a back-end REST API and a front-end React App that displays data.

The Blog grabs data from the REST API and displays it accordingly. The site is designed to facilitate easy movement between routes for the user's convenience.
        `,
        tags:[
            'HTML',
            'CSS',
            'Javascript',
            'Express',
            'JWT Auth',
            'React',
            'MongoDB',
            'Bcrypt',
            'NodeJS',
        ],
        appSite:'https://novaark.github.io/Blog',
        codeSite:'https://github.com/novaark/Blog',
        imgSrc:BlogHome,
    },
    blogapi:{
        name:'Blog API',
        description:`
        This REST API serves as the back-end to a full-stack project consisting of a back-end REST API and a front-end React App that displays data.

        The API allows for the creation, retrieving, updating, and deletion of blog posts and comments. The API also utilizes JWT Tokens and Cookies for authentication purposes in order to prevent abuse of API.
        
        The API is created using Express and NodeJS
        `,
        tags:[
            'HTML',
            'CSS',
            'Javascript',
            'Express',
            'JWT Auth',
            'React',
            'MongoDB',
            'Bcrypt',
            'NodeJS',
        ],
        appSite:'https://dcblogapi.herokuapp.com/api/post',
        codeSite:'https://github.com/novaark/BlogApi',
        imgSrc:BlogHome,
    },
    blogcontroller:{
        name:'Blog Controller',
        description:` 
            This Blog Controller serves as the intermediary between the front-end and back-end apps in a full-stack project consisting of a back-end REST API and a front-end React App that displays data.
        
            This Blog Controller, created with React, makes requests to various parts of the REST API and makes manipulation of Blog Posts much easier.

            The Controller has routes for authentication and all C.R.U.D API Routes.
        `,
        tags:[
            'HTML',
            'CSS',
            'Javascript',
            'Express',
            'JWT Auth',
            'React',
            'MongoDB',
            'Bcrypt',
            'NodeJS',
        ],
        appSite:'https://novaark.github.io/BlogController',
        codeSite:'https://github.com/novaark/BlogController',
        imgSrc:BlogHome,
    },
    modernresponsive:{
        name:'Modern Responsive Website',
        description:`
            A React-based website for all devices. 

            This website utilizes Bootstrap's responsive breakpoints and media queries in order to manipulate DOM elements and create a website for the modern age.
        `,
        tags:[
            'HTML',
            'CSS',
            'Javascript',
            'React',
        ],
        appSite:'https://novaark.github.io/modernWebsite',
        codeSite:'https://github.com/novaark/modernWebsite',
        imgSrc:ModernHome,
    },
    membersforum:{
        name:'Members Forum',
        description:`
        Members forum is a website where users can create accounts and post messages, built completely with Express, NodeJS, and MongoDB.

        Members forum uses Bcrypt and Passport in order to create and authenticate users without compromising security. 
        
        New users are able to see the author and date of each message, but in order to create a message, members will have to input the secret message "secretMember".
        `,
        tags:[
            'HTML',
            'CSS',
            'Javascript',
            'Express',
            'MongoDB',
            'Bcrypt',
            'NodeJS',
            'Passport',
            'Jade'
        ],
        appSite:'https://membersforum.herokuapp.com/',
        codeSite:'https://github.com/novaark/MembersForum',
        imgSrc:MembersHome,
    },
    reduxshopping:{
        name:'Redux Amiibo Shopping',
        description:`
            A Redux-React app that utilizes the public Amiibo REST API to obtain and display data.

            The app serves as a pseudo-shopping website, where images and information of figurines are made readily available and each figurine is given a fake price, but no real purchase is possible.

            The App utilizes Redux in order to more smoothly facilitate the usage of state through-out the application.
        `,
        tags:[
            'HTML',
            'CSS',
            'Javascript',
            'React',
            'Redux'
        ],
        appSite:'https://novaark.github.io/reduxShopping',
        codeSite:'https://github.com/novaark/reduxShopping',
        imgSrc:AmiiboHome,
    },
    reduxbattleship:{
        name:'Redux Battleship',
        description:`
            A React-Redux app that allows for the user to engage in a game of Battleship with a custom-made A.I.

            Users will drag and drop their ships at any location of their choice before starting the game. Once the game has started, the User and A.I will alternate turns until one side has sunk all the ships of the opposing party.

            This app utilizes Redux primarily as a learning experience.
        `,
        tags:[
            'HTML',
            'CSS',
            'Javascript',
            'React',
            'Redux'
        ],
        appSite:'https://novaark.github.io/reduxBattleship',
        codeSite:'https://github.com/novaark/reduxBattleship',
        imgSrc:BattleshipHome,
    },
}