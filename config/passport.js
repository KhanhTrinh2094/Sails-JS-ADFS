var passport = require('passport');
var SamlStrategy = require('passport-saml').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new SamlStrategy(
  {
    entryPoint: 'https://myapps.microsoft.com/signin/test-saml2/2898db16-d63f-43eb-bcd0-15c3fc6c443a',
    thumbprint: '861299E8E897579538AD97F29F4AF344874879E0'
  },
  function(profile, done) {
    var data = {
      email: profile['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'],
      givenname: profile['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname'],
      surname: profile['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname']
    }
    done(null, data);
  })
);