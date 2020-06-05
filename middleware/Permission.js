
module.exports = function(req, res, next){
  if (req.user){
    next()
  }else {
    if(req.path === '/personal.html') {
      res.redirect('/login.html');
    }else{
      next()
    }
  }
}