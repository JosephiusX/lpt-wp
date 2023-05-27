// C:\Users\josep\OneDrive\Desktop\lpt-cra\server\routes\authRoutes.js
const passport = require('passport');

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google', { session: false }),
    (req, res) => {
      req.session.user = {
        id: req.user.id,
        // Store any other user fields that you need in the session
      };
      res.redirect('/prices');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout((err) => {
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

  app.get('/api/current_user', (req, res) => res.send(req.user));
};
