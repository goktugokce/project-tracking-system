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
        }).then(() => {
            res.status(200).send("Lecturer created successfully");
        }).catch(() => {
            res.status(400).send("Lecturer creation failed");
        });
    }
    else if(req.body.userType === "student") {
        await Student.create({
            studentNumber: req.body.studentNumber,
            email: req.body.email,
            password: bycrypt.hashSync(req.body.password, 8),
            name: req.body.name,
            surname: req.body.surname
        }).then(() => {
            res.status(200).send("Student created successfully");
        }).catch(() => {
            res.status(400).send("Student creation failed");
        });
    }
};

