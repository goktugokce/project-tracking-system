const Lecturer = require("../models/index")["Lecturer"];
const Student = require("../models/index")["Student"];
const bcrypt = require('bcrypt');

exports.profile = (req, res) => {
    const user = res.currentUser;
    if(user){
        res.status(200).send({
            //refreshToken: refreshToken,
            accessToken: req.token,
            name: user.name,
            surname: user.surname,
            email: user.email,
            userType: req.userType,
            studentNumber : user.studentNumber ? user.studentNumber : null
        });
    }
    else{
        res.status(400).send("Can't find user");
    }
}

exports.updatePassword = async (req, res) => {
    let userType = req.userType;
    let email = req.email;

    if(userType === "lecturer"){
        DBType = Lecturer;
    }
    else if(userType === "student"){
        DBType = Student;
    }
    else{
        res.status(400).send("Invalid user type");
    }
    
    // check current password
    await DBType.findOne({
        where: {
            email: email
        }
    }).then(user => {
        if(user) {
            if(bcrypt.compareSync(req.body.password, user.password)) {
                bcrypt.hash(req.body.newPassword, 8, (err, hash) => {
                    DBType.update(
                    {
                        password: hash,
                    },
                    {
                        where: { email: email },
                        returning: true,
                        plain: true,
                    }).then(() => {
                        res.status(200).send("Password updated successfully");
                    }).catch(() => {
                        res.status(400).send("Password update failed");
                    });
                });
            }
            else {
                res.status(400).send("Current password is incorrect");
            }
        }
        else
            res.status(400).send("No user found");
    }).catch(() => {
        res.status(400).send("Error occured");
    });
}