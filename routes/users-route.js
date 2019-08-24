const knex=require('knex');
const router = require('express').Router();
const db =require('../data/dbConfig.js');
const protected=require('../auth/protected.js')
const Users = require('../usersModel');

// router.get('/',protected,(req, res) => {
//   console.log(req.session, "***=>", req.session.user)
//     db('users')
//     .then(users=>{
//       res.status(200).json(users)
//     })
//     .catch(err =>{
//         res.status(500).json({error:err,message:'Unable to get the Users.'})
//     })
//   });

  router.get('/', protected, (req, res) => {
    Users.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
  });
  

  router.post('/', async(req,res)=>{
   try{
     const users = req.body;
     const[id] = await db('users').insert(users)
     res.status(201).json(users);
   }catch(err){
     console.log('Post error', err)
     res.status(500).json({message: 'failed to Post.'})
   }
  })


module.exports=router