//C:\Users\josep\OneDrive\Desktop\lpt-cra\server\services\passport.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      console.log('Deserialized user:', user);  // Debug line
      done(null, user);
    })
    .catch((err) => {
      console.log('Error during deserialization:', err);  // Debug line
      done(err);
    });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: process.env.NODE_ENV === 'production' 
      ? "https://wild-comparison-production.up.railway.app/auth/google/callback" 
      : "http://localhost:3000/auth/google/callback",
  proxy: process.env.NODE_ENV === 'production'
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);