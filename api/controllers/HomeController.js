/**
 * HomeController
 *
 * @description :: Server-side logic for showing homepage
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  /**
   * @param req
   * @param res
   */
  index: function(req, res) {
    return res.send(req.user);
  }
};

