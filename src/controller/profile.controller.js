const {
  selectProfile,
  selectExperienceProfile,
  selectPortofolioProfile,
} = require("../models/profile.model");

const { selectUser, patchUserByToken } = require("../models/users.model");

exports.readProfile = (req, res) => {
  selectProfile(req.params.id, (err, data) => {
    if (data.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Profile by id not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Get profile user by id",
      results: data.rows[0],
    });
  });
};

exports.readProfileByToken = (req, res) => {
  selectUser(req.userData.id, (err, data) => {
    if (data.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Profile by token not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Get profile user by token",
      results: data.rows[0],
    });
  });
};

exports.readExperience = (req, res) => {
  selectExperienceProfile(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    }

    if (data.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Experience not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "List of experience",
      results: data.rows,
    });
  });
};

exports.readPortofolio = (req, res) => {
  selectPortofolioProfile(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    }

    if (data.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Portofolio not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "List of portofolio",
      results: data.rows,
    });
  });
};

exports.updateEmploye = (req, res) => {
  patchUserByToken(req.userData.id, req.body, (err, result) => {
    if (err) {
      console.log(err);
    }

    if (result.rows.length === 0) {
      return res.status(200).json({
        success: false,
        message: `User doesn't exist`,
      });
    }

    return res.status(200).json({
      success: true,
      message: `User updated`,
      results: result.rows[0],
    });
  });
};
