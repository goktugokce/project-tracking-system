const verifySignUp = require("./verifySignUp");
const getIfUserExists = require("./getIfUserExists");
const verifyJwt = require("./verifyJwt");
const getIfCourseExists = require("./getIfCourseExists");

module.exports = {
  verifySignUp,
  getIfUserExists,
  verifyJwt,
  getIfCourseExists
};