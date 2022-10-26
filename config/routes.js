module.exports = function (app, config, passport) {
    app.get("/", function (req, res) {
        if (req.isAuthenticated()) {
            res.render("home", {
                user: req.user
            });
        } else {
            res.render("home", {
                user: null
            });
        }
    });

    app.get(
        "/login",
        passport.authenticate(config.passport.strategy, {
            successRedirect: "/",
            failureRedirect: "/login",
            scope: ["email profile"]
        })
    );

    app.post(
        config.passport.saml.path,
        passport.authenticate(config.passport.strategy, {
            failureRedirect: "/",
            failureFlash: true
        }),
        function (req, res) {
            res.redirect("/");
        }
    );

    app.post(
        config.passport.facebook.path,
        passport.authenticate(config.passport.strategy, {
            failureRedirect: "/",
            failureFlash: true
        }),
        function (req, res) {
            res.redirect("/");
        }
    );

    app.get(
        config.passport.google.path,
        passport.authenticate(config.passport.strategy, {
            failureRedirect: "/",
            failureFlash: true
        }),
        function (req, res) {
            res.redirect("/");
        }
    );

    app.get("/signup", function (req, res) {
        res.render("signup");
    });

    app.get("/profile", function (req, res) {
        if (req.isAuthenticated()) {
            res.render("profile", {
                user: req.user
            });
        } else {
            res.redirect("/login");
        }
    });

    app.get("/logout", function (req, res) {
        req.logout();
        // TODO: invalidate session on IP
        res.redirect("/");
    });
};
