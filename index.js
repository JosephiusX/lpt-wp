const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const keys = require('./config/keys');
const path = require('path'); // Add this line
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: keys.cookieKey,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 30 * 24 * 60 * 1000,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

// After all your other routes:
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  const express = require('express');
  const mongoose = require('mongoose');
  const session = require('express-session');
  const passport = require('passport');
  const keys = require('./config/keys');
  const path = require('path'); // Make sure to require 'path'
  const fs = require('fs'); // And 'fs'
  
  require('./models/User');
  require('./services/passport');
  
  mongoose.connect(keys.mongoURI);
  
  const app = express();
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  app.use(
    session({
      secret: keys.cookieKey,
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 30 * 24 * 60 * 1000,
      },
    })
  );
  
  app.use(passport.initialize());
  app.use(passport.session());
  
  require('./routes/authRoutes')(app);
  
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    
    // Here's where we add our catch-all route
    app.get('*', function(req, res, next) {
      const filePath = path.join(__dirname, 'client/build', 'index.html');
  
      // Log the path to the console for debugging
      console.log(`Attempting to serve: ${filePath}`);
  
      // Send the file if it exists
      fs.access(filePath, fs.constants.F_OK, (err) => {
        if(err) {
          console.log('File does not exist');
          next(err);
        } else {
          console.log('File exists');
          res.sendFile(filePath);
        }
      });
    });
  }
  
  const PORT = process.env.PORT || 5000;
  app.listen(PORT);
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);