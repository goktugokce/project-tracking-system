const Course = require("../models/index")["Course"];
const StudentCoursePair = require("../models/index")["StudentCoursePair"];

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

getCourseIfAccessible = async (req, res, next) => {
    const userType = req.userType;
    const userId = req.userId;
    const courseId = req.body.courseId || req.params.courseId;
    if(userType === "lecturer" && userId){
        await Course.findOne({
            where: {
                id: courseId
            }
        }).then(course => {
            if(!course) {
                return res.status(400).send("Course does not exist");
            }
            res.currentCourse = course;
            next();
        });
    }
    else if(userType === "student" && userId){
        // StudentCoursePair
        await StudentCoursePair.findOne({
            where: {
                studentId: userId,
                courseId: courseId // req.body.courseId,
            },
            include: Course
        }).then(course => {
            if(!course) {
                return res.status(400).send("Course does not exist");
            }
            res.currentCourse = course;
            next();
        });
    }
    else{
        return res.status(401).send("Unauthorized");
    }
};


const getIfCourseExists = {
    getCourse: getCourse,
    getCourseIfAccessible: getCourseIfAccessible
};

module.exports = getIfCourseExists;