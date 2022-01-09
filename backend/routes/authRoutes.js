const controller = require("../controllers/authController");
const { verifySignUp } = require("../middleware");


module.exports = function(app) {
  // https://stackoverflow.com/a/62070323
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateEmail
    ],
    controller.signup
  );

};