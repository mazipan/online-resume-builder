var express = require('express');
var router = express.Router();

const ROOT_URL = "http://localhost:3000";

/* HOMEPAGE */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Resume Builder',
    root : ROOT_URL
  });
});

/* HOMEPAGE */
router.get('/index.html', function(req, res, next) {
  res.render('index', {
    title: 'Homepage | Resume Builder',
    root : ROOT_URL
  });
});

/* LOGIN */
router.get('/login', function(req, res, next) {
  res.render('login', {
    title: 'Login | Resume Builder',
    root : ROOT_URL
  });
});

/* REGISTER */
router.get('/register', function(req, res, next) {
  res.render('register', {
    title: 'Register | Resume Builder',
    root : ROOT_URL
  });
});


/* REGISTER */
router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', {
    title: 'Dashboard | Resume Builder',
    root : ROOT_URL
  });
});

/* FORGET PASSWORD */
router.get('/forget-password', function(req, res, next) {
  res.render('forgetpassword', {
    title: 'Forget Password | Resume Builder',
    root : ROOT_URL
  });
});

module.exports = router;
