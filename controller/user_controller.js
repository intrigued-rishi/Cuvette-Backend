// render the sign up page
const User = require('../model/user');

module.exports.signUp = function(req, res){
    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
}


// get the sign up data
module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        return res.status(404).json({message:"Passwords don't match",val:3});
    }
    User.findOne({email: req.body.email}, function(err, user){
        if(err){return res.status(404).json({message:"There was an error!",val:0});}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){return res.status(404).json({message:"There was an error!",val:0});}

                return res.status(200).json({message:"Successfully Logged/Signed in!",val:1});
            })
        }else{
            return res.status(200).json({message:"First Sign Up",val:2});
        }

    });
}

// check if the user is authenticated
module.exports.checkAuthentication = function(req, res){
    // if the user is signed in, then pass on the request to the next function(controller's action)
    if (req.isAuthenticated()){
        return res.status(200).json({val:1,data:req.user});
    }

    // if the user is not signed in
    return res.status(404).json({val:0});
}


// sign in and create a session for the user
module.exports.createSession = function(req, res){
    return res.status(200).json({data:req.user});
}

module.exports.destroySession = function(req, res){
    req.logout();
}