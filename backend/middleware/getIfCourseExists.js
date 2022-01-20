const Course = require("../models/index")["Course"];


getCourse = async (req, res, next) => {

    await Course.findOne({
        where: {
            id: req.body.courseId
        }
    }).then(course => {
        if(!course) {
            return res.status(400).send("Course does not exist");
        }
        res.currentCourse = course;
        next();
    });
};
const getIfCourseExists = {
    getCourse: getCourse,
};

module.exports = getIfCourseExists;