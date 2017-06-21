// Importing Passport, strategies, and config
const passport = require('passport'),
    User = require('../models/user'),
    JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    LocalStrategy = require('passport-local');

const localOptions = { usernameField: 'email' };

// Setting up local login strategy
const localLogin = new LocalStrategy(localOptions, function (email, password, done) {
    User.findOne(
        { email: email },
        function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false, { error: 'Your login details could not be verified. Please try again.' }); }

            user.comparePassword(password, function (err, isMatch) {
                if (err) { return done(err); }
                if (!isMatch) { return done(null, false, { error: "Your login details could not be verified. Please try again." }); }

                return done(null, user);
            });
        });
});

const jwtOptions = {
    // Telling Passport to check authorization headers for JWT
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    // Telling Passport where to find the secret
    secretOrKey: process.env.SECRET
};

// Setting up JWT login strategy
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
    User.findById(payload._id, function (err, user) {
        if (err) { return done(err, false); }

        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
});

function generateToken(user) {
    return jwt.sign(user, config.secret, {
        expiresIn: 10080 // in seconds
    });
}

// Set user info from request
function setUserInfo(request) {
    return {
        _id: request._id,
        firstName: request.profile.firstName,
        lastName: request.profile.lastName,
        email: request.email
    }
}