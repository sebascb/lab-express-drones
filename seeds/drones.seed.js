const mongoose = require("mongoose")
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";
const Drone = require('../models/Drone.model')

const initialDrones = [
    {
        name: "Drone1",
        propellers: 10,
        maxSpeed: 28
    },
    {
        name: "Drone2",
        propellers: 8,
        maxSpeed: 40
    },
    {
        name: "Drone3",
        propellers: 12,
        maxSpeed: 35
    }
]

const connectionDB = async () => {
    try{
        await mongoose
        .connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }) 
        console.log("Connection with the database done")
    }
    catch(err){
        console.log(err)
    }
} 
connectionDB()
