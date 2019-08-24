
const express = require('express');
const helmet = require('helmet');
const session=require('express-session')
const KnexSessionStore=require('connect-session-knex')(session);

 const sessionConfig = {
    name: 'cookie',
    secret: 'chocolate chip',
    cookie: {
        httpOnly: true,
        maxAge: 1000 *60 *2,
        secure: false,
    },
    resave:false,
    saveUninitialized: true,

    store: new KnexSessionStore({
        knex: require('../data/dbConfig'),
        tablename: 'sessions',
        sidfieldname:'sid',
        createtable:true,
        clearInterval:1000*60*14
    })
};

const server = express();






const usersRouter = require('../routes/users-route.js');
const registerRouter = require('../routes/register-route.js');
const loginRouter =require('../routes/login-route.js')
const logoutRouter=require('../routes/logout-route.js')

server.use(session(sessionConfig));
server.use(helmet());
server.use(express.json());

server.use('/api/register', registerRouter);
server.use('/api/login', loginRouter);
server.use('/api/users',usersRouter)
server.use('/api/logout',logoutRouter)
server.get('/', (req, res) => {
    res.json({ api: 'up' });
  });
  

module.exports=server