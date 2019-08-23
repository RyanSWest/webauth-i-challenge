const knex=require('knex');
const router = require('express').Router();
const db =require('../data/dbConfig.js');
const bcrypt=require('bcryptjs')
const Users = require('../usersModel')

router.post('/', (req, res) => {
    let user=req.body 
    const hash=bcrypt.hashSync(user.password,10)
    user.password=hash
    db('users')
    .insert(req.body)
    .then(user =>{
        res.status(200).json(user)
        })
    .catch(err=>{
        res.status(500).json({error:err,message:'Unable to sign up at this time' })
    })
      });

     router.post('/', (req, res) => {
        let user = req.body;
        const hash = bcrypt.hashSync(user.password, 10);
        user.password = hash;
        Users.add(user)
          .then(saved => {
            res.status(201).json(saved);
          })
          .catch(error => {
            res.status(500).json(error);
          });
      });


module.exports=router