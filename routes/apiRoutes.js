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

// POST workout
router.post("/api/workouts", ({ body }, res) => {
	db.create(body)
		.then((dbData) => {
			res.json(dbData);
		})
		.catch((err) => {
			res.json(err);
		});
});

// PUT/UPDATE workout

router.put("/api/workouts/:id", ({ body, params }, res) => {
	db.findByIdAndUpdate(params.id, { $push: { exercises: body } }, 
        { new: true, runValidators: true })
		.then((dbData) => {
			res.json(dbData);
		})
		.catch((err) => {
			res.json(err);
		});
});

module.exports = router;
