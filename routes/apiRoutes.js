const router = require("express").Router();
const db = require("../models/workout");

router.get("/api/workouts", (req, res) => {
	db.find()
		.then((dbData) => {
			res.json(dbData);
		})
		.catch((err) => {
			res.json(err);
		});
});


module.exports = router;
