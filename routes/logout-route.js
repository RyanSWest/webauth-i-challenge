const router = require('express').Router();

router.get('/logout',(req,res)=>{
    if(req.session){
      req.session.destroy(err=>{
        res.send('logged out')
      })
    }else{
      res.end()
    }
  })

  module.exports=router