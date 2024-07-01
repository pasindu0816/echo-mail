const passport = require('passport');

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {                 //"google" = GoogleStrategy   (predefined)
      scope: ["profile", "email"],
    })
  );
  
  app.get(
    "/auth/google/callback", 
    passport.authenticate("google"),
    (req, res) => {
       res.redirect('/surveys');
    }
  );  

  app.get('/api/logout', (req, res, next) => {
    req.logout((err) => {
      if (err) { return next(err); }
      res.redirect('/'); // Redirect to home or login page after logout
    });
  });
  

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
