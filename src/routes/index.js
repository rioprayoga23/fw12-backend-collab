const routes = require("express").Router();
const authMiddleware = require("../middleware/auth.middleware");

routes.use("/users", require("./users.router"));
routes.use("/userSkill", require("./userSkills.router"));
routes.use("/skills", require("./skills.router"));
routes.use("/purpose", require("./purposes.router"));
routes.use("/resetPassword", require("./resetPassword.router"));
routes.use("/portofolio", require("./portofolio.router"));
routes.use("/company", require("./company.router"));
routes.use("/contacts", require("./contacts.router"));
routes.use("/experiences", require("./experiences.router"));
routes.use("/auth", require("./auth.router"));

routes.use("/profile", require("./profile.router"));

module.exports = routes;
