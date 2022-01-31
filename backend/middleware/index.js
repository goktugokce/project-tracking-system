const verifySignUp = require("./verifySignUp");
const getIfUserExists = require("./getIfUserExists");
const verifyJwt = require("./verifyJwt");
const getIfCourseExists = require("./getIfCourseExists");
const getIfHomeworkExists = require("./getIfHomeworkExists");

module.exports = {
  verifySignUp,
  getIfUserExists,
  verifyJwt,
  getIfCourseExists,
  getIfHomeworkExists
};