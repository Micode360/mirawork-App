const localStrategy = require('passport-local').Strategy;
const  User = require('../models/user.reg.model');
const bcrypt = require('bcrypt');



module.exports = function (passport) {

passport.use(new localStrategy({ usernameField: 'email' },
    (email, password, done) => {

    User.findOne({ email: email }, function(err, user) {
       if (err) done(null, false, { message: err} ); 

      else if(!user) done(null, false, { message: 'Incorrect email.' });
      
      bcrypt.compare(password, user.password, (err, match) => {
          if(err) throw err;

          else if (match) return done(null, user)

          else return done(null, false, {message: 'incorrect password'})
          
      });
    });
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});


passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
         done(null, user);
  });
 });

}

