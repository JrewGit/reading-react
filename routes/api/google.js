const router = require("express").Router();
const googleControl = require("../../controllers/googleControl");

router.route("/").get(googleControl.findAll);

module.exports = router;
