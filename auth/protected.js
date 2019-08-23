const bcrypt= require('bcryptjs');
const db =require('../data/dbConfig.js');

function protected(req,res,next){ if(req.session&& req.session.username){
    next();
  }else{
    res.status(401).json({message:'you shall not pass!'})
  }
}

module.exports = protected