const router = require('express').Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const jwToken = require('jsonwebtoken'); 
const userModel = require('../models/user.reg.model');
const jwtSecret = require('../config/keys').jwtSecret;
const jwtverification = require('../middlewares/jwt.auth');



//Registeration
router.post('/signup', async (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const more = req.body.more;
    const password = req.body.password;

    const newUserData = new userModel({
        firstName,
        lastName,
        email,
        password,
        more
    });

    const crypted = await bcrypt.hash(newUserData.password, 10).then(cryptedPassword => {
        return cryptedPassword;
    }).catch(err => err);

    newUserData.password = crypted;

    newUserData.save()
    .catch(err => res.status(400).json('Reg Error' + err));

        
        const payload = {
            user: {
                id: newUserData._id,
            }
        };

        jwToken.sign(
            payload,
            jwtSecret,
            {expiresIn: 5000},
            (err, token) => {
                if(err) throw err;
                res.json({
                    success: 'token success',
                    token: token
                });
            }
        )
        
});



//Sign In 
router.post('/signin',(req, res) => {
    if (req.body.email == "") return res.json('Fill in your email');
    if (req.body.password == "") return res.json('Fill in your password');
    passport.authenticate('local', (err, user) => {
        if (err) throw err;
        if (!user) return res.json("user doesn't exists");
        else {
                    jwToken.sign({
                user: {
                    id: user._id,
                }
            },
                jwtSecret,
                {expiresIn: '7d'},
                (err, token) => {
                    if(err) throw err;
                    res.json({
                        success: 'token success',
                        token: token
                    });
                }
            )
           // return res.redirect('/dash/home'); 
        }
    })(req, res);

});










//Tesing Something
router.get('/person',jwtverification , async (req,res) => {
try{
    const user = await userModel.find()
    res.json(user)
}catch(error){
    console.error(error.message);
    return res.status(500).send("Server error")
}
});



module.exports = router;
