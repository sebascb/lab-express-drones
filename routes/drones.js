const express = require('express');
const router = express.Router();
router.use(express.json())
// require the Drone model here

//router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  const Drone = require("../models/Drone.model")
  router.route('/drones')
  .get( async (req, res, next) => {
  try {
    let all = await Drone.find()
    res.render("drones/list", {all})
  } catch(err) {
    console.log(err)
  } 
})
//});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try{
    const {name, propellers, maxSpeed} = req.body
    const createDrone = await Drone.create({ name, propellers, maxSpeed })
    all = await Drone.find()
    res.render("drones/list", {all})
  }
  catch(err){
    res.render("drones/create-form")
  }
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
