const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require('mongoose');
const keys = require("../config/keys");

const User = mongoose.model('users');

passport.serializeUser((user, done) => {              //(a)take the user id from the User model's instance, put some identifying peice of information into the cookie.
  done(null, user.id); 
});

passport.deserializeUser((id, done) => {              //(b)pull '(a)' back and turn it back into a user 
  User.findById(id).then( user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true // Added to support Heroku or proxies
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id })
        .then((existingUser) => {
          if (existingUser) {
            done(null, existingUser);
          } else {
            new User({ googleId: profile.id })
              .save()
              .then(user => done(null, user))
              .catch(err => done(err));
          }
        })
        .catch(err => done(err));
    }
  )
);