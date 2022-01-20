const controller = require("../controllers/courseController");
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
        "/api/course/create",
        [
            verifyJwt.verifyToken,
            //getIfUserExists.getUser,
        ],
        controller.createCourse
    );

    app.post(
        "/api/course/update",
        [
            verifyJwt.verifyToken,
            //getIfUserExists.getUser,
            getIfCourseExists.getCourse
        ],
        controller.updateCourse
    );

    app.get(
        "/api/course/getAll",
        [
            verifyJwt.verifyToken,
            //getIfUserExists.getUser,
        ],
        controller.getAllCourses
    );
    app.get(
        "/api/course/:id",
        [
            verifyJwt.verifyToken,
            //getIfUserExists.getUser,
        ],
        controller.getCourseById
    );

};