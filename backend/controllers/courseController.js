const Course = require("../models/index")["Course"];



exports.createCourse = async (req, res) => {
    const userType = req.userType;
    const userId = req.userId;

    if(userType === "lecturer" && userId){
        await Course.create({
            courseName: req.body.courseName,
            lecturerId: userId,
        }).then(() => {
            res.status(200).send("Course created successfully");
        }).catch(() => {
            res.status(400).send("Course creation failed");
        });
    }
    else{
        res.status(401).send("Unauthorized");
    }
}  

exports.updateCourse = async (req, res) => {
    const userType = req.userType;
    const userId = req.userId;

    if(userType === "lecturer" && userId){
        await Course.update(
            {
                courseName: req.body.courseName,
            },
            {
              where: { id: req.body.courseId },
              returning: true,
              plain: true,
            }
          ).then(() => {
            res.status(200).send("Course updated successfully");
        }).catch(() => {
            res.status(400).send("Course update failed");
        });
    }
    else{
        res.status(401).send("Unauthorized");
    }
}

exports.getAllCourses = async (req, res) => {
    const userId = req.userId;

    if(userId){
        await Course.findAll({
            where: {
                lecturerId: userId,
            }
        }).then(courses => {
            res.status(200).send(courses);
        }
        ).catch(() => {
            res.status(400).send("Course fetch failed");
        });
    }
}

exports.getCourseById = async (req, res) => {
    const userId = req.userId;
    const courseId = req.params.id;

    if(userId){
        await Course.findOne({
            where: {
                id: courseId,
            }
        }).then(course => {
            res.status(200).send(course);
        }
        ).catch(() => {
            res.status(400).send("Course fetch failed");
        });
    }
    else{
        res.status(401).send("Unauthorized");
    }
}