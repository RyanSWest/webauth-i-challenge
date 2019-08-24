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
router.delete('/', (req,res)=> {
  console.log(req.session)
  if (req.session){
    req.session.destroy((err) => {

     if (err) {res.send('unable to logout...');
    }else {
      res.send('bye' );
    }
  });

 } else {
  res.end();
}
});

  module.exports=router