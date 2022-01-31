const Homework = require("../models/index")["Homework"];

getHomework = async (req, res, next) => {
  await Homework.findOne({
    where: {
      courseId: res.currentCourse.id,
    },
    raw: true,
  }).then((homework) => {
    if (!homework) {
      return res.status(400).send("Homework does not exist");
    }
    res.currentHomework = homework;
    next();
  });
};

const getIfHomeworkExists = {
    getHomework: getHomework,
};

module.exports = getIfHomeworkExists;
