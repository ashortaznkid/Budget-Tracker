const withAuth = (req, res, next) => {
    // redirect the request to the login route if not logged in
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;