const Lecturer = require("../models/index")["Lecturer"];
const Student = require("../models/index")["Student"];


getUser = async (req, res, next) => {
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
    await DBType.findOne({
        where: {
            email: email
        }
    }).then(user => {
        if(!user) {
            return res.status(400).send("User does not exist");
        }
        res.currentUser = user;
        next();
    });
};
const getIfUserExists = {
    getUser: getUser,
};

module.exports = getIfUserExists;