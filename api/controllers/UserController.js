/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 
var passport = require('passport');

module.exports = {

  /**
   * @param req
   * @param res
   */
  login: function(req, res) {
    passport.authenticate('saml', function(req, res) {
      res.redirect('/');
    })(req, res);
  },

  /**
   * @param req
   * @param res
   */
  callback: [passport.authenticate(
    'saml', 
    { failureRedirect: '/', failureFlash: true }), 
    function (req, res) {
      if (!req.user) {
        throw Error("User not authenticated.");
      }
      res.redirect("/");
    }
  ],

  /**
   * @param req
   * @param res
   */
  logout: function(req, res) {
    req.logout();
    res.redirect('/');
  }
};

