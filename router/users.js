const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require('../controller/user_controller');

router.post('/signUp', usersController.create);

// use passport as a middleware to authenticate
router.post('/signIn', passport.authenticate(
    'local',
    {failureRedirect: '/users/error'},
), usersController.createSession);

router.get('/error',(req,res)=>{
    return res.status(400).json({message:"Not able to Sign IN",val:0});
});

router.get('/sign-out', usersController.destroySession);

router.get('/checkAuthentication',usersController.checkAuthentication);


module.exports = router;