var express = require('express');
var router = express.Router();

/* HOMEPAGE */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Resume Builder'
  });
});

/* HOMEPAGE */
router.get('/index.html', function(req, res, next) {
  res.render('index', {
    title: 'Resume Builder'
  });
});

/* LOGIN */
router.get('/login', function(req, res, next) {
  res.render('login', {
    title: 'Resume Builder'
  });
});

/* REGISTER */
router.get('/register', function(req, res, next) {
  res.render('register', {
    title: 'Resume Builder'
  });
});


/* REGISTER */
router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', {
    title: 'Resume Builder'
  });
});

/* FORGET PASSWORD */
router.get('/forget-password', function(req, res, next) {
  res.render('forgetpassword', {
    title: 'Forget Password | Online Resume Builder'
  });
});

module.exports = router;
