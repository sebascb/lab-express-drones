const mongoose = require("mongoose")
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";
const Drone = require('../models/Drone.model')

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
    })
    .then(()=>{
      return Drone.deleteMany();
    })
    .then (()=>{
      console.log(`Deleted all the drones`);
    })
    .then(()=>{
      return Drone.create(drones);
    })
    .then((dronesFromDB)=>{
      console.log(`Created ${dronesFromDB.length} drones`);
    })
    .then (()=>{
      mongoose.connection.close();
    })
    .catch((err) => console.log(`An error occurred while creating drones from the DB: ${err}`));
