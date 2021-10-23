const express=require('express');
const port= 8000;
const server=express();
const passport = require('passport');
const cookieParser = require('cookie-parser');
const passportLocal = require('./config/passport-local-strategy');
const session = require('express-session');

server.set('view engine','ejs');
server.set('views',__dirname+'/views');

const db=require('./config/config');   //connecting to database
server.use(express.urlencoded());      //middleware for parsing the incoming data
server.use(express.static(__dirname+'/assets'));  //routing static files

const mongoConnect = require('connect-mongo');

server.use(session({
    name: 'codeial',
    // TODO change the secret before deployment in production mode
    secret: 'password',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 10)
    },
    store:mongoConnect.create({mongoUrl:'mongodb://localhost:27017/Cuvette'})
}));

server.use(passport.initialize());
server.use(passport.session());


server.use(cookieParser());

server.use(require('./router/root.js'));    //all path routing
server.listen(port,(err)=>{               //listening the server
    if(err){
        console.error("Error!");
        return;
    }
    console.log(`Server is running at port ${port}`);
});