const router = require("express").Router();
const bookControl = require("../../controllers/bookControl");

router.route("/").get(bookControl.findAll).post(bookControl.create);

router.route("/:id").get(bookControl.findById).put(bookControl.update).delete(bookControl.remove);

module.exports = router;