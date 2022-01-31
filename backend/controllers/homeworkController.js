const Homework = require("../models/index")["Homework"];
const Submission = require("../models/index")["Submission"];

exports.createHomework = async (req, res) => {
  const userType = req.userType;
  const userId = req.userId;

  if (userType === "lecturer" && userId == res.currentCourse.lecturerId) {
    // check if the user is the lecturer of the course
    await Homework.create({
      courseId: res.currentCourse.id,
      deadline: req.body.deadline,
      homeworkName: req.body.homeworkName,
    })
      .then(() => {
        res.status(200).send("Homework created successfully");
      })
      .catch(() => {
        res.status(400).send("Homework creation failed");
      });
  } else {
    res.status(401).send("Unauthorized");
  }
};

exports.updateHomework = async (req, res) => {
  const userType = req.userType;
  const userId = req.userId;

  if (userType === "lecturer" && userId == res.currentCourse.lecturerId) {
    await Homework.update(
      {
        courseId: res.currentCourse.id,
        homeworkName: req.body.homeworkName,
        deadline: req.body.deadline,
      },
      {
        where: { id: req.body.homeworkId },
        returning: true,
        plain: true,
      }
    )
      .then(() => {
        res.status(200).send("Homework updated successfully");
      })
      .catch(() => {
        res.status(400).send("Homework update failed");
      });
  } else {
    res.status(401).send("Unauthorized");
  }
};

exports.getAllHomeworksOfCourse = async (req, res) => {
  await Homework.findAll({
    where: {
      courseId: req.params.courseId,
    },
  })
    .then((homeworks) => {
      res.status(200).send(homeworks);
    })
    .catch(() => {
      res.status(400).send("Failed to fetch homeworks");
    });
};

exports.submitHomework = async (req, res) => {
  const userType = req.userType;
  const userId = req.userId;

  if (userType === "student" && res.currentHomework.id) {
    await Submission.create({
      homeworkId: res.currentHomework.id,
      url: req.body.url,
      studentId: userId,
    })
      .then(() => {
        res.status(200).send("Homework submitted successfully");
      })
      .catch(() => {
        res.status(400).send("Homework submission failed");
      });
  } else {
    res.status(401).send("Unauthorized");
  }
};

exports.getHomeworkByIdOfCourse = async (req, res) => {
  const homeworkId = req.params.homeworkId;
  const courseId = req.params.courseId;

  await Homework.findOne({
    where: {
      id: homeworkId,
      courseId: courseId,
    },
    raw: true,
  })
    .then((homework) => {
      res.status(200).send(homework);
    })
    .catch(() => {
      res.status(400).send("Homework fetch failed");
    });
};

exports.getSubmissions = async (req, res) => {
  const userType = req.userType;
  const userId = req.userId;

  const homeworkId = req.params.homeworkId;

  if (userType === "lecturer" && userId) {
    await Submission.findAll({
      where: {
        homeworkId: homeworkId,
      },
    })
      .then((homeworks) => {
        res.status(200).send(homeworks);
      })
      .catch(() => {
        res.status(400).send("Failed to fetch submissions");
      });
  }
  else if(userType === "student" && userId) {
    await Submission.findAll({
      where: {
        homeworkId: homeworkId,
        studentId: userId,
      },
    })
      .then((homeworks) => {
        res.status(200).send(homeworks);
      })
      .catch(() => {
        res.status(400).send("Failed to fetch submissions");
      });
  }
  else{
    res.status(401).send("Unauthorized");
  }
};
