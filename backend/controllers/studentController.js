const StudentCoursePair = require("../models/index")["StudentCoursePair"];

exports.enrollToCourse = async (req, res) => {
    const userType = req.userType;
    const userId = req.userId;

    if(userType === "student" && userId){
        await StudentCoursePair.findOrCreate({
            where: {
                courseId: req.body.courseId,
                studentId: userId
            },
        }).then((pair, created) => {
            if(created){
                res.status(200).send("Enrolled successfully");
            }
            else{
                res.status(400).send("Already enrolled to this course");
            }
            
        }).catch(() => {
            res.status(400).send("Enrollment failed");
        });
    }
    else{
        res.status(401).send("Unauthorized");
    }
}  