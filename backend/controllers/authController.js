const bcrypt = require('bcrypt');
const db = require("../models");
const sequelize = db.sequelize;
const Lecturer = require("../models/index")["Lecturer"];
const Student = require("../models/index")["Student"];
const config = require("../config/jwtConfig");
const emailConfig = require("../config/emailConfig");
const jwt = require("jsonwebtoken");
const mailer = require("../utils/nodeMailer");

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

    // UUID may be another option for confirmation code
    const confirmationToken = jwt.sign({email: req.body.email, userType: req.body.userType}, emailConfig.secret);
    await DBType.create({
        studentNumber : req.body.studentNumber ? req.body.studentNumber : null,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        name: req.body.name,
        surname: req.body.surname,
        confirmationCode: confirmationToken.toString(),
    }).then(() => {
        mailer.sendEmail(req.body.name + " " + req.body.surname, req.body.email, "Email Verification", confirmationToken);
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
            if(user.status != "confirmed"){
                res.status(400).send("Email verification required");
            }
            else{

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
        }
    }).catch((e) => {
        console.log(e);
        res.status(400).send("Signin failed");
    });
}


exports.confirm = async (req, res) => {
    let userType = "";
    jwt.verify(req.params.confirmationCode, emailConfig.secret, (err, decoded) => {
        if(err) {
          return catchError(err, res);
        }
        userType = decoded.userType;
    });

    if(userType === "lecturer"){
        DBType = Lecturer;
    }
    else if(userType === "student"){
        DBType = Student;
    }
    else{
        res.status(400).send("Invalid user type");
    }

    await DBType.findOne({
        where: {
            confirmationCode: req.params.confirmationCode
        }
    }).then(user => {
        if(user) {

            user.status = "confirmed";

            user.save().then(() => {
                res.status(200).send("User confirmed successfully");
            }
            ).catch(() => {
                res.status(400).send("User confirmation failed");
            });
        }
        else {
            res.status(400).send("User does not exist");
        }
    }).catch(() => {
        res.status(400).send("User confirmation failed");
    });
}

