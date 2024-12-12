const express = require("express");
const workoutController = require('../controllers/workout.js');
const { verify } = require("../auth.js");

const router = express.Router();

router.post("/", verify, workoutController.addWorkout);

router.get("/getMyWorkouts", verify, workoutController.myWorkouts);

router.delete("/deleteWorkout/:id", verify, workoutController.deleteWorkout);

router.patch("/updateWorkout/:id/", verify, workoutController.updateWorkout);

router.patch("/completeWorkoutStatus/:id/", verify, workoutController.completeWorkoutStatus);

module.exports = router;