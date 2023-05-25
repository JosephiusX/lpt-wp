const passport = require('passport');

module.exports = function(app) {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    function(req, res) {
      res.redirect('/prices');
    }
  );

  app.get('/api/logout', function(req, res) {
    req.logout(function(err) {
      if (err) {
        // Handle the error
        console.error(err);
        res.status(500).send('Error logging out');
      } else {
        // Redirect the user after a successful logout
        res.redirect('/');
      }
    });
  });

  app.get('/api/current_user', function(req, res) {
    res.send(req.user);
  });
};

