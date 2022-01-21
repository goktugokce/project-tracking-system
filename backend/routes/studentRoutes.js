const controller = require("../controllers/studentController");
const { getIfCourseExists, verifyJwt } = require("../middleware");


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

    app.post(
        "/api/student/enroll",
        [
            verifyJwt.verifyToken,
            getIfCourseExists.getCourse,
        ],
        controller.enrollToCourse
    );
    
};


