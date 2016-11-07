import Bcrypt from 'bcrypt';
import local from 'passport-local';
let LocalStrategy = local.Strategy;
import User from '../schemas/user';


export default (passport) => {
console.log('whoa');
  // Setup Strategies

  passport.serializeUser((user, done) => {
    console.log(1, user);
    done(null, user._id);
  });
  passport.deserializeUser((id, done) => {
    console.log(2);
    User.findById(id, function(err, user){
      done(err, user);
    });
  });


  passport.use(new LocalStrategy({
      usernameField: 'username',
      passwordField: 'password'
    },
    function (username, password, done) {
      console.log(1.2);
      User.findOne({username: username}, (err, user) => {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, {message: 'Incorrect username.'});
        }

        Bcrypt.compare(password, user.password, (compareErr, res) => {
          if (compareErr || !res) {
            return done(null, false, {message: 'Incorrect password.'});
          }

          console.log('x', user);
          return done(null, user);
        });
      });
    }
  ));

};
