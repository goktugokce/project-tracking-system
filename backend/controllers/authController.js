const bycrypt = require('bcrypt');
const db = require("../models");
const sequelize = db.sequelize;
const Lecturer = require("../models/index")["Lecturer"];
const Student = require("../models/index")["Student"];


exports.signup = async (req, res) => {
    if(req.body.userType === "lecturer") {
 
        // Model.create() equals to doing Model.build() and instance.save()
        await Lecturer.create({
            email: req.body.email,
            password: bycrypt.hashSync(req.body.password, 8),
            name: req.body.name,
            surname: req.body.surname
        }).then(lec => {
            res.status(200).json({
                message: "Lecturer created successfully",
                lec: lec
            });
        }).catch(err => {
            res.status(400).json({
                message: "Lecturer creation failed",
                error: err
            });
        });
    }
    else if(req.body.userType === "student") {
        await Student.create({
                studentNumber: req.body.studentNumber,
                email: req.body.email,
                password: bycrypt.hashSync(req.body.password, 8),
                name: req.body.name,
                surname: req.body.surname
        }).then(std => {
            res.status(200).json({
                message: "Strudent created successfully",
                std: std
            });
        }).catch(err => {
            res.status(400).json({
                message: "Student creation failed",
                error: err
            });
        });
    }
};

