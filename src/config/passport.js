const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const {SECRET_OR_KEY} = require('./constants');

passportStrategy = (passport) => {
	var opts = {}
	opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
	opts.secretOrKey = SECRET_OR_KEY;
	// opts.issuer = 'accounts.examplesoft.com';
	// opts.audience = 'yoursite.net';
	passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
		// console.log(jwt_payload.data._id);
	    User.findOne({_id: jwt_payload.data._id}, function(err, user) {
					// console.log(user);
	        if (err) {
	            return done(err, false);
	        }
	        if (user) {
	            return done(null, user);
	        } else {
	            return done(null, false);
	            // or you could create a new account
	        }
	    });
	}));
};

module.exports = passportStrategy;
