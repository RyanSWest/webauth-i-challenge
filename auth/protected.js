const bcrypt = require('bcryptjs');

const Users = require('../usersModel');

// module.exports = (req, res, next) => {
//   const { username, password } = req.headers;
//   console.log('8888',req.session )

//   if ( req.session) {
     
//     next();
   
//         } else {
//           res.status(401).json({ message: 'Invalid Credentials' });
//         }
      
  
// };
 const db =require('../data/dbConfig.js');

function protected(req,res,next){
    const {username, password}= req.body;
    console.log( req.session)
    // if(username&&password){
    //   db('users')
    //   .where({username})
    //   .first()
    //   .then(user => {
    //     if (user&& bcrypt.compareSync(password,user.password)) {
    //       next();
    //     } else {
    //       res.status(401).json({message: 'You shall not pass!'});
    //     }
    //   })
    //   .catch(err => {
    //     res.status(500).json({error:err,message:'Unable to see users at this time'});
    //   });
    // }
    if(req.session && req.session.user){
       next();
    }else{
      res.status(401).json({message:'you shall not pass!'})
    }
  }

  module.exports = protected