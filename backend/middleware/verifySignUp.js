const db = require("../models");
const Lecturer = require("../models/index")["Lecturer"];
const Student = require("../models/index")["Student"];

const Op = db.Sequelize.Op; // to use and/or operators in sequelize queries

checkDuplicateEmail = (req, res, next) => { 
    let userType = req.body.userType;
    if(userType === "lecturer") {
        Lecturer.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if(user) {
                return res.status(400).send("Email already exists");
            }
            next();
        });
    }
    else if(userType === "student") {
        Student.findOne({
            where: {
                [Op.or]: [{email: req.body.email}, {studentNumber: req.body.studentNumber}]
            }
        }).then(user => {
            if(user) {
                return res.status(400).send("Email or student number already exists");
            }
            next();
        });
    }
};

const verifySignUp = {
    checkDuplicateEmail: checkDuplicateEmail,
};

module.exports = verifySignUp;