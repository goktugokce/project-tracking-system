const controller = require("../controllers/userController");
const { getIfUserExists, verifyJwt } = require("../middleware");


module.exports = function(app) {
  // https://stackoverflow.com/a/62070323
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  
  app.get(
    "/api/user/profile",
    [
        verifyJwt.verifyToken,
        getIfUserExists.getUser
    ],
    controller.profile);


  app.post(
    "/api/user/updatePassword",
    [
      verifyJwt.verifyToken,
    ],
    controller.updatePassword
);

};