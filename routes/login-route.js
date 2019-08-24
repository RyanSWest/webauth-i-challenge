const knex=require('knex');
const router = require('express').Router();
const db =require('../data/dbConfig.js');
const bcrypt=require('bcryptjs')
const Users = require ('../usersModel')
const protected = require ('../auth/protected')

// router.post('/', (req, res) => {
//     let {username,password}=req.body 
//     db('users')
//     .where({username})
//     .first()
//     .then(user =>{
//         if(user&& bcrypt.compareSync(password,user.password)){
//             req.session.username=user.username
//         res.status(200).json({message: `Welcome ${user.username}, you have logged in `})
//         }else{
//             res.status(401).json({message:'you shall not pass!'})
//         }
//         })
//     .catch(err=>{
//         res.status(500).json({error:err,message:'Unable to log in you hacker' })
//     })
//       });


      router.post('/', (req, res) => {
        let { username, password } = req.body;
       console.log(username, password, req.session, req.session.username)
      
        Users.findBy({ username })
          .first()
          .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
              res.status(200).json({ message: `Welcome ${user.username}!` });
            } else {
              res.status(401).json({ message: 'Invalid Credentials' });
            }
          })
          .catch(error => {
            res.status(500).json(error.message);
          });
      });
      


module.exports=router