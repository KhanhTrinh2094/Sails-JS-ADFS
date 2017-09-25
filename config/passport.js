var passport = require('passport');
var SamlStrategy = require('passport-saml').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findOne({ id: id } , function (err, user) {
    done(err, user);
  });
});

passport.use(new SamlStrategy(
  {
    entryPoint: 'https://myapps.microsoft.com/signin/test-saml2/2898db16-d63f-43eb-bcd0-15c3fc6c443a',
    issuer: 'https://localhost:1337/callback',
    callbackUrl: 'https://localhost:1337/callback',
    thumbprint: '861299E8E897579538AD97F29F4AF344874879E0',
    identifierFormat: null,
    signatureAlgorithm: 'sha256'
  },
  function(profile, done) {
    
    console.log(profile);
    done(null);
  })
);