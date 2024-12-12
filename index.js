const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// const cors = require('cors');

const app = express();

dotenv.config()

const userRoutes = require('./routes/user.js');
const workoutRoutes = require('./routes/workout.js'); 
mongoose.connect(process.env.MONGODB_STRING);
let db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error!"));
db.once("open", ()=> console.log("Now connected to MongoDB Atlas."));



app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/users", userRoutes);
app.use("/workouts", workoutRoutes);


if(require.main === module){
	app.listen(process.env.PORT || 3000, ()=> {
		console.log(`API is now online on port ${process.env.PORT || 3000}`);
	})
}

module.exports = {app, mongoose};