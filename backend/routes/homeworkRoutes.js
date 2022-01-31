const controller = require("../controllers/homeworkController");
const { getIfCourseExists,getIfHomeworkExists, verifyJwt } = require("../middleware");


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
        "/api/homework/create",
        [
            verifyJwt.verifyToken,
            getIfCourseExists.getCourseIfAccessible
        ],
        controller.createHomework
    );

    app.post(
        "/api/homework/update",
        [
            verifyJwt.verifyToken,
            getIfCourseExists.getCourseIfAccessible
        ],
        controller.updateHomework
    );

    app.post(
        "/api/homework/submit",
        [
            verifyJwt.verifyToken,
            getIfCourseExists.getCourseIfAccessible,
            getIfHomeworkExists.getHomework
        ],
        controller.submitHomework
    );

    app.get(
        "/api/homework/:courseId",
        [
            verifyJwt.verifyToken,
            getIfCourseExists.getCourseIfAccessible,
        ],
        controller.getAllHomeworksOfCourse
    );

    app.get(
        "/api/homework/:courseId/:homeworkId",
        [
            verifyJwt.verifyToken,
            getIfCourseExists.getCourseIfAccessible,
        ],
        controller.getHomeworkByIdOfCourse
    );

    app.get(
        "/api/homework/submission/:courseId/:homeworkId",
        [
            verifyJwt.verifyToken,
            getIfCourseExists.getCourseIfAccessible,
            getIfHomeworkExists.getHomework
        ],
        controller.getSubmissions
    );

};