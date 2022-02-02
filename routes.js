const express = require('express');
const router = express.Router();
const Car = require("./models/car");

//We add the CRUD operations to our initialized router from now on.
// Fetch all cars
router.get("/cars", async (req, res) => 
{
    try 
    {
		const cars = await Car.find();
		res.send(cars);
    } 
    catch (error) 
    {
		return res.status(500).json({ message: err.message });
    }
});

//Exports for other modules to use the routing.
module.exports = router;