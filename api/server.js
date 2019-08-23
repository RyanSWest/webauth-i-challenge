
const express = require('express');
const helmet = require('helmet');
const session=require('express-session')
const KnexSessionStore=require('connect-session-knex')(session);

const server = express();







const usersRouter = require('../routes/users-route.js');
const registerRouter = require('../routes/register-route.js');
const loginRouter =require('../routes/login-route.js')
const logoutRouter=require('../routes/logout-route.js')

// server.use(session(sessionConfig));
server.use(helmet());
server.use(express.json());

server.use('/api/register', registerRouter);
server.use('/api/login', loginRouter);
server.use('/api/users',usersRouter)
server.use('/api/logout',logoutRouter)

module.exports=server