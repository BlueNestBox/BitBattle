var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

exports.setup = function (User, config) {
  passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password' // this is the virtual field on the model
    },
    function(email, password, done) {
      User.findOne({
        email: email.toLowerCase()
      }, function(err, user) {
        if (err) return done(err);

        if (!user) {
          return done(null, false, { message: 'This email is not registered.',
                                     action: { text: 'Click here to sign up with it.', name: 'signup', data: email }
                                   });
        }
        if (!user.authenticate(password)) {
          return done(null, false, { message: 'This password is not correct.',
                                     action: {text: 'Forgot password?', name: 'recover', data: email }
                                   });
        }
        return done(null, user);
      });
    }
  ));
};
