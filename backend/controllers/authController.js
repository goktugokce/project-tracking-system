const bcrypt = require('bcrypt');
const db = require("../models");
const sequelize = db.sequelize;
const Lecturer = require("../models/index")["Lecturer"];
const Student = require("../models/index")["Student"];
const config = require("../config/jwtConfig");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
    if(req.body.userType === "lecturer"){
        DBType = Lecturer;
    }
    else if(req.body.userType === "student"){
        DBType = Student;
    }
    else{
        res.status(400).send("Invalid user type");
    }

    await DBType.create({
        studentNumber : req.body.studentNumber ? req.body.studentNumber : null,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        name: req.body.name,
        surname: req.body.surname
    }).then(() => {
        res.status(200).send("User created successfully");
    }).catch(() => {
        res.status(400).send("User creation failed");
    });
};

exports.signin = async (req, res) => {
    if(req.body.userType === "lecturer"){
        DBType = Lecturer;
    }
    else if(req.body.userType === "student"){
        DBType = Student;
    }
    else{
        res.status(400).send("Invalid user type");
    }

    await DBType.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if(user) {
            if(bcrypt.compareSync(req.body.password, user.password)) {
                const token = jwt.sign({ id: user.id, userType: req.body.userType, email: user.email}, config.secret, {
                    expiresIn: config.jwtExpiration
                });
                res.status(200).send({
                    //refreshToken: refreshToken,
                    accessToken: token,
                    email: user.email,
                    userType: req.body.userType
                });
            }
            else {
                res.status(400).send("Invalid password");
            }
        }
    }).catch(() => {
        res.status(400).send("Signin failed");
    });
}

