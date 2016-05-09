var express = require('express');
var router = express.Router();

/* HOMEPAGE */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Online Resume Builder'
  });
});

/* LOGIN */
router.get('/login', function(req, res, next) {
  res.render('login', {
    title: 'Login | Online Resume Builder'
  });
});

/* REGISTER */
router.get('/register', function(req, res, next) {
  res.render('register', {
    title: 'Register | Online Resume Builder'
  });
});

/* FORGET PASSWORD */
router.get('/forget-password', function(req, res, next) {
  res.render('forgetpassword', {
    title: 'Forget Password | Online Resume Builder'
  });
});

module.exports = router;
